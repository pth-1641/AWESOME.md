import { useSectionProps } from '../../../../hooks';
import { alignImageStyle, objectToUrl } from '../../../../utils';
import { IViewsSetting } from '../default';
import { EViewProvider } from '../views.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IViewsSetting>(id);
  if (!props) return null;

  const { username } = props;

  return (
    <>
      {props.provider === EViewProvider.MOE && (
        <img
          src={`https://count.getloli.com/get/@${username}?theme=${props.moeCounter.theme}`}
          style={alignImageStyle(props.align)}
        />
      )}
      {props.provider === EViewProvider.KOMAREV && (
        <img
          src={`https://komarev.com/ghpvc?${objectToUrl(
            {
              username,
              ...props.komarevCounter,
              base: props.komarevCounter.additionViews,
            },
            {
              omit: [
                'additionViews',
                'activeAddition',
                props.komarevCounter.abbreviated ? '' : 'abbreviated',
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
