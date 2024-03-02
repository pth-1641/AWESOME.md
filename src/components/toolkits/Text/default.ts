import { EAlign } from '../../../enums/share.enum';
import {
  ECapsuleAnimation,
  ECapsuleBackgroundType,
  ECapsuleSection,
  ECapsuleTheme,
  ECapsuleType,
  ETextProvider,
  ETextStyle,
  ETextTag,
} from './text.enum';

// Typing
export const DEFAULT_TYPING_DURATION = 5;
export const DEFAULT_TYPING_PAUSE = 1;
export const DEFAULT_TYPING_FONT_SIZE = 20;
export const DEFAULT_TYPING_COLOR = '#36bcf7ff';
export const DEFAULT_TYPING_BACKGROUND = '#00000000';
export const DEFAULT_TYPING_HEIGHT = 50;
export const DEFAULT_TYPING_WIDTH = 400;
export const DEFAULT_TYPING_FONT_FAMILY = 'Fira Code';

// Capsule
export const DEFAULT_CAPSULE_HEIGHT = 120;
export const DEFAULT_CAPSULE_FONT_SIZE = 70;
export const DEFAULT_CAPSULE_FONT_ALIGN = 50;
export const DEFAULT_CAPSULE_ROTATE = 0;
export const DEFAULT_CAPSULE_STROKE_COLOR = '#10b981';
export const DEFAULT_CAPSULE_STROKE_WIDTH = 2;

export interface ITextSetting {
  value: string;
  provider: ETextProvider;
  text: {
    align: EAlign;
    tag: ETextTag;
    style: ETextStyle;
  };
  typing: {
    fontSize: number;
    repeat: boolean;
    multiline: boolean;
    duration: number;
    color: string;
    background: string;
    pause: number;
    height: number;
    width: number;
    font: string;
  };
  capsule: {
    backgroundType: ECapsuleBackgroundType | ECapsuleTheme;
    color: string;
    type: ECapsuleType;
    section: ECapsuleSection;
    fontColor: string;
    height: number;
    animation: ECapsuleAnimation;
    fontSize: number;
    fontAlign: number;
    fontAlignY: number;
    rotate: number;
    enableStroke: boolean;
    stroke: string;
    strokeWidth: number;
  };
}

export const textSetting: ITextSetting = {
  value: 'AWESOME.md',
  provider: ETextProvider.TEXT,
  text: {
    align: EAlign.LEFT,
    tag: ETextTag.H1,
    style: ETextStyle.NORMAL,
  },
  typing: {
    fontSize: DEFAULT_TYPING_FONT_SIZE,
    repeat: true,
    multiline: false,
    duration: DEFAULT_TYPING_DURATION,
    color: DEFAULT_TYPING_COLOR,
    background: DEFAULT_TYPING_BACKGROUND,
    pause: DEFAULT_TYPING_PAUSE,
    width: DEFAULT_TYPING_WIDTH,
    height: DEFAULT_TYPING_HEIGHT,
    font: DEFAULT_TYPING_FONT_FAMILY,
  },
  capsule: {
    color: DEFAULT_TYPING_BACKGROUND,
    type: ECapsuleType.WAVE,
    backgroundType: ECapsuleTheme.TOKYONIGHT,
    section: ECapsuleSection.FOOTER,
    fontColor: DEFAULT_TYPING_COLOR,
    height: DEFAULT_CAPSULE_HEIGHT,
    animation: ECapsuleAnimation.NONE,
    fontSize: DEFAULT_CAPSULE_FONT_SIZE,
    fontAlign: DEFAULT_CAPSULE_FONT_ALIGN,
    fontAlignY: DEFAULT_CAPSULE_FONT_ALIGN,
    rotate: DEFAULT_CAPSULE_ROTATE,
    enableStroke: false,
    stroke: DEFAULT_CAPSULE_STROKE_COLOR,
    strokeWidth: DEFAULT_CAPSULE_STROKE_WIDTH,
  },
};
