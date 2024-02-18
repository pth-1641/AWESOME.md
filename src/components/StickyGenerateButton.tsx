import { Icon } from '@iconify/react';
// import { useState } from 'preact/hooks';
import { useAppStore } from '../store/app.store';
import { useGenerateMd } from '../hooks';

export const StickyGenerateButton = () => {
  // const [open, setOpen] = useState<boolean>(false);
  const sections = useAppStore((state) => state.sections);

  return (
    <div
      class={`fixed z-10 top-0 left-1/2 -translate-x-1/2`}
      onClick={() => useGenerateMd(sections)}
    >
      <Icon
        icon="icon-park-solid:down-one"
        height={28}
        className="rounded-b bg-emerald-500 cursor-pointer"
      />
    </div>
  );
};
