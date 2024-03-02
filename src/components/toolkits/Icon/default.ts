import { EAlign } from '../../../enums/share.enum';

export const DEFAULT_GAP = 10;
export const DEFAULT_ICON_SIZE = 40;

export interface IIcon {
  name: string;
  href: string;
}

export interface IIconSetting {
  icons: IIcon[];
  settings: {
    position: EAlign;
    gap: number;
    size: number;
  };
}

export const socialSetting: IIconSetting = {
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

export const techSetting: IIconSetting = {
  icons: [
    { name: 'devicon:html5', href: '' },
    { name: 'devicon:css3', href: '' },
    { name: 'devicon:javascript', href: '' },
    { name: 'devicon:react', href: '' },
    { name: 'devicon:nodejs', href: '' },
  ],
  settings: {
    position: EAlign.LEFT,
    gap: DEFAULT_GAP,
    size: DEFAULT_ICON_SIZE,
  },
};
