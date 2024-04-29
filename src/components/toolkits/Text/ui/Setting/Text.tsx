import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import { ITextSetting } from '../../default';
import { ETextStyle, ETextTag } from '../../text.enum';

const Text = (props: ITextSetting) => {
  const { editSection } = useAppStore();

  return (
    <>
      <CustomSelect
        label="Tag"
        options={Object.values(ETextTag)}
        value={props.text.tag}
        onChange={(tag) =>
          editSection({
            ...props,
            text: {
              ...props.text,
              tag,
            },
          })
        }
      />
      <CustomSelect
        label="Style"
        options={Object.values(ETextStyle)}
        value={props.text.style}
        onChange={(style) =>
          editSection({
            ...props,
            text: {
              ...props.text,
              style,
            },
          })
        }
      />
    </>
  );
};

export default Text;
