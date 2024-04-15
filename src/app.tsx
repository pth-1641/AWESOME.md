import { PreviewUI } from './components/PreviewUI';
import { Settings } from './components/Settings';
import { StickyGenerateButton } from './components/StickyGenerateButton';
import { ToolkitSelector } from './components/ToolkitSelector';

export function App() {
  return (
    <main class="flex max-w-screen-2xl mx-auto py-6 px-4 gap-4 h-screen">
      <ToolkitSelector />
      <PreviewUI />
      <Settings />
      <StickyGenerateButton />
    </main>
  );
}
