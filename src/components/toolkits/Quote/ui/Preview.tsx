import { useSectionProps } from '../../../../hooks';
import { alignImageStyle } from '../../../../utils';
import { quoteJokeUrl, quoteUrl } from '../../../../utils/quote2md';
import { IQuoteSetting } from '../default';
import { EQuoteProvider } from '../quote.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IQuoteSetting>(id);
  if (!props) return null;

  return (
    <>
      {props.provider === EQuoteProvider.QUOTE && (
        <img src={quoteUrl(props)} style={alignImageStyle(props.align)} />
      )}
      {props.provider === EQuoteProvider.QUOTE_JOKES && (
        <img src={quoteJokeUrl(props)} style={alignImageStyle(props.align)} />
      )}
    </>
  );
};

export default Preview;
