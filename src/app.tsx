import { Icon } from '@iconify/react';
import { PreviewUI } from './components/PreviewUI';
import { Settings } from './components/Settings';
import { StickyGenerateButton } from './components/StickyGenerateButton';
import { ToolkitSelector } from './components/ToolkitSelector';
import { useState } from 'preact/hooks';

export function App() {
  const [activeToolkit, setActiveToolkit] = useState<boolean>(false);
  const [activeConfig, setActiveConfig] = useState<boolean>(false);

  return (
    <main class="flex max-w-screen-2xl mx-auto py-6 px-4 gap-4 h-screen">
      <button class="fixed -left-1 top-8 border border-white/20 rounded p-1 bg-[#0d1117] lg:hidden">
        <Icon icon="icon-park-solid:right-one" height={20} />
      </button>
      <button class="fixed -right-1 top-8 border border-white/20 rounded p-1 bg-[#0d1117] lg:hidden">
        <Icon icon="icon-park-solid:left-one" height={20} />
      </button>
      <ToolkitSelector
        active={activeToolkit}
        onClose={() => setActiveToolkit(false)}
      />
      <PreviewUI />
      <Settings active={activeConfig} onClose={() => setActiveConfig(false)} />
      <StickyGenerateButton />
    </main>
  );
}
