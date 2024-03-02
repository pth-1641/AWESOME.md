import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import { IStatsSetting } from '../../default';
import { ESummaryTheme } from '../../stats.enum';

const Summary = (props: IStatsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Theme"
        options={Object.values(ESummaryTheme)}
        value={props.summary.theme}
        className="mt-4"
        onChange={(theme) =>
          editSection({
            ...props,
            summary: {
              ...props.summary,
              theme,
            },
          })
        }
      />
    </>
  );
};

export default Summary;
