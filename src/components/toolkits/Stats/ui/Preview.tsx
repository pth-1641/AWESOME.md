import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { alignImageStyle, getEnumKey, objectToUrl } from '../../../../utils';
import { IStatsSetting } from '../default';
import {
  EGithubReadmeStatsLocale,
  ELanguageLayout,
  EProvider,
  EStreakStatsLocale,
  ETroyphyStatsTheme,
} from '../stats.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IStatsSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;
  const { stats, languages, streak, trophy, summary, chart, username } = props;

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
        sectionId === id ? 'border-emerald-400' : 'border-white/15'
      }`}
    >
      {props.providers.map((provider) => (
        <>
          {provider === EProvider.STATS && stats.active && (
            <img
              style={alignImageStyle(stats.align)}
              src={`https://github-readme-stats.vercel.app/api?${objectToUrl({
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
                locale: getEnumKey(
                  EGithubReadmeStatsLocale,
                  stats.lang
                )?.replace(/_/g, '-'),
              })}`}
            />
          )}
          {provider === EProvider.LANGUAGES && languages.active && (
            <img
              style={alignImageStyle(languages.align)}
              src={`https://github-readme-stats.vercel.app/api/top-langs?${objectToUrl(
                {
                  username,
                  theme: languages.theme,
                  hide_border: languages.hideBorder,
                  hide_title: languages.hideTitle,
                  langs_count: languages.langCount,
                  locale: getEnumKey(
                    EGithubReadmeStatsLocale,
                    languages.lang
                  )?.replace(/_/g, '-'),
                  ...(languages.layout !== ELanguageLayout.DEFAULT && {
                    layout: languages.layout,
                  }),
                  ...(!languages.progressBar && {
                    layout: ELanguageLayout.COMPACT,
                    hide_progress: !languages.progressBar,
                  }),
                }
              )}`}
            />
          )}
          {provider === EProvider.STREAK && streak.active && (
            <img
              style={alignImageStyle(streak.align)}
              src={`https://streak-stats.demolab.com?${objectToUrl({
                user: username,
                theme: streak.theme,
                hide_border: streak.hideBorder,
                disable_animations: !streak.animation,
                hide_total_contributions: streak.hideContribs,
                hide_current_streak: streak.hideCurrentStreak,
                hide_longest_streak: streak.hideLongestStreak,
                mode: streak.mode,
                locale: getEnumKey(EStreakStatsLocale, streak.lang)?.replace(
                  /_/g,
                  '-'
                ),
              })}`}
            />
          )}
          {provider === EProvider.TROPHY && trophy.active && (
            <img
              style={alignImageStyle(trophy.align)}
              src={`https://github-trophies.vercel.app?${objectToUrl({
                username,
                theme: trophy.theme,
                title: trophy.titles
                  .map((t) => t.replace(/\s+/g, ''))
                  .toString(),
                'no-frame': trophy.hideBorder,
                ...(trophy.theme === ETroyphyStatsTheme.TRANSPARENT && {
                  'no-bg': true,
                }),
              })}`}
            />
          )}
          {provider === EProvider.SUMMARY && summary.active && (
            <img
              style={alignImageStyle(summary.align)}
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?${objectToUrl(
                {
                  username,
                  theme: summary.theme,
                }
              )}`}
            />
          )}
          {provider === EProvider.CHART && chart.active && (
            <img
              style={alignImageStyle(chart.align)}
              src={`https://github-readme-activity-graph.vercel.app/graph?${objectToUrl(
                {
                  username,
                  ...chart,
                }
              )}`}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default Preview;
