import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { objectToUrl } from '../../../../utils';
import { IStatsSetting } from '../default';
import { ELanguageLayout } from '../stats.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IStatsSetting>(id);
  const sectionId = useAppStore((state) => state.sectionId);

  if (!props) return null;
  const { stats, languages } = props;

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
              hide_border: stats.border,
              show_icons: stats.icon,
              hide_title: stats.hideTitle,
              disable_animations: !stats.animation,
              hide_rank: stats.rank,
              rank_icon: stats.rankIcon,
              hide: stats.hideOpts.toString(),
              show: stats.additionOpts.toString(),
            }
          )}`}
        />
      )}
      {languages.active && (
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=pth-1641&${objectToUrl(
            {
              theme: languages.theme,
              hide_border: languages.border,
              hide_title: languages.hideTitle,
              langs_count: languages.langCount,
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
    </div>
  );
};

export default Preview;
