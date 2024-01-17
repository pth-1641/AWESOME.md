import { useAppStore } from '../store/app.store';

const useSectionProps = (id: string) => {
  const sections = useAppStore((state) => state.sections);
  return sections.find((section) => section.id === id) || {};
};

export default useSectionProps;
