import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { h } from 'preact';
import { ITextSetting } from '../default';
import { useMemo } from 'preact/hooks';
import { ETextStyle } from '../text.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;
  const { settings, value } = props;

  const styleTag = useMemo(() => {
    if (settings.style === ETextStyle.ITALIC) return 'i';
    if (settings.style === ETextStyle.STRIKE) return 'strike';
    return settings.tag;
  }, [settings.style, settings.tag]);

  const isLargeHeading = useMemo(() => {
    return ['h1', 'h2'].indexOf(settings.tag) > -1;
  }, [settings.tag]);

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
        sectionId === id ? 'border-emerald-400' : 'border-white/15'
      }`}
    >
      {h(
        settings.tag,
        {
          style: {
            textAlign: settings.align,
            fontStyle: settings.style,
          },
        },
        h(styleTag, null, value)
      )}
      {isLargeHeading && <div class="mt-2 h-px bg-white/10" />}
    </div>
  );
};

export default Preview;
