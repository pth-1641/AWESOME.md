import { useAppStore } from "../store/app.store";

const useSectionProps = <T>(id: string): T | undefined => {
  const sections = useAppStore((state) => state.sections);
  return sections.find((section) => section.id === id);
};

export default useSectionProps;
