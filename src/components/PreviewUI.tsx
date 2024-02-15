import { EToolkitType } from '../enums/toolkit.enum';
import { useAppStore } from '../store/app.store';
import TechsPreview from './toolkits/Techs/ui/Preview';
import TextPreview from './toolkits/Text/ui/Preview';
import SocialPreview from './toolkits/Social/ui/Preview';
import StatsPreview from './toolkits/Stats/ui/Preview';

export const PreviewUI = () => {
  const sections = useAppStore((state) => state.sections);
  const focusOnSection = useAppStore((state) => state.focusOnSection);

  return (
    <div class="flex-1 amd-border p-5 flex flex-col gap-3 overflow-auto">
      {sections.map((section) => (
        <div key={section.id} onClick={() => focusOnSection(section.id)}>
          {section.type === EToolkitType.TEXT && (
            <TextPreview id={section.id} />
          )}
          {section.type === EToolkitType.TECH && (
            <TechsPreview id={section.id} />
          )}
          {section.type === EToolkitType.SOCIAL && (
            <SocialPreview id={section.id} />
          )}
          {section.type === EToolkitType.STATS && (
            <StatsPreview id={section.id} />
          )}
        </div>
      ))}
    </div>
  );
};
