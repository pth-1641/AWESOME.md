import { EToolkitType } from '../enums/toolkit.enum';
import { useSectionSetting } from '../hooks';
import { useAppStore } from '../store/app.store';
import TextSetting from './common/Text/ui/TextSetting';

export const Settings = () => {
  const sectionId = useAppStore((state) => state.sectionId);
  if (!sectionId)
    return (
      <div class="flex-1 max-w-72 border border-white/15 rounded-lg px-4 py-2.5" />
    );

  return (
    <div class="flex-1 max-w-72 border border-white/15 rounded-lg px-4 py-2.5">
      <h3 class="font-semibold text-lg mb-3">Settings</h3>
      <TextSetting id={sectionId} />
    </div>
  );
};
