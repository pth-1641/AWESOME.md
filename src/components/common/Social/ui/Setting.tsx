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
import CustomInputNumber from '../../CustomInputNumber';
import { CustomSelect } from '../../CustomSelect';
import { ISocialSetting, SocialIcon } from '../default';
import { EPosition } from '../social.enum';

const Setting = ({ id }: { id: string }) => {
  const [currentTab, setCurrentTab] = useState<'icon' | 'edit'>('icon');
  const props = useSectionProps<ISocialSetting>(id);

  if (!props) return null;

  return (
    <>
      <ul
        class={`mb-4 grid grid-cols-2 border-b border-white/20 pb-2.5 relative before:duration-300 before:content-[''] before:absolute before:w-1/2 before:h-0.5 before:rounded before:bg-emerald-500 before:bottom-0
      ${
        currentTab === 'icon'
          ? 'before:translate-x-0'
          : 'before:translate-x-full'
      }
      `}
      >
        <button
          class={`flex items-center justify-center gap-1 duration-300 ${
            currentTab === 'icon' ? 'text-emerald-400' : ''
          }`}
          onClick={() => setCurrentTab('icon')}
        >
          <Icon icon="material-symbols-light:add" height="28" />
          Icons
        </button>
        <button
          class={`flex items-center justify-center gap-1 duration-300 ${
            currentTab === 'edit' ? 'text-emerald-400' : ''
          }`}
          onClick={() => setCurrentTab('edit')}
        >
          <Icon icon="iconamoon:edit-thin" height="24" />
          Edit
        </button>
      </ul>
      {currentTab === 'icon' && <Search {...props} />}
      {currentTab === 'edit' && <Edit {...props} />}
    </>
  );
};

const Search = (props: ISocialSetting) => {
  const [icons, setIcons] = useState<string[]>([]);
  const [query, setQuery] = useState<string>('');
  const editSection = useAppStore((state) => state.editSection);

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
      <h4 class="font-semibold mt-4 flex items-center justify-between">Sort</h4>
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
            <SelectedIcons key={key} index={key} icon={icon} settings={props} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
};

const Edit = (props: ISocialSetting) => {
  const editSection = useAppStore((state) => state.editSection);

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
        options={Object.values(EPosition)}
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
  settings: ISocialSetting;
  icon: SocialIcon;
  index: number;
}) => {
  const editSection = useAppStore((state) => state.editSection);
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
          {...attributes}
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
        <div class="flex flex-col items-center gap-1.5">
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
          <button
            class="hover:text-sky-500 duration-150"
            onClick={() => setIsExpandLink((status) => !status)}
          >
            <Icon icon="bitcoin-icons:link-outline" height={20} />
          </button>
        </div>
      </div>
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
    </li>
  );
};

export default Setting;
