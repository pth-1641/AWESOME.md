import { h } from 'preact';
import { useMemo } from 'preact/hooks';
import { useSectionProps } from '../../../../hooks';
import { capsuleTextUrl, typingTextUrl } from '../../../../utils/text2md';
import { ITextSetting } from '../default';
import { ETextProvider, ETextStyle } from '../text.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);

  if (!props) return null;
  const { text, value, provider } = props;

  const styleTag = useMemo(() => {
    if (text.style === ETextStyle.ITALIC) return 'i';
    if (text.style === ETextStyle.STRIKE) return 'strike';
    return text.tag;
  }, [text.style, text.tag]);

  const isLargeHeading = useMemo(() => {
    return ['h1', 'h2'].indexOf(text.tag) > -1;
  }, [text.tag]);

  return (
    <>
      {provider === ETextProvider.TEXT && (
        <>
          {h(
            text.tag,
            {
              style: {
                textAlign: text.align,
                fontStyle: text.style,
              },
            },
            h(styleTag, null, value)
          )}
          {isLargeHeading && <div class="mt-2 h-px bg-white/10" />}
        </>
      )}
      {provider === ETextProvider.TYPING && <img src={typingTextUrl(props)} />}
      {provider === ETextProvider.CAPSULE && (
        <img src={capsuleTextUrl(props)} />
      )}
    </>
  );
};

export default Preview;
