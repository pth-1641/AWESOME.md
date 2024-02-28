import { isInEnum, objectToUrl } from '.';
import { ITextSetting } from '../components/toolkits/Text/default';
import {
  ECapsuleAnimation,
  ECapsuleBackgroundType,
  ECapsuleType,
  ETextProvider,
  ETextStyle,
} from '../components/toolkits/Text/text.enum';

const textToMarkdown = (props: ITextSetting) => {
  if (props.provider === ETextProvider.TYPING) {
    return `<img src="https://readme-typing-svg.demolab.com?${typingSearchParams(
      props
    )}" />`;
  }

  if (props.provider === ETextProvider.CAPSULE) {
    return `<img src="https://capsule-render.vercel.app/api?${capsuleSearchParams(
      props
    )}" />`;
  }

  const textStyleSymbol = () => {
    switch (props.text.style) {
      case ETextStyle.ITALIC:
        return 'i';
      case ETextStyle.STRIKE:
        return 'strike';
      default:
        return '';
    }
  };

  return `<${props.text.tag} align="${props.text.align}">
    <${textStyleSymbol()}>${props.value.trim()}</${textStyleSymbol()}>
</${props.text.tag}>`;
};

export const typingSearchParams = (setting: ITextSetting) => {
  return objectToUrl({
    ...setting.typing,
    lines: setting.value.replace(/\n/g, ';').replace(/\s+/g, ' '),
    vCenter: true,
    size: setting.typing.fontSize,
    duration: setting.typing.duration * 1000,
    pause: setting.typing.pause * 1000,
    font: setting.typing.font.replace(/(^\w|\s\w)/g, (w) => w.toUpperCase()),
  });
};

export const capsuleSearchParams = (setting: ITextSetting) => {
  return objectToUrl(
    {
      ...setting.capsule,
      text: setting.value,
      reversal: true,
      animation: '',
      stroke: '',
      strokeWidth: 0,
      ...(isInEnum(ECapsuleBackgroundType, setting.capsule.backgroundType)
        ? {
            color: setting.capsule.backgroundType,
          }
        : { theme: setting.capsule.backgroundType }),
      ...(setting.capsule.backgroundType ===
        ECapsuleBackgroundType.CUSTOM_COLOR && {
        color: setting.capsule.color,
      }),
      ...(setting.capsule.backgroundType ===
        ECapsuleBackgroundType.CUSTOM_GRADIENT && {
        color: setting.capsule.color.replace('#', '0:').replace('#', ',100:'),
      }),
      ...(setting.capsule.type === ECapsuleType.VENOM && {
        section: 'header',
        reversal: false,
      }),
      ...(setting.capsule.animation !== ECapsuleAnimation.NONE && {
        animation: setting.capsule.animation,
      }),
      ...(setting.capsule.enableStroke && {
        stroke: setting.capsule.stroke,
        strokeWidth: setting.capsule.strokeWidth,
      }),
    },
    {
      omit: ['backgroundType', 'enableStroke'],
    }
  ).replace(/%23/g, '');
};

export default textToMarkdown;
