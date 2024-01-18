import { EToolkitType } from "../enums/toolkit.enum";
import { useSectionProps } from "../hooks";
import { useAppStore } from "../store/app.store";
import TechSetting from "./common/Techs/ui/TechSetting";
import TextSetting from "./common/Text/ui/TextSetting";

export const Settings = () => {
  const sectionId = useAppStore((state) => state.sectionId);
  if (!sectionId)
    return (
      <div class="flex-1 max-w-72 border border-white/15 rounded-lg px-4 py-2.5" />
    );

  const section = useSectionProps(sectionId);

  return (
    <div class="flex-1 max-w-72 border border-white/15 rounded-lg px-4 py-2.5">
      {/* <h3 class="font-semibold text-lg mb-3">Settings</h3> */}
      {section.type === EToolkitType.TEXT && <TextSetting id={sectionId} />}
      {section.type === EToolkitType.TECH && <TechSetting id={sectionId} />}
    </div>
  );
};
