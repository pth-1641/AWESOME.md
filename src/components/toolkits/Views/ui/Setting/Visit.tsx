import { useAppStore } from '../../../../../store/app.store';
import { getEnumKey } from '../../../../../utils';
import { getEnumValue } from '../../../../../utils/enums';
import CustomColorPicker from '../../../../common/CustomColorPicker';
import CustomInput from '../../../../common/CustomInput';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import CustomSelect from '../../../../common/CustomSelect';
import { IViewsSetting } from '../../default';
import { EVisitCounterStyle } from '../../views.enum';

const VisitCounter = (props: IViewsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Style"
        options={Object.keys(EVisitCounterStyle)}
        value={
          getEnumKey(
            EVisitCounterStyle,
            props.visitCounter.ff
          )?.toLowerCase() || ''
        }
        onChange={(ff) =>
          editSection({
            ...props,
            visitCounter: {
              ...props.visitCounter,
              ff: getEnumValue(EVisitCounterStyle, ff),
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-x-5">
        <CustomInputNumber
          label="Font Size"
          value={props.visitCounter.s}
          onChange={(s) =>
            editSection({
              ...props,
              visitCounter: {
                ...props.visitCounter,
                s,
              },
            })
          }
        />
        <CustomInputNumber
          label="Min number"
          value={props.visitCounter.no}
          min={2}
          max={20}
          onChange={(no) =>
            editSection({
              ...props,
              visitCounter: {
                ...props.visitCounter,
                no,
              },
            })
          }
        />
      </div>
      <CustomColorPicker
        label="Text"
        value={props.visitCounter.c}
        onChange={(c) =>
          editSection({
            ...props,
            visitCounter: {
              ...props.visitCounter,
              c,
            },
          })
        }
      />
      <CustomColorPicker
        label="Background"
        initOpacity={0}
        value={props.visitCounter.bg}
        onChange={(bg) =>
          editSection({
            ...props,
            visitCounter: {
              ...props.visitCounter,
              bg,
            },
          })
        }
      />
      <CustomInput
        label="Text before"
        value={props.visitCounter.tb}
        onChange={(tb) =>
          editSection({
            ...props,
            visitCounter: {
              ...props.visitCounter,
              tb,
            },
          })
        }
      />
      <CustomInput
        label="Text after"
        value={props.visitCounter.ta}
        onChange={(ta) =>
          editSection({
            ...props,
            visitCounter: {
              ...props.visitCounter,
              ta,
            },
          })
        }
      />
    </>
  );
};

export default VisitCounter;
