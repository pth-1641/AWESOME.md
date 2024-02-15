import { EAlign } from '../../../../enums/toolkit.enum';
import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import CustomSelect from '../../../common/CustomSelect';
import { ITextSetting } from '../default';
import { ETextStyle, ETextTag } from '../text.enum';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<ITextSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <div>
      <CustomSelect
        label="Align"
        options={Object.values(EAlign)}
        value={props.settings.align}
        onChange={(align) =>
          editSection({
            ...props,
            settings: {
              ...props.settings,
              align,
            },
          })
        }
      />
      <CustomSelect
        className="mt-4"
        label="Tag"
        options={Object.values(ETextTag)}
        value={props.settings.tag}
        onChange={(tag) =>
          editSection({
            ...props,
            settings: {
              ...props.settings,
              tag,
            },
          })
        }
      />
      <CustomSelect
        className="mt-4"
        label="Style"
        options={Object.values(ETextStyle)}
        value={props.settings.style}
        onChange={(style) =>
          editSection({
            ...props,
            settings: {
              ...props.settings,
              style,
            },
          })
        }
      />
      <h4 class="font-semibold mb-2 mt-4">Content</h4>
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
    </div>
  );
};

export default Setting;
