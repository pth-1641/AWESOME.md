import { useSectionProps } from '../../../../hooks';
import { alignImageStyle, objectToUrl } from '../../../../utils';
import { IQuoteSetting } from '../default';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IQuoteSetting>(id);
  if (!props) return null;

  return (
    <img
      src={`https://quotes-github-readme.vercel.app/api?${objectToUrl(
        {
          ...props,
          type: props.viewType,
          border: props.border || '',
        },
        {
          omit: [
            'customQuote',
            'viewType',
            ...(props.customQuote ? [] : ['author', 'quote']),
          ],
        }
      )}`}
      style={alignImageStyle(props.align)}
    />
  );
};

export default Preview;
