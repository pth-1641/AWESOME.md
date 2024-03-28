import { EAlign } from '../../../../../enums/share.enum';
import { useSectionProps } from '../../../../../hooks';
import { useAppStore } from '../../../../../store/app.store';
import CustomSelect from '../../../../common/CustomSelect';
import { IQuoteSetting } from '../../default';
import { EQuoteProvider } from '../../quote.enum';
import QuoteSetting from './Quote';
import QuoteJokeSetting from './QuoteJokes';

const Setting = ({ id }: { id: string }) => {
  const props = useSectionProps<IQuoteSetting>(id);
  const { editSection } = useAppStore();

  if (!props) return null;

  return (
    <>
      <CustomSelect
        className="mt-0"
        label="Provider"
        value={props.provider}
        options={Object.values(EQuoteProvider)}
        onChange={(provider) =>
          editSection({
            ...props,
            provider,
          })
        }
      />
      <CustomSelect
        label="Align"
        className="my-4"
        value={props.align}
        options={Object.values(EAlign)}
        onChange={(align) =>
          editSection({
            ...props,
            align,
          })
        }
      />
      {props.provider === EQuoteProvider.QUOTE && <QuoteSetting {...props} />}
      {props.provider === EQuoteProvider.QUOTE_JOKES && (
        <QuoteJokeSetting {...props} />
      )}
    </>
  );
};

export default Setting;
