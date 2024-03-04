import { EAlign } from '../../../enums/share.enum';
import { EKomarevStyle, EMoeTheme, EViewProvider } from './views.enum';

export interface IMoeCounter {
  theme: EMoeTheme;
}

export interface IKomarevCounter {
  abbreviated: boolean;
  style: EKomarevStyle;
  label: string;
  activeAddition: boolean;
  additionViews: number;
}

export interface IViewsSetting {
  username: string;
  provider: EViewProvider;
  moeCounter: IMoeCounter;
  komarevCounter: IKomarevCounter;
  align: EAlign;
}

export const viewsSetting: IViewsSetting = {
  username: 'pth-1641',
  provider: EViewProvider.MOE,
  align: EAlign.CENTER,
  moeCounter: { theme: EMoeTheme.RULE34 },
  komarevCounter: {
    style: EKomarevStyle.FLAT_SQUARE,
    abbreviated: false,
    label: 'Profile views',
    activeAddition: false,
    additionViews: 0,
  },
};
