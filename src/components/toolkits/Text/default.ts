import { EAlign } from '../../../enums/toolkit.enum';
import { ETextProvider, ETextStyle, ETextTag } from './text.enum';

export const DEFAULT_TYPING_DURATION = 5;
export const DEFAULT_TYPING_PAUSE = 1;
export const DEFAULT_TYPING_FONT_SIZE = 20;
export const DEFAULT_TYPING_COLOR = '#36bcf7ff';
export const DEFAULT_TYPING_BACKGROUND = '#00000000';
export const DEFAULT_TYPING_HEIGHT = 50;
export const DEFAULT_TYPING_WIDTH = 400;
export const DEFAULT_TYPING_FONT_FAMILY = 'Fira Code';

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
};
