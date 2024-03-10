import { Icon } from '@iconify/react';
import { toolkits } from '../constants';
import { useAppStore } from '../store/app.store';
import { useSection } from '../hooks';

export const ToolkitSelector = () => {
  const { addSection, focusOnSection } = useAppStore();

  return (
    <div class="amd-border p-4 flex-1 max-w-64 overflow-auto">
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
  );
};
