import { Icon } from '@iconify/react';
import { useEffect, useState } from 'preact/hooks';
import { PreviewUI } from './components/PreviewUI';
import { Settings } from './components/Settings';
import { StickyGenerateButton } from './components/StickyGenerateButton';
import { ToolkitSelector } from './components/ToolkitSelector';
import { APP_NAME } from './constants';
import { useLocalStorage } from './hooks';
import { useAppStore } from './store/app.store';

export function App() {
  const [activeToolkit, setActiveToolkit] = useState<boolean>(false);
  const [activeConfig, setActiveConfig] = useState<boolean>(false);
  const { sections } = useAppStore();

  useEffect(() => {
    useLocalStorage.set(APP_NAME, sections);
  }, [sections]);

  console.log(sections.map((s) => s.type));

  return (
    <main class="flex max-w-screen-2xl mx-auto py-6 px-4 gap-4 h-screen">
      {activeToolkit ? null : (
        <button
          class="fixed -left-1 top-10 border border-white/20 rounded p-1 bg-primary lg:hidden"
          onClick={() => {
            setActiveToolkit(true);
            setActiveConfig(false);
          }}
        >
          <Icon icon="icon-park-solid:right-one" height={20} />
        </button>
      )}
      {activeConfig ? null : (
        <button
          class="fixed -right-1 top-10 border border-white/20 rounded p-1 bg-primary lg:hidden"
          onClick={() => {
            setActiveConfig(true);
            setActiveToolkit(false);
          }}
        >
          <Icon icon="icon-park-solid:left-one" height={20} />
        </button>
      )}
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
