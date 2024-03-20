import { useSectionProps } from '../../../../hooks';
import { alignImageStyle, objectToUrl } from '../../../../utils';
import { IDevSocialSetting } from '../default';
import { EDevSocialProvider, EStackoverflowLayout } from '../dev-social.enum';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IDevSocialSetting>(id);

  if (!props) return null;

  // console.log(
  //   `https://leetcard.jacoblin.cool/${
  //     props.leetcodeStats.username
  //   }?${objectToUrl({
  //     ...props.leetcodeStats,
  //   })}`
  // );

  return (
    <>
      {props.provider === EDevSocialProvider.LEETCODE && (
        <img
          style={alignImageStyle(props.align)}
          src={`https://leetcard.jacoblin.cool/${
            props.leetcodeStats.username
          }?${objectToUrl(
            {
              ...props.leetcodeStats,
              border: +props.leetcodeStats.border,
            },
            {
              omit: ['username'],
            }
          )}`}
        />
      )}
      {props.provider === EDevSocialProvider.STACKOVERFLOW && (
        <img
          style={alignImageStyle(props.align)}
          src={`https://github-readme-stackoverflow.vercel.app?${objectToUrl(
            {
              ...props.stackoverflowStats,
            },
            {
              omit: [
                props.stackoverflowStats.layout === EStackoverflowLayout.DEFAULT
                  ? 'layout'
                  : '',
              ],
            }
          )}`}
        />
      )}
    </>
  );
};

export default Preview;
