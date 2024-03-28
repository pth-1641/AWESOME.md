import { useSectionProps } from '../../../../hooks';
import { alignImageStyle, objectToUrl } from '../../../../utils';
import { IQuoteSetting } from '../default';
import { EQuoteProvider } from '../quote.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IQuoteSetting>(id);
  if (!props) return null;

  return (
    <>
      {props.provider === EQuoteProvider.QUOTE && (
        <img
          src={`https://quotes-github-readme.vercel.app/api?${objectToUrl(
            {
              ...props.quote,
              type: props.quote.viewType,
              border: props.quote.border || '',
            },
            {
              omit: [
                'customQuote',
                'viewType',
                ...(props.quote.customQuote ? [] : ['author', 'quote']),
              ],
            }
          )}`}
          style={alignImageStyle(props.align)}
        />
      )}
      {props.provider === EQuoteProvider.QUOTE_JOKES && (
        <img
          src={` https://readme-jokes.vercel.app/api?${objectToUrl(
            {
              ...(props.quoteJokes.customTheme
                ? { ...props.quoteJokes }
                : { theme: props.quoteJokes.theme }),
            },
            {
              omit: [
                'customTheme',
                props.quoteJokes.hideBorder ? '' : 'hideBorder',
                props.quoteJokes.customTheme ? 'theme' : '',
              ],
            }
          )}`}
          style={alignImageStyle(props.align)}
        />
      )}
    </>
  );
};

export default Preview;
