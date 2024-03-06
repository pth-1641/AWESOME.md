import { EAlign } from '../../../enums/share.enum';
import {
  ESummaryTheme,
  EGithubReadmeStatsLocale,
  EGithubReadmeStatsTheme,
  ELanguageLayout,
  EStatsProvider,
  ERankIcon,
  EStreakStatsLocale,
  EStreakStatsMode,
  EStreakStatsTheme,
  ETrophyTitle,
  ETroyphyStatsTheme,
  EChartTheme,
} from './stats.enum';

export const DEFAULT_LANGUAGE_COUNT = 5;
export const MAX_LANGUAGE_COUNT = 20;
export const DEFAULT_CHART_HEIGHT = 400;

export interface IGithubReadmeStats {
  theme: EGithubReadmeStatsTheme;
  hideBorder: boolean;
  icon: boolean;
  hideTitle: boolean;
  animation: boolean;
  rank: boolean;
  rankIcon: ERankIcon;
  active: boolean;
  hideOpts: string[];
  additionOpts: string[];
  lang: EGithubReadmeStatsLocale;
  align: EAlign;
}

export const githubReadmeStats: IGithubReadmeStats = {
  theme: EGithubReadmeStatsTheme.TOKYONIGHT,
  hideBorder: true,
  icon: true,
  hideTitle: false,
  animation: true,
  rank: false,
  rankIcon: ERankIcon.DEFAULT,
  active: true,
  hideOpts: [],
  additionOpts: [],
  lang: EGithubReadmeStatsLocale.EN,
  align: EAlign.LEFT,
};

export interface ILanguagesStats {
  theme: EGithubReadmeStatsTheme;
  active: boolean;
  layout: ELanguageLayout;
  hideBorder: boolean;
  animation: boolean;
  hideTitle: boolean;
  progressBar: boolean;
  langCount: number;
  lang: EGithubReadmeStatsLocale;
  align: EAlign;
}

export const githubReadmeLanguages: ILanguagesStats = {
  theme: EGithubReadmeStatsTheme.TOKYONIGHT,
  active: false,
  layout: ELanguageLayout.DEFAULT,
  hideBorder: true,
  animation: true,
  hideTitle: false,
  progressBar: true,
  langCount: DEFAULT_LANGUAGE_COUNT,
  lang: EGithubReadmeStatsLocale.EN,
  align: EAlign.LEFT,
};

export interface IStreakStats {
  active: boolean;
  theme: EStreakStatsTheme;
  hideBorder: boolean;
  mode: EStreakStatsMode;
  animation: boolean;
  hideContribs: boolean;
  hideCurrentStreak: boolean;
  hideLongestStreak: boolean;
  lang: EStreakStatsLocale;
  align: EAlign;
}

export const streakStats: IStreakStats = {
  active: true,
  theme: EStreakStatsTheme.TOKYONIGHT,
  hideBorder: true,
  mode: EStreakStatsMode.DAILY,
  animation: true,
  hideContribs: false,
  hideCurrentStreak: false,
  hideLongestStreak: false,
  lang: EStreakStatsLocale.EN,
  align: EAlign.LEFT,
};

export interface ITrophyStats {
  active: boolean;
  hideBorder: boolean;
  theme: ETroyphyStatsTheme;
  titles: string[];
  align: EAlign;
}

export const trophyStats: ITrophyStats = {
  active: false,
  hideBorder: true,
  theme: ETroyphyStatsTheme.TOKYONIGHT,
  titles: Object.values(ETrophyTitle),
  align: EAlign.LEFT,
};

export interface ISummaryStats {
  active: boolean;
  theme: ESummaryTheme;
  align: EAlign;
}

export const summaryStats: ISummaryStats = {
  active: false,
  theme: ESummaryTheme.TOKYONIGHT,
  align: EAlign.LEFT,
};

export interface IChartStats {
  theme: EChartTheme;
  hide_border: boolean;
  height: number;
  custom_title: string;
  hide_title: boolean;
  area: boolean;
  radius: number;
  active: boolean;
  align: EAlign;
}

export const chartStats: IChartStats = {
  theme: EChartTheme.TOKYONIGHT,
  hide_border: true,
  height: DEFAULT_CHART_HEIGHT,
  area: true,
  custom_title: '',
  hide_title: false,
  radius: 0,
  active: false,
  align: EAlign.LEFT,
};

export interface IStatsSetting {
  username: string;
  providers: EStatsProvider[];
  stats: IGithubReadmeStats;
  languages: ILanguagesStats;
  streak: IStreakStats;
  trophy: ITrophyStats;
  summary: ISummaryStats;
  chart: IChartStats;
}

export const statsSetting: IStatsSetting = {
  username: 'pth-1641',
  providers: Object.values(EStatsProvider),
  stats: githubReadmeStats,
  languages: githubReadmeLanguages,
  streak: streakStats,
  trophy: trophyStats,
  summary: summaryStats,
  chart: chartStats,
};
