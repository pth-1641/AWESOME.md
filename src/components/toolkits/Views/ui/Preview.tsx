import { useSectionProps } from '../../../../hooks';
import { alignImageStyle } from '../../../../utils';
import {
  hitsCounterUrl,
  moeCounterUrl,
  visitCounterProUrl,
  visitCounterUrl,
} from '../../../../utils/view2md';
import { IViewsSetting } from '../default';
import { EViewProvider } from '../views.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IViewsSetting>(id);
  if (!props) return null;

  return (
    <div style={alignImageStyle(props.align)} class="w-max max-w-full">
      {props.provider === EViewProvider.MOE && (
        <img src={moeCounterUrl(props)} />
      )}
      {props.provider === EViewProvider.HITS && (
        <img src={hitsCounterUrl(props)} />
      )}
      {props.provider === EViewProvider.VISIT && (
        <img src={visitCounterUrl(props)} />
      )}
      {props.provider === EViewProvider.VISIT_PRO && (
        <img src={visitCounterProUrl(props)} />
      )}
    </div>
  );
};

export default Preview;
