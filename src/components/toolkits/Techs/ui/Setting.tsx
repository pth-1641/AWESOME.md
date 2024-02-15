import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'preact/hooks';
import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { ITechSetting } from '../default';
import CustomInputNumber from '../../../common/CustomInputNumber';
import CustomSelect from '../../../common/CustomSelect';
import CustomTabs from '../../../common/CustomTabs';
import { EAlign } from '../../../../enums/toolkit.enum';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<ITechSetting>(id);

  if (!props) return null;

  return (
    <CustomTabs
      items={[
        {
          key: 'icon',
          label: 'Icons',
          icon: 'material-symbols-light:add',
          children: <Search {...props} />,
        },
        {
          key: 'edit',
          label: 'Edit',
          icon: 'iconamoon:edit-thin',
          children: <Edit {...props} />,
        },
      ]}
    />
  );
};

const Search = (props: ITechSetting) => {
  const [icons, setIcons] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const { editSection } = useAppStore();

  useEffect(() => {
    let timeout = setTimeout(async () => {
      const res = await fetch(
        `https://api.iconify.design/search?query=${query}&limit=999`
      );
      const data = await res.json();
      setIcons(data?.icons || []);
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = props.icons.indexOf(active.id);
      const newIndex = props.icons.indexOf(over.id);
      editSection({
        ...props,
        icons: arrayMove(props.icons, oldIndex, newIndex),
      });
    }
  };

  return (
    <>
      <h4 class="font-semibold">Search</h4>
      <input
        class="border border-white/15 bg-transparent rounded-md outline-none w-full py-1.5 px-2 mt-2 mb-4"
        type="text"
        placeholder="Search"
        onInput={(e) => setQuery(e.currentTarget.value)}
      />
      <div class="grid grid-cols-3 gap-3 max-h-80 overflow-auto">
        {icons.map((icon) => (
          <button
            key={icon}
            class="border border-white/15 rounded p-3 hover:border-emerald-400 duration-150 group"
            onClick={() => {
              if (props.icons.includes(icon)) return;
              editSection({
                ...props,
                icons: [...props.icons, icon],
              });
            }}
          >
            <Icon icon={icon} height={48} width={48} />
            <p class="text-xs mt-1.5 truncate group-hover:text-emerald-400 duration-150">
              {icon.split(':')[1]}
            </p>
          </button>
        ))}
      </div>
      <h4 class="font-semibold mt-4 flex items-center justify-between">Sort</h4>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={props.icons}
          strategy={verticalListSortingStrategy}
        >
          {props.icons.map((icon, key) => (
            <SelectedIcons key={key} index={key} icon={icon} settings={props} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

const Edit = (props: ITechSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomInputNumber
        label="Gap"
        value={props.settings.gap}
        onChange={(gap) => {
          editSection({
            ...props,
            settings: {
              ...props.settings,
              gap,
            },
          });
        }}
      />
      <CustomInputNumber
        label="Size"
        value={props.settings.size}
        onChange={(size) => {
          editSection({
            ...props,
            settings: {
              ...props.settings,
              size,
            },
          });
        }}
      />
      <CustomSelect
        label="Position"
        options={Object.values(EAlign)}
        value={props.settings.position}
        onChange={(position) => {
          editSection({
            ...props,
            settings: {
              ...props.settings,
              position,
            },
          });
        }}
      />
    </>
  );
};

const SelectedIcons = (props: {
  settings: ITechSetting;
  icon: string;
  index: number;
}) => {
  const { editSection } = useAppStore();

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.icon, transition: null });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li style={style} class="amd-border flex gap-2 p-2.5 mt-2">
      <div
        class="flex items-center gap-2 flex-1"
        ref={setNodeRef}
        {...attributes}
        {...listeners}
      >
        <button>
          <Icon icon="carbon:drag-vertical" height={20} width={20} />
        </button>
        <Icon icon={props.icon} height={36} width={36} />
        <div class="flex-1 select-none">
          <p>{props.icon.split(':')[1]}</p>
          <p class="text-xs text-emerald-400">{props.icon.split(':')[0]}</p>
        </div>
      </div>
      <button
        class="hover:text-red-500 duration-150"
        onClick={() =>
          editSection({
            ...props.settings,
            icons: props.settings.icons.filter((_, idx) => idx !== props.index),
          })
        }
      >
        <Icon icon="fluent:delete-20-regular" height={20} />
      </button>
    </li>
  );
};

export default Setting;
