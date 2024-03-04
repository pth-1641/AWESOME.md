import { useAppStore } from '../../../../../store/app.store';
import CustomInput from '../../../../common/CustomInput';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import CustomSelect from '../../../../common/CustomSelect';
import CustomSwitch from '../../../../common/CustomSwitch';
import { IViewsSetting } from '../../default';
import { EKomarevStyle } from '../../views.enum';

const Komarev = (props: IViewsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Style"
        options={Object.values(EKomarevStyle)}
        value={props.komarevCounter.style}
        onChange={(style) =>
          editSection({
            ...props,
            komarevCounter: {
              ...props.komarevCounter,
              style,
            },
          })
        }
      />
      <CustomInput
        label="Label"
        capitalize={false}
        value={props.komarevCounter.label}
        onChange={(label) =>
          editSection({
            ...props,
            komarevCounter: {
              ...props.komarevCounter,
              label,
            },
          })
        }
      />
      <div class="grid grid-cols-2 gap-x-5">
        <CustomSwitch
          label="Abbreviation"
          isActive={props.komarevCounter.abbreviated}
          onChange={(abbreviated) =>
            editSection({
              ...props,
              komarevCounter: {
                ...props.komarevCounter,
                abbreviated,
              },
            })
          }
        />
        <CustomSwitch
          label="Addition Views"
          isActive={props.komarevCounter.activeAddition}
          onChange={(activeAddition) =>
            editSection({
              ...props,
              komarevCounter: {
                ...props.komarevCounter,
                activeAddition,
              },
            })
          }
        />
      </div>
      {props.komarevCounter.activeAddition && (
        <CustomInputNumber
          value={props.komarevCounter.additionViews}
          onChange={(additionViews) =>
            editSection({
              ...props,
              komarevCounter: {
                ...props.komarevCounter,
                additionViews,
              },
            })
          }
        />
      )}
    </>
  );
};

export default Komarev;
