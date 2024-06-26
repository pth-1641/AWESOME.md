import { Icon } from '@iconify/react';
import { toolkits } from '../constants';
import { useAppStore } from '../store/app.store';
import { useSection } from '../hooks';

export const ToolkitSelector = ({
  active,
  onClose,
}: {
  active: boolean;
  onClose: () => void;
}) => {
  const { addSection, focusOnSection } = useAppStore();

  return (
    <div
      class={`bg-primary max-w-60 w-full fixed inset-y-4 left-4 z-10 lg:static lg:block ${
        active ? 'block' : 'hidden'
      }`}
    >
      <button
        class="absolute -right-5 top-6 border border-white/20 rounded p-1 bg-primary lg:hidden"
        onClick={onClose}
      >
        <Icon icon="icon-park-solid:left-one" height={20} />
      </button>
      <div class="amd-border h-full w-full p-4 overflow-auto">
        <div class="grid grid-cols-2 gap-4">
          {toolkits.map((item) => (
            <button
              class="border border-white/15 duration-200 gap-1 flex flex-col items-center justify-center rounded-lg aspect-square p-2.5 hover:border-emerald-400 hover:text-emerald-400"
              onClick={() => {
                const section = useSection(item.type);
                if (section) {
                  addSection(section);
                  focusOnSection(section.id);
                }
              }}
            >
              <Icon icon={item.iconName} height={48} />
              <span class="text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
