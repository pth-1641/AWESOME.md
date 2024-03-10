import { useSectionProps } from '../../../../hooks';
import { alignImageStyle, objectToUrl } from '../../../../utils';
import { IViewsSetting } from '../default';
import {
  EHitsViewType,
  EViewProvider,
  EVisitProIcon,
  EVisitProTheme,
} from '../views.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IViewsSetting>(id);
  if (!props) return null;

  const { username } = props;

  return (
    <div style={alignImageStyle(props.align)} class="w-max max-w-full">
      {props.provider === EViewProvider.MOE && (
        <img
          src={`https://moe-counter-grbnb.vercel.app/get/@${username}?theme=${props.moeCounter.theme}`}
        />
      )}
      {props.provider === EViewProvider.HITS && (
        <img
          src={`https://hits.sh/github.com/${username}/hits.svg?${objectToUrl(
            {
              ...props.hitsCounter,
              view:
                props.hitsCounter.viewType === EHitsViewType.TODAY
                  ? 'today-total'
                  : 'total',
            },
            { omit: ['viewType'] }
          )}`}
        />
      )}
      {props.provider === EViewProvider.VISIT && (
        <img
          src={`https://visit-counter.vercel.app/counter.png?${objectToUrl({
            ...props.visitCounter,
            page: username,
            ta: ` ${props.visitCounter.ta.trim()}`,
            tb: `${props.visitCounter.tb.trim()} `,
          }).replace(/\%23/g, '')}`}
        />
      )}
      {props.provider === EViewProvider.VISIT_PRO && (
        <img
          src={`https://visitcount.itsvg.in/api?${objectToUrl(
            {
              id: username,
              ...props.visitProCounter,
            },
            {
              omit: [
                props.visitProCounter.color === EVisitProTheme.RANDOM
                  ? 'color'
                  : '',
                props.visitProCounter.icon === EVisitProIcon.RANDOM
                  ? 'icon'
                  : '',
              ],
            }
          )}`}
        />
      )}
    </div>
  );
};

export default Preview;
