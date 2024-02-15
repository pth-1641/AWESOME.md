import { EAlign } from '../../../enums/toolkit.enum';
import { ETextStyle, ETextTag } from './text.enum';

export interface ITextSetting {
  value: string;
  settings: {
    align: EAlign;
    tag: ETextTag;
    style: ETextStyle;
  };
}

export const textSetting: ITextSetting = {
  value: 'Awesome Readme',
  settings: {
    align: EAlign.LEFT,
    tag: ETextTag.H1,
    style: ETextStyle.NORMAL,
  },
};
