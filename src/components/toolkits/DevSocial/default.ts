import { EAlign } from '../../../enums/share.enum';
import {
  EDevSocialProvider,
  ELeetcodeExtension,
  ELeetcodeTheme,
  EStackoverflowLayout,
  EStackoverflowTheme,
} from './dev-social.enum';

export interface ILeetcodeStats {
  theme: ELeetcodeTheme;
  ext: ELeetcodeExtension;
  font: string;
  width: number;
  height: number;
  border: boolean;
  radius: number;
  animation: boolean;
  hide: string[];
  username: string;
}

export interface IStackoverflowStats {
  theme: EStackoverflowTheme;
  layout: EStackoverflowLayout;
  userID: string;
}

export interface IDevSocialSetting {
  provider: EDevSocialProvider;
  leetcodeStats: ILeetcodeStats;
  stackoverflowStats: IStackoverflowStats;
  align: EAlign;
}

export const devSocialSetting: IDevSocialSetting = {
  provider: EDevSocialProvider.LEETCODE,
  align: EAlign.CENTER,
  leetcodeStats: {
    animation: true,
    border: true,
    ext: ELeetcodeExtension.ACTIVITY,
    font: 'Baloo_2',
    height: 200,
    hide: [],
    radius: 4,
    theme: ELeetcodeTheme.NORD,
    username: 'pth_1641',
    width: 500,
  },
  stackoverflowStats: {
    theme: EStackoverflowTheme.DARK,
    layout: EStackoverflowLayout.DEFAULT,
    userID: '14215110',
  },
};
