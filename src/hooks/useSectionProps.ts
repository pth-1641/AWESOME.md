import { useAppStore } from '../store/app.store';

const useSectionProps = <T>(id: string): T | undefined => {
  const { sections } = useAppStore();
  return sections.find((section) => section.id === id);
};

export default useSectionProps;
