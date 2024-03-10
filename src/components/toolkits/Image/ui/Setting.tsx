import { EAlign } from '../../../../enums/share.enum';
import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import CustomInput from '../../../common/CustomInput';
import CustomInputNumber from '../../../common/CustomInputNumber';
import CustomSelect from '../../../common/CustomSelect';
import { IImageSetting } from '../default';

const Setting = ({ id, hideUrl }: { id: string; hideUrl?: boolean }) => {
  const props = useSectionProps<IImageSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      {!hideUrl && (
        <CustomInput
          value={props.url}
          label="Image URL"
          onChange={(url) => editSection({ ...props, url })}
        />
      )}
      <CustomSelect
        value={props.align}
        label="Align"
        options={Object.values(EAlign)}
        onChange={(align) => editSection({ ...props, align })}
      />
      <CustomInputNumber
        value={props.width}
        label="Width"
        onChange={(width) => editSection({ ...props, width })}
      />
    </>
  );
};

export default Setting;
