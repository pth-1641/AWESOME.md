import { EToolkitType } from '../enums/share.enum';
import { useAppStore } from '../store/app.store';
import TextPreview from './toolkits/Text/ui/Preview';
import IconPreview from './toolkits/Icon/ui/Preview';
import StatsPreview from './toolkits/Stats/ui/Preview';
import ViewsPreview from './toolkits/Views/ui/Preview';
import ImagePreview from './toolkits/Image/ui/Preview';
import QuotePreview from './toolkits/Quote/ui/Preview';

export const PreviewUI = () => {
  const { sectionId, focusOnSection, sections } = useAppStore();

  return (
    <div class="flex-1 amd-border p-5 flex flex-col gap-3 overflow-auto">
      {sections.map((section) => (
        <div
          class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
            sectionId === section.id ? 'border-emerald-400' : 'border-white/15'
          }`}
          key={section.id}
          onClick={() => focusOnSection(section.id)}
        >
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
          {section.type === EToolkitType.IMAGE && (
            <ImagePreview id={section.id} />
          )}{' '}
          {section.type === EToolkitType.MEME && (
            <ImagePreview id={section.id} />
          )}
          {section.type === EToolkitType.QUOTE && (
            <QuotePreview id={section.id} />
          )}
        </div>
      ))}
    </div>
  );
};
