import { DEFAULT_GAP, DEFAULT_ICON_SIZE } from '../../../constants';
import { EAlign } from '../../../enums/toolkit.enum';

export interface ITechSetting {
  icons: string[];
  settings: {
    position: EAlign;
    gap: number;
    size: number;
  };
}

export const techSetting: ITechSetting = {
  icons: [
    'devicon:html5',
    'devicon:css3',
    'devicon:javascript',
    'devicon:react',
    'devicon:nodejs',
  ],
  settings: {
    position: EAlign.LEFT,
    gap: DEFAULT_GAP,
    size: DEFAULT_ICON_SIZE,
  },
};
