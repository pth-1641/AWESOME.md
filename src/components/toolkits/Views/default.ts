import { EAlign } from '../../../enums/share.enum';
import {
  EHitsStyle,
  EHitsViewType,
  EMoeTheme,
  EViewProvider,
  EVisitCounterStyle,
  EVisitProIcon,
  EVisitProTheme,
} from './views.enum';

export interface IMoeCounter {
  theme: EMoeTheme;
}

export interface IHitsCounter {
  style: EHitsStyle;
  viewType: EHitsViewType;
  label: string;
  extraCount: number;
  color: string;
  labelColor: string;
  logo: string;
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

export interface IVisitProCounter {
  label: string;
  icon: EVisitProIcon;
  color: EVisitProTheme;
  pretty: boolean;
}

// General
export interface IViewsSetting {
  username: string;
  provider: EViewProvider;
  moeCounter: IMoeCounter;
  hitsCounter: IHitsCounter;
  align: EAlign;
  visitCounter: IVisitCounter;
  visitProCounter: IVisitProCounter;
}

export const viewsSetting: IViewsSetting = {
  username: 'pth-1641',
  provider: EViewProvider.MOE,
  align: EAlign.CENTER,
  moeCounter: { theme: EMoeTheme.RULE34 },
  hitsCounter: {
    color: '#ffffff',
    extraCount: 0,
    label: 'Views',
    labelColor: '#10b981',
    logo: '',
    style: EHitsStyle.FLAT_SQUARE,
    viewType: EHitsViewType.TOTAL,
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
  visitProCounter: {
    icon: EVisitProIcon.RANDOM,
    color: EVisitProTheme.RANDOM,
    label: '',
    pretty: true,
  },
};
