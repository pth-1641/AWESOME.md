import { DEFAULT_GAP, DEFAULT_ICON_SIZE } from '../../../constants';
import { EAlign } from '../../../enums/toolkit.enum';

export interface SocialIcon {
  name: string;
  href: string;
}

export interface ISocialSetting {
  icons: SocialIcon[];
  settings: {
    position: EAlign;
    gap: number;
    size: number;
  };
}

export const socialSetting: ISocialSetting = {
  icons: [
    { name: 'logos:facebook', href: '' },
    { name: 'devicon:linkedin', href: '' },
    { name: 'skill-icons:gmail-light', href: '' },
  ],
  settings: {
    position: EAlign.LEFT,
    gap: DEFAULT_GAP,
    size: DEFAULT_ICON_SIZE,
  },
};
