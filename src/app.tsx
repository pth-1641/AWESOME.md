import { PreviewUI } from './components/PreviewUI';
import { ToolkitSelector } from './components/ToolkitSelector';
import { Settings } from './components/Settings';
import { StickyGenerateButton } from './components/StickyGenerateButton';

export function App() {
  return (
    <main class="flex max-w-7xl mx-auto py-6 px-4 gap-6 h-screen">
      <ToolkitSelector />
      <PreviewUI />
      <Settings />
      <StickyGenerateButton />
    </main>
  );
}
