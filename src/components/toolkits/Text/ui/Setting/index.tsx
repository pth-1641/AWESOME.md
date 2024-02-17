import { useSectionProps } from '../../../../../hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
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
      <h4 class="font-semibold mb-2">Content</h4>
      <textarea
        class="bg-transparent outline-none py-1.5 px-2 w-full border border-white/15 rounded-md resize-none"
        rows={5}
        contentEditable={false}
        value={props.value}
        onChange={(e) =>
          editSection({
            ...props,
            value: e.currentTarget.value,
          })
        }
      />
      <CustomSelect
        className="mb-4 mt-2"
        label="Provider"
        options={Object.values(ETextProvider)}
        value={props.provider}
        onChange={(provider) =>
          editSection({
            ...props,
            provider,
          })
        }
      />
      {props.provider === ETextProvider.TEXT && <TextSetting {...props} />}
      {props.provider === ETextProvider.TYPING && <TypingSetting {...props} />}
    </>
  );
};

export default Setting;
