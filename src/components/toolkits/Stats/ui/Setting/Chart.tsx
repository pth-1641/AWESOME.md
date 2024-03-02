import { useAppStore } from '../../../../../store/app.store';
import CustomInput from '../../../../common/CustomInput';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import CustomSelect from '../../../../common/CustomSelect';
import CustomSwitch from '../../../../common/CustomSwitch';
import { IStatsSetting } from '../../default';
import { EChartTheme } from '../../stats.enum';

const Chart = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomInput
        label="Custom Title"
        value={props.chart.custom_title}
        onChange={(custom_title) =>
          editSection({
            ...props,
            chart: {
              ...props.chart,
              custom_title,
            },
          })
        }
        capitalize={false}
      />
      <CustomSelect
        label="Theme"
        options={Object.values(EChartTheme)}
        value={props.chart.theme}
        className="mt-4"
        onChange={(theme) =>
          editSection({
            ...props,
            chart: {
              ...props.chart,
              theme,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-4 mt-4">
        <CustomSwitch
          label="Hide Title"
          isActive={props.chart.hide_title}
          onChange={(hide_title) =>
            editSection({
              ...props,
              chart: {
                ...props.chart,
                hide_title,
              },
            })
          }
        />
        <CustomSwitch
          label="Hide Border"
          isActive={props.chart.hide_border}
          onChange={(hide_border) =>
            editSection({
              ...props,
              chart: {
                ...props.chart,
                hide_border,
              },
            })
          }
        />
        <CustomSwitch
          label="Area"
          isActive={props.chart.area}
          onChange={(area) =>
            editSection({
              ...props,
              chart: {
                ...props.chart,
                area,
              },
            })
          }
        />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <CustomInputNumber
          label="Radius"
          value={props.chart.radius}
          onChange={(radius) =>
            editSection({
              ...props,
              chart: {
                ...props.chart,
                radius,
              },
            })
          }
          max={16}
        />
        <CustomInputNumber
          label="Height"
          value={props.chart.height}
          onChange={(height) =>
            editSection({
              ...props,
              chart: {
                ...props.chart,
                height,
              },
            })
          }
          min={200}
          max={600}
        />
      </div>
    </>
  );
};

export default Chart;
