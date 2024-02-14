import { EPosition } from './social.enum';

export interface SocialIcon {
  name: string;
  href: string;
}

export interface ISocialSetting {
  icons: SocialIcon[];
  settings: {
    position: EPosition;
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
    position: EPosition.LEFT,
    gap: 10,
    size: 40,
  },
};
