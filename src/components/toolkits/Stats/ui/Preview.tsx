import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { getEnumKey, objectToUrl } from '../../../../utils';
import { IStatsSetting } from '../default';
import {
  EGithubReadmeStatsLocale,
  ELanguageLayout,
  EStreakStatsLocale,
  ETroyphyStatsTheme,
} from '../stats.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IStatsSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;
  const { stats, languages, streak, trophy } = props;

  return (
    <div
      class={`border rounded-md p-4 hover:border-emerald-400 cursor-pointer ${
        sectionId === id ? 'border-emerald-400' : 'border-white/15'
      }`}
    >
      {stats.active && (
        <img
          src={`https://github-readme-stats.vercel.app/api?username=pth-1641&${objectToUrl(
            {
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
            }
          )}`}
        />
      )}
      {languages.active && (
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=pth-1641&${objectToUrl(
            {
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
      {streak.active && (
        <img
          src={`https://streak-stats.demolab.com/?user=pth-1641&${objectToUrl({
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
      {trophy.active && (
        <img
          src={`https://github-trophies.vercel.app/?username=pth-1641&${objectToUrl(
            {
              theme: trophy.theme,
              title: trophy.titles.map((t) => t.replace(/\s+/g, '')).toString(),
              'no-frame': trophy.hideBorder,
              ...(trophy.theme === ETroyphyStatsTheme.TRANSPARENT && {
                'no-bg': true,
              }),
            }
          )}`}
        />
      )}
    </div>
  );
};

export default Preview;
