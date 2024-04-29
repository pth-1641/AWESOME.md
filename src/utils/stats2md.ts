import { getEnumKey, objectToUrl } from '.';
import { IStatsSetting } from '../components/toolkits/Stats/default';
import {
  EGithubReadmeStatsLocale,
  ELanguageLayout,
  EStatsProvider,
  EStreakStatsLocale,
  ETroyphyStatsTheme,
} from '../components/toolkits/Stats/stats.enum';

const statisticsUrl = (setting: IStatsSetting) => {
  const { stats, username } = setting;
  return `https://github-readme-stats.vercel.app/api?${objectToUrl({
    username,
    theme: stats.theme,
    hide_border: stats.hideBorder,
    show_icons: stats.icon,
    hide_title: stats.hideTitle,
    disable_animations: !stats.animation,
    hide_rank: stats.rank,
    rank_icon: stats.rankIcon,
    hide: stats.hideOpts.toString(),
    show: stats.additionOpts.toString(),
    locale: getEnumKey(EGithubReadmeStatsLocale, stats.lang)?.replace(
      /_/g,
      '-'
    ),
  })}`;
};

const streakUrl = (setting: IStatsSetting) => {
  const { streak, username } = setting;
  return `https://streak-stats.demolab.com?${objectToUrl({
    user: username,
    theme: streak.theme,
    hide_border: streak.hideBorder,
    disable_animations: !streak.animation,
    hide_total_contributions: streak.hideContribs,
    hide_current_streak: streak.hideCurrentStreak,
    hide_longest_streak: streak.hideLongestStreak,
    mode: streak.mode,
    locale: getEnumKey(EStreakStatsLocale, streak.lang)?.replace(/_/g, '-'),
  })}`;
};

const languageUrl = (setting: IStatsSetting) => {
  const { languages, username } = setting;
  return `https://github-readme-stats.vercel.app/api/top-langs?${objectToUrl({
    username,
    theme: languages.theme,
    hide_border: languages.hideBorder,
    hide_title: languages.hideTitle,
    langs_count: languages.langCount,
    locale: getEnumKey(EGithubReadmeStatsLocale, languages.lang)?.replace(
      /_/g,
      '-'
    ),
    ...(languages.layout !== ELanguageLayout.DEFAULT && {
      layout: languages.layout,
    }),
    ...(!languages.progressBar && {
      layout: ELanguageLayout.COMPACT,
      hide_progress: !languages.progressBar,
    }),
  })}`;
};

const trophyUrl = (setting: IStatsSetting) => {
  const { trophy, username } = setting;
  return `https://github-trophies.vercel.app?${objectToUrl({
    username,
    theme: trophy.theme,
    title: trophy.titles.map((t) => t.replace(/\s+/g, '')).toString(),
    'no-frame': trophy.hideBorder,
    ...(trophy.theme === ETroyphyStatsTheme.TRANSPARENT && {
      'no-bg': true,
    }),
  })}`;
};

const chartUrl = (setting: IStatsSetting) => {
  const { chart, username } = setting;
  return `https://github-readme-activity-graph.vercel.app/graph?${objectToUrl({
    username,
    ...chart,
  })}`;
};

const summaryUrl = (setting: IStatsSetting) => {
  const { summary, username } = setting;
  return `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?${objectToUrl(
    {
      username,
      theme: summary.theme,
    }
  )}`;
};

const statsToMarkdown = (props: IStatsSetting) => {
  const { chart, languages, providers, stats, streak, summary, trophy } = props;
  return providers
    .map((provider) => {
      if (provider === EStatsProvider.CHART && chart.active)
        return `<div align="${chart.align}">
    <img src="${chartUrl(props)}" />
</div>`;
      if (provider === EStatsProvider.LANGUAGES && languages.active)
        return `<div align="${languages.align}">
    <img src="${languageUrl(props)}" />
</div>`;
      if (provider === EStatsProvider.STATS && stats.active)
        return `<div align="${stats.align}">
    <img src="${statisticsUrl(props)}" />
</div>`;
      if (provider === EStatsProvider.STREAK && streak.active)
        return `<div align="${streak.align}">
    <img src="${streakUrl(props)}" />
</div>`;
      if (provider === EStatsProvider.SUMMARY && summary.active)
        return `<div align="${summary.align}">
    <img src="${summaryUrl(props)}" />
</div>`;
      if (provider === EStatsProvider.TROPHY && trophy.active)
        return `<div align="${trophy.align}">
    <img src="${trophyUrl(props)}" />        
</div>`;
    })
    .filter(Boolean).join(`
`);
};

export default statsToMarkdown;

export {
  statisticsUrl,
  streakUrl,
  languageUrl,
  trophyUrl,
  chartUrl,
  summaryUrl,
};
