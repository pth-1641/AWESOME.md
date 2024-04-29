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

export interface ITextSetting {
  value: string;
  provider: ETextProvider;
  align: EAlign;
  text: {
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
  align: EAlign.LEFT,
  text: {
    tag: ETextTag.H1,
    style: ETextStyle.NORMAL,
  },
  typing: {
    fontSize: 20,
    repeat: true,
    multiline: false,
    duration: 5,
    color: '#36bcf7ff',
    background: '#00000000',
    pause: 1,
    width: 400,
    height: 50,
    font: 'Fira Code',
  },
  capsule: {
    color: '#00000000',
    type: ECapsuleType.WAVE,
    backgroundType: ECapsuleTheme.TOKYONIGHT,
    section: ECapsuleSection.FOOTER,
    fontColor: '#36bcf7ff',
    height: 120,
    animation: ECapsuleAnimation.NONE,
    fontSize: 70,
    fontAlign: 50,
    fontAlignY: 50,
    rotate: 0,
    enableStroke: false,
    stroke: '#10b981',
    strokeWidth: 2,
  },
};
