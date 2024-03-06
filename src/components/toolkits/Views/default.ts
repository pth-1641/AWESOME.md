import { EAlign } from '../../../enums/share.enum';
import {
  EKomarevStyle,
  EMoeTheme,
  EViewProvider,
  EVisitCounterStyle,
} from './views.enum';

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

export interface IVisitCounter {
  s: number; // font size
  c: string; // color
  bg: string; // background color
  ff: EVisitCounterStyle; // style
  no: number; // min number showed
  tb: string; // text before
  ta: string; // text after
}

// General
export interface IViewsSetting {
  username: string;
  provider: EViewProvider;
  moeCounter: IMoeCounter;
  komarevCounter: IKomarevCounter;
  align: EAlign;
  visitCounter: IVisitCounter;
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
  visitCounter: {
    bg: '#00000000',
    c: '#00ff00',
    ff: EVisitCounterStyle.DIGITAL,
    no: 2,
    s: 40,
    ta: '',
    tb: '',
  },
};
