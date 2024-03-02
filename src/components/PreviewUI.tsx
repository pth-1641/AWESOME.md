import { EToolkitType } from '../enums/share.enum';
import { useAppStore } from '../store/app.store';
import TextPreview from './toolkits/Text/ui/Preview';
import IconPreview from './toolkits/Icon/ui/Preview';
import StatsPreview from './toolkits/Stats/ui/Preview';
import ViewsPreview from './toolkits/Views/ui/Preview';

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
            <IconPreview id={section.id} />
          )}
          {section.type === EToolkitType.SOCIAL && (
            <IconPreview id={section.id} />
          )}
          {section.type === EToolkitType.STATS && (
            <StatsPreview id={section.id} />
          )}
          {section.type === EToolkitType.VIEWS && (
            <ViewsPreview id={section.id} />
          )}
        </div>
      ))}
    </div>
  );
};
