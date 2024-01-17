import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import { CustomSelect } from '../../CustomSelect';
import { ETextAlign, ETextTag } from '../text.enum';

const TextSetting = ({ id }: { id: string }) => {
  const props = useSectionProps(id);
  const editSection = useAppStore((state) => state.editSection);

  return (
    <div>
      <CustomSelect
        label="Align"
        options={Object.values(ETextAlign)}
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
        className="mt-6"
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
      <h4 class="font-semibold mb-2 mt-6">Content</h4>
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

export default TextSetting;
