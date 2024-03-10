import { EAlign } from '../../../../enums/share.enum';
import { useSectionProps } from '../../../../hooks';
import { useAppStore } from '../../../../store/app.store';
import CustomInput from '../../../common/CustomInput';
import CustomSelect from '../../../common/CustomSelect';
import CustomSwitch from '../../../common/CustomSwitch';
import { IQuoteSetting } from '../default';
import { EQuoteTheme, EQuoteType } from '../quote.enum';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IQuoteSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomSelect
        label="Theme"
        value={props.theme}
        options={Object.values(EQuoteTheme)}
        onChange={(theme) =>
          editSection({
            ...props,
            theme,
          })
        }
      />

      <CustomSelect
        label="Type"
        value={props.viewType}
        options={Object.values(EQuoteType)}
        onChange={(viewType) =>
          editSection({
            ...props,
            viewType,
          })
        }
      />
      <CustomSelect
        label="Align"
        value={props.align}
        options={Object.values(EAlign)}
        onChange={(align) =>
          editSection({
            ...props,
            align,
          })
        }
      />
      <div class="grid grid-cols-2 gap-4">
        <CustomSwitch
          label="Show Border"
          isActive={props.border}
          onChange={(border) =>
            editSection({
              ...props,
              border,
            })
          }
        />
        <CustomSwitch
          label="Custom Quote"
          isActive={props.customQuote}
          onChange={(customQuote) =>
            editSection({
              ...props,
              customQuote,
            })
          }
        />
      </div>
      {props.customQuote && (
        <>
          <CustomInput
            label="Quote"
            value={props.quote}
            onChange={(quote) =>
              editSection({
                ...props,
                quote,
              })
            }
          />
          <CustomInput
            label="Author"
            value={props.author}
            onChange={(author) =>
              editSection({
                ...props,
                author,
              })
            }
          />
        </>
      )}
    </>
  );
};

export default Setting;
