import { EToolkitType } from '../enums/share.enum';
import { useSectionProps } from '../hooks';
import { useAppStore } from '../store/app.store';
import TextSetting from './toolkits/Text/ui/Setting';
import IconSetting from './toolkits/Icon/ui/Setting';
import StatsSetting from './toolkits/Stats/ui/Setting';
import ViewsSetting from './toolkits/Views/ui/Setting';
import ImageSetting from './toolkits/Image/ui/Setting';
import QuoteSetting from './toolkits/Quote/ui/Setting';

export const Settings = () => {
  const sectionId = useAppStore((state) => state.sectionId);
  if (!sectionId) return <div class="flex-1 max-w-72 amd-border px-4 py-2.5" />;

  const section = useSectionProps<any>(sectionId);

  return (
    <div class="flex-1 max-w-72 amd-border px-4 pt-2.5 pb-5 overflow-auto">
      {section.type === EToolkitType.TEXT && <TextSetting id={sectionId} />}
      {section.type === EToolkitType.TECH && <IconSetting id={sectionId} />}
      {section.type === EToolkitType.SOCIAL && <IconSetting id={sectionId} />}
      {section.type === EToolkitType.STATS && <StatsSetting id={sectionId} />}
      {section.type === EToolkitType.VIEWS && <ViewsSetting id={sectionId} />}
      {section.type === EToolkitType.IMAGE && <ImageSetting id={sectionId} />}
      {section.type === EToolkitType.MEME && (
        <ImageSetting id={sectionId} hideUrl />
      )}
      {section.type === EToolkitType.QUOTE && <QuoteSetting id={sectionId} />}
    </div>
  );
};
