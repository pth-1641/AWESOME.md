import { useSectionProps } from '../../../../hooks';
import { alignImageStyle } from '../../../../utils';
import { leetcodeStatsUrl, stackoverflowStatsUrl } from '../../../../utils/dev2md';
import { IDevSocialSetting } from '../default';
import { EDevSocialProvider } from '../dev-social.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IDevSocialSetting>(id);

  if (!props) return null;

  return (
    <>
      {props.provider === EDevSocialProvider.LEETCODE && (
        <img
          style={alignImageStyle(props.align)}
          src={leetcodeStatsUrl(props)}
        />
      )}
      {props.provider === EDevSocialProvider.STACKOVERFLOW && (
        <img style={alignImageStyle(props.align)} src={stackoverflowStatsUrl(props)} />
      )}
    </>
  );
};

export default Preview;
