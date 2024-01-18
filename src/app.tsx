import { PreviewUI } from "./components/PreviewUI";
import { SelectorToolkit } from "./components/SelectorToolkit";
import { Settings } from "./components/Settings";

export function App() {
  return (
    <main class="flex max-w-7xl mx-auto py-6 gap-6">
      <SelectorToolkit />
      <PreviewUI />
      <Settings />
    </main>
  );
}
