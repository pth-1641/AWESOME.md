import { EAlign } from '../../../enums/share.enum';

export interface IImageSetting {
  url: string;
  align: EAlign;
  width: number;
}

export const imageSetting: IImageSetting = {
  url: 'https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif',
  align: EAlign.CENTER,
  width: 500,
};

export const memeSetting: IImageSetting = {
  url: 'https://img.randme.me',
  align: EAlign.CENTER,
  width: 500,
};
