import { useSectionProps } from '../../../../../hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import CustomTextarea from '../../../../common/CustomTextarea';
import { ITextSetting } from '../../default';
import { ETextProvider } from '../../text.enum';
import TextSetting from './Text';
import TypingSetting from './Typing';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomSelect
        className="mb-4"
        label="Provider"
        value={props.provider}
        options={Object.values(ETextProvider)}
        onChange={(provider) =>
          editSection({
            ...props,
            provider,
          })
        }
      />
      <CustomTextarea
        label="Content"
        value={props.value}
        onChange={(value) =>
          editSection({
            ...props,
            value,
          })
        }
      />
      {props.provider === ETextProvider.TEXT && <TextSetting {...props} />}
      {props.provider === ETextProvider.TYPING && <TypingSetting {...props} />}
    </>
  );
};

export default Setting;
