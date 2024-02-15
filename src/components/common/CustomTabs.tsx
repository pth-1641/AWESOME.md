import { Icon } from '@iconify/react';
import { VNode } from 'preact';
import { useState } from 'preact/hooks';

type CustomTabsProps = {
  items: {
    key: string;
    label: string;
    icon?: string;
    children: VNode;
  }[];
};

const CustomTabs = ({ items }: CustomTabsProps) => {
  const [currentTab, setCurrentTab] = useState<string>(items[0].key);

  return (
    <>
      <ul
        class="mb-4 grid border-b border-white/20 relative"
        style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}
      >
        <span
          class="duration-300 absolute h-0.5 bottom-0 bg-emerald-400"
          style={{
            width: `${100 / items.length}%`,
            transform: `translateX(${items.findIndex(
              (i) => i.key === currentTab
            )}00%)`,
          }}
        />
        {items.map((item) => (
          <button
            class={`flex items-center justify-center gap-1 duration-300 pb-2.5 ${
              currentTab === item.key ? 'text-emerald-400' : ''
            }`}
            onClick={() => setCurrentTab(item.key)}
          >
            {item.icon && <Icon icon={item.icon} height="24" />}
            {item.label}
          </button>
        ))}
      </ul>
      {items.map(({ children, key }) => (currentTab === key ? children : null))}
    </>
  );
};

export default CustomTabs;
