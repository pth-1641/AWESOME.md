import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import { IStatsSetting } from '../../default';
import { EChartTheme } from '../../stats.enum';

const Chart = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Theme"
        options={Object.values(EChartTheme)}
        value={props.chart.theme}
        className="mt-4"
        onChange={(theme) =>
          editSection({
            ...props,
            chart: {
              ...props.trophy,
              theme,
            },
          })
        }
      />
    </>
  );
};

export default Chart;
