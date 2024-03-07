import { EAlign } from '../../../enums/share.enum';

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
    gap: 10,
    size: 40,
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
    gap: 10,
    size: 40,
  },
};
