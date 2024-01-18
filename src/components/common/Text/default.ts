import { ETextAlign, ETextTag } from "./text.enum";

export interface ITextSetting {
  value: string;
  settings: {
    align: ETextAlign;
    tag: ETextTag;
  };
}

export const textSetting: ITextSetting = {
  value: "Hello World",
  settings: {
    align: ETextAlign.LEFT,
    tag: ETextTag.H1,
  },
};
