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
import { IIconSetting, IIcon } from '../default';
import CustomInputNumber from '../../../common/CustomInputNumber';
import CustomSelect from '../../../common/CustomSelect';
import CustomTabs from '../../../common/CustomTabs';
import { EAlign, EToolkitType } from '../../../../enums/share.enum';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IIconSetting>(id);

  if (!props) return null;

  return (
    <CustomTabs
      items={[
        {
          key: 'icons',
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

const Search = (props: IIconSetting & { type?: EToolkitType }) => {
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
      const oldIndex = props.icons.findIndex((icon) => icon.name === active.id);
      const newIndex = props.icons.findIndex((icon) => icon.name === over.id);
      editSection({
        ...props,
        icons: arrayMove(props.icons, oldIndex, newIndex),
      });
    }
  };

  return (
    <>
      <h4>Search</h4>
      <input
        class="border border-white/15 bg-transparent rounded-md outline-none w-full py-1.5 px-2 mt-2"
        type="text"
        placeholder="Search"
        onInput={(e) => setQuery(e.currentTarget.value)}
      />
      <div class="grid grid-cols-3 gap-3 max-h-80 overflow-auto my-4">
        {icons.map((icon) => (
          <button
            key={icon}
            class="border border-white/15 rounded p-3 hover:border-emerald-400 duration-150 group"
            onClick={() => {
              if (props.icons.some((i) => i.name === icon)) return;
              editSection({
                ...props,
                icons: [...props.icons, { name: icon, href: '' }],
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
      <h4 class="flex items-center justify-between">Sort</h4>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={props.icons.map((i) => i.name)}
          strategy={verticalListSortingStrategy}
        >
          {props.icons.map((icon, key) => (
            <SelectedIcons
              hasLink={props.type !== EToolkitType.TECH}
              key={key}
              index={key}
              icon={icon}
              settings={props}
            />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

const Edit = (props: IIconSetting) => {
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
  settings: IIconSetting;
  icon: IIcon;
  index: number;
  hasLink: boolean;
}) => {
  const { editSection } = useAppStore();
  const [isExpandLink, setIsExpandLink] = useState<boolean>(false);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.icon.name, transition: null });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li class="amd-border list-none mt-2 p-2.5" style={style}>
      <div class="flex gap-2">
        <div
          class="flex items-center gap-2 flex-1"
          ref={setNodeRef}
          {...(attributes as any)}
          {...listeners}
        >
          <button>
            <Icon icon="carbon:drag-vertical" height={20} width={20} />
          </button>
          <Icon icon={props.icon.name} height={36} width={36} />
          <div class="flex-1 select-none">
            <p>{props.icon.name.split(':')[1]}</p>
            <p class="text-xs text-emerald-400">
              {props.icon.name.split(':')[0]}
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center gap-1.5">
          <button
            class="hover:text-red-500 duration-150"
            onClick={() =>
              editSection({
                ...props.settings,
                icons: props.settings.icons.filter(
                  (_, idx) => idx !== props.index
                ),
              })
            }
          >
            <Icon icon="fluent:delete-20-regular" height={18} />
          </button>
          {props.hasLink ? (
            <button
              class="hover:text-sky-500 duration-150"
              onClick={() => setIsExpandLink((status) => !status)}
            >
              <Icon icon="bitcoin-icons:link-outline" height={20} />
            </button>
          ) : null}
        </div>
      </div>
      {props.hasLink ? (
        <div
          class="duration-300 overflow-hidden"
          style={{ maxHeight: isExpandLink ? '50px' : 0 }}
        >
          <input
            type="text"
            value={props.icon.href}
            class="bg-transparent amd-border outline-none rounded mt-2 px-2 py-1 w-full text-xs"
            placeholder="https://example.com"
            onInput={(e) =>
              editSection({
                ...props.settings,
                icons: props.settings.icons.map((icon, idx) => {
                  if (props.index !== idx) return icon;
                  return {
                    ...props.icon,
                    href: e.currentTarget.value,
                  };
                }),
              })
            }
          />
        </div>
      ) : null}
    </li>
  );
};

export default Setting;
