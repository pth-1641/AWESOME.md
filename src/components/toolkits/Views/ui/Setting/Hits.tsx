import { useAppStore } from '../../../../../store/app.store';
import CustomColorPicker from '../../../../common/CustomColorPicker';
import CustomInput from '../../../../common/CustomInput';
import CustomInputNumber from '../../../../common/CustomInputNumber';
import CustomSelect from '../../../../common/CustomSelect';
import { IViewsSetting } from '../../default';
import { EHitsStyle, EHitsViewType } from '../../views.enum';

const Hits = (props: IViewsSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Style"
        options={Object.values(EHitsStyle)}
        value={props.hitsCounter.style}
        onChange={(style) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              style,
            },
          })
        }
      />
      <CustomSelect
        label="Views Style"
        options={Object.values(EHitsViewType)}
        value={props.hitsCounter.viewType}
        onChange={(viewType) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              viewType,
            },
          })
        }
      />
      <CustomInput
        label="Text"
        value={props.hitsCounter.label}
        onChange={(label) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              label,
            },
          })
        }
      />
      <CustomInputNumber
        label="Extra Count"
        value={props.hitsCounter.extraCount}
        onChange={(extraCount) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              extraCount,
            },
          })
        }
      />
      <CustomColorPicker
        label="View Color"
        value={props.hitsCounter.color}
        onChange={(color) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              color,
            },
          })
        }
      />
      <CustomColorPicker
        label="Text Color"
        value={props.hitsCounter.labelColor}
        onChange={(labelColor) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              labelColor,
            },
          })
        }
      />
      <CustomInput
        label="Custom Logo"
        subtitle={
          <>
            Slug from{' '}
            <a
              class="text-emerald-500"
              target="blank"
              href="https://github.com/simple-icons/simple-icons/blob/develop/slugs.md"
              rel="noopener noreferer"
            >
              Simple Icons
            </a>
          </>
        }
        value={props.hitsCounter.logo}
        onChange={(logo) =>
          editSection({
            ...props,
            hitsCounter: {
              ...props.hitsCounter,
              logo,
            },
          })
        }
      />
    </>
  );
};

export default Hits;
