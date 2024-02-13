import { EPosition } from './tech.enum';

export interface ITechSetting {
  icons: string[];
  settings: {
    position: EPosition;
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
    position: EPosition.LEFT,
    gap: 10,
    size: 40,
  },
};
