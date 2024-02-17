import { EAlign } from '../../../enums/toolkit.enum';
import { ETextProvider, ETextStyle, ETextTag } from './text.enum';

export interface ITextSetting {
  value: string;
  provider: ETextProvider;
  text: {
    align: EAlign;
    tag: ETextTag;
    style: ETextStyle;
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
};
