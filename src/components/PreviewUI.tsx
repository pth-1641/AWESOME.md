import { EToolkitType } from "../enums/toolkit.enum";
import { useAppStore } from "../store/app.store";
import PreviewTech from "./common/Techs/ui/PreviewTech";
import PreviewText from "./common/Text/ui/PreviewText";

export const PreviewUI = () => {
  const sections = useAppStore((state) => state.sections);
  const focusOnSection = useAppStore((state) => state.focusOnSection);

  console.log(sections);

  return (
    <div class="flex-1 border border-white/15 rounded-lg p-5 flex flex-col gap-3">
      {sections.map((section) => (
        <div key={section.id} onClick={() => focusOnSection(section.id)}>
          {section.type === EToolkitType.TEXT && (
            <PreviewText id={section.id} />
          )}
          {section.type === EToolkitType.TECH && (
            <PreviewTech id={section.id} />
          )}
        </div>
      ))}
    </div>
  );
};
