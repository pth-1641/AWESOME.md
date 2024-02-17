import { DEFAULT_LANGUAGE_COUNT } from '../../../constants';
import {
  EGithubReadmeStatsLocale,
  EGithubReadmeStatsTheme,
  ELanguageLayout,
  ERankIcon,
  EStreakStatsLocale,
  EStreakStatsMode,
  EStreakStatsTheme,
  ETrophyTitle,
  ETroyphyStatsTheme,
} from './stats.enum';

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
}

export const githubReadmeLanguages: ILanguagesStats = {
  theme: EGithubReadmeStatsTheme.TOKYONIGHT,
  active: true,
  layout: ELanguageLayout.DEFAULT,
  hideBorder: true,
  animation: true,
  hideTitle: false,
  progressBar: true,
  langCount: DEFAULT_LANGUAGE_COUNT,
  lang: EGithubReadmeStatsLocale.EN,
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
};

export interface ITrophyStats {
  active: boolean;
  hideBorder: boolean;
  theme: ETroyphyStatsTheme;
  titles: string[];
}

export const trophyStats: ITrophyStats = {
  active: true,
  hideBorder: true,
  theme: ETroyphyStatsTheme.TOKYONIGHT,
  titles: Object.values(ETrophyTitle),
};
export interface IStatsSetting {
  stats: IGithubReadmeStats;
  languages: ILanguagesStats;
  streak: IStreakStats;
  trophy: ITrophyStats;
}

export const statsSetting: IStatsSetting = {
  stats: githubReadmeStats,
  languages: githubReadmeLanguages,
  streak: streakStats,
  trophy: trophyStats,
};
