import { useSectionProps } from "../../../../hooks";
import { useAppStore } from "../../../../store/app.store";
import { ITechSetting } from "../default";

const PreviewTech = ({ id }: { id: string }) => {
  const props = useSectionProps<ITechSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
        sectionId === id ? "border-emerald-400" : "border-white/15"
      }`}
    >
      {props.icons.map((icon) => (
        <img key={icon} src={icon} />
      ))}
    </div>
  );
};

export default PreviewTech;
