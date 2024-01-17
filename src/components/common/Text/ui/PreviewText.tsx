import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { h } from 'preact';

const PreviewText = ({ id }: { id: string }) => {
  const props = useSectionProps(id);
  const sectionId = useAppStore((state) => state.sectionId);

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
        sectionId === id ? 'border-emerald-400' : 'border-white/15'
      }`}
    >
      {h(
        props.settings.tag,
        { style: { textAlign: props.settings.align } },
        props.value
      )}
    </div>
  );
};

export default PreviewText;
