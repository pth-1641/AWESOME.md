import { DEFAULT_LANGUAGE_COUNT } from '../../../constants';
import {
  EGithubReadmeStatsTheme,
  ELanguageLayout,
  ERankIcon,
} from './stats.enum';

export interface IGithubReadmeStats {
  theme: EGithubReadmeStatsTheme;
  border: boolean;
  icon: boolean;
  hideTitle: boolean;
  animation: boolean;
  rank: boolean;
  rankIcon: ERankIcon;
  active: boolean;
  hideOpts: string[];
  additionOpts: string[];
}

export interface ILanguagesStats {
  theme: EGithubReadmeStatsTheme;
  active: boolean;
  layout: ELanguageLayout;
  border: boolean;
  animation: boolean;
  hideTitle: boolean;
  progressBar: boolean;
  langCount: number;
}

export interface IStatsSetting {
  stats: IGithubReadmeStats;
  languages: ILanguagesStats;
}

export const githubReadmeStats: IGithubReadmeStats = {
  theme: EGithubReadmeStatsTheme.GITHUB_DARK_DIMMED,
  border: false,
  icon: true,
  hideTitle: false,
  animation: true,
  rank: false,
  rankIcon: ERankIcon.DEFAULT,
  active: true,
  hideOpts: [],
  additionOpts: [],
};

export const githubReadmeLanguages: ILanguagesStats = {
  theme: EGithubReadmeStatsTheme.GITHUB_DARK_DIMMED,
  active: true,
  layout: ELanguageLayout.DEFAULT,
  border: false,
  animation: true,
  hideTitle: false,
  progressBar: true,
  langCount: DEFAULT_LANGUAGE_COUNT,
};

export const statsSetting: IStatsSetting = {
  stats: githubReadmeStats,
  languages: githubReadmeLanguages,
};
