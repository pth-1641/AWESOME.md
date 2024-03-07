import { EAlign } from '../../../../enums/share.enum';
import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import CustomInput from '../../../common/CustomInput';
import CustomInputNumber from '../../../common/CustomInputNumber';
import CustomSelect from '../../../common/CustomSelect';
import { IImageSetting } from '../default';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IImageSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomInput
        value={props.url}
        label="Image URL"
        onChange={(url) => editSection({ ...props, url })}
      />
      <CustomSelect
        value={props.align}
        label="Align"
        options={Object.values(EAlign)}
        onChange={(align) => editSection({ ...props, align })}
      />
      <div class="grid grid-cols-2 gap-x-5">
        <CustomInputNumber
          value={props.height}
          label="Height"
          onChange={(height) => editSection({ ...props, height })}
        />
        <CustomInputNumber
          value={props.width}
          label="Width"
          onChange={(width) => editSection({ ...props, width })}
        />
      </div>
    </>
  );
};

export default Setting;
