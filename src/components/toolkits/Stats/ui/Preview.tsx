import { useSectionProps } from '../../../../hooks';
import { alignImageStyle } from '../../../../utils';
import {
  chartUrl,
  languageUrl,
  statisticsUrl,
  streakUrl,
  summaryUrl,
  trophyUrl,
} from '../../../../utils/stats2md';
import { IStatsSetting } from '../default';
import { EStatsProvider } from '../stats.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IStatsSetting>(id);

  if (!props) return null;
  const { stats, languages, streak, trophy, summary, chart } = props;

  return (
    <>
      {props.providers.map((provider) => (
        <>
          {provider === EStatsProvider.STATS && stats.active && (
            <img
              style={alignImageStyle(stats.align)}
              src={statisticsUrl(props)}
            />
          )}
          {provider === EStatsProvider.LANGUAGES && languages.active && (
            <img
              style={alignImageStyle(languages.align)}
              src={languageUrl(props)}
            />
          )}
          {provider === EStatsProvider.STREAK && streak.active && (
            <img style={alignImageStyle(streak.align)} src={streakUrl(props)} />
          )}
          {provider === EStatsProvider.TROPHY && trophy.active && (
            <img style={alignImageStyle(trophy.align)} src={trophyUrl(props)} />
          )}
          {provider === EStatsProvider.SUMMARY && summary.active && (
            <img
              style={alignImageStyle(summary.align)}
              src={summaryUrl(props)}
            />
          )}
          {provider === EStatsProvider.CHART && chart.active && (
            <img style={alignImageStyle(chart.align)} src={chartUrl(props)} />
          )}
        </>
      ))}
    </>
  );
};

export default Preview;
