import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { h } from 'preact';
import { ITextSetting } from '../default';
import { useMemo } from 'preact/hooks';
import {
  ECapsuleAnimation,
  ECapsuleBackgroundType,
  ECapsuleType,
  ETextProvider,
  ETextStyle,
} from '../text.enum';
import { isInEnum, objectToUrl } from '../../../../utils';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

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
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer break-all ${
        sectionId === id ? 'border-emerald-400' : 'border-white/15'
      }`}
    >
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
      {provider === ETextProvider.TYPING && (
        <img
          src={`https://readme-typing-svg.demolab.com?${objectToUrl({
            ...props.typing,
            lines: props.value.replace(/\n/g, ';').replace(/\s+/g, ' '),
            vCenter: true,
            size: props.typing.fontSize,
            duration: props.typing.duration * 1000,
            pause: props.typing.pause * 1000,
            font: props.typing.font.replace(/(^\w|\s\w)/g, (w) =>
              w.toUpperCase()
            ),
          })}`}
        />
      )}
      {provider === ETextProvider.CAPSULE && (
        <img
          src={`https://capsule-render.vercel.app/api?${objectToUrl(
            {
              ...props.capsule,
              text: props.value,
              reversal: true,
              animation: '',
              stroke: '',
              strokeWidth: 0,
              ...(isInEnum(ECapsuleBackgroundType, props.capsule.backgroundType)
                ? {
                    color: props.capsule.backgroundType,
                  }
                : { theme: props.capsule.backgroundType }),
              ...(props.capsule.backgroundType ===
                ECapsuleBackgroundType.CUSTOM_COLOR && {
                color: props.capsule.color,
              }),
              ...(props.capsule.backgroundType ===
                ECapsuleBackgroundType.CUSTOM_GRADIENT && {
                color: props.capsule.color
                  .replace('#', '0:')
                  .replace('#', ',100:'),
              }),
              ...(props.capsule.type === ECapsuleType.VENOM && {
                section: 'header',
                reversal: false,
              }),
              ...(props.capsule.animation !== ECapsuleAnimation.NONE && {
                animation: props.capsule.animation,
              }),
              ...(props.capsule.enableStroke && {
                stroke: props.capsule.stroke,
                strokeWidth: props.capsule.strokeWidth,
              }),
            },
            {
              omit: ['backgroundType', 'enableStroke'],
            }
          ).replace(/%23/g, '')}`}
        />
      )}
    </div>
  );
};

export default Preview;
