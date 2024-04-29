import { EToolkitType } from '../enums/share.enum';
import { useSectionProps } from '../hooks';
import { useAppStore } from '../store/app.store';
import TextSetting from './toolkits/Text/ui/Setting';
import IconSetting from './toolkits/Icon/ui/Setting';
import StatsSetting from './toolkits/Stats/ui/Setting';
import ViewsSetting from './toolkits/Views/ui/Setting';
import ImageSetting from './toolkits/Image/ui/Setting';
import QuoteSetting from './toolkits/Quote/ui/Setting';
import DevSocialSetting from './toolkits/DevSocial/ui/Setting';
import { Icon } from '@iconify/react';

export const Settings = ({
  active,
  onClose,
}: {
  active: boolean;
  onClose: () => void;
}) => {
  const sectionId = useAppStore((state) => state.sectionId);

  if (!sectionId)
    return (
      <div
        class={`bg-primary amd-border max-w-80 lg:max-w-72 w-full fixed inset-y-4 right-4 z-10 lg:static lg:block ${
          active ? 'block' : 'hidden'
        }`}
      >
        <button
          class="absolute -left-5 top-6 border border-white/20 rounded p-1 bg-primary lg:hidden"
          onClick={onClose}
        >
          <Icon icon="icon-park-solid:right-one" height={20} />
        </button>
      </div>
    );

  const section = useSectionProps<any>(sectionId);

  return (
    <div
      class={`bg-primary max-w-80 lg:max-w-72 w-full fixed inset-y-4 right-4 z-10 lg:static lg:block ${
        active ? 'block' : 'hidden'
      }`}
    >
      <button
        class="absolute -left-5 top-6 border border-white/20 rounded p-1 bg-primary lg:hidden"
        onClick={onClose}
      >
        <Icon icon="icon-park-solid:right-one" height={20} />
      </button>
      <div class="flex-1 px-4 pt-2.5 pb-5 overflow-auto h-full amd-border">
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
        {section.type === EToolkitType.DEV_SOCIAL && (
          <DevSocialSetting id={sectionId} />
        )}
      </div>
    </div>
  );
};
