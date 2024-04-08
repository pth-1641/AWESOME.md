import { objectToUrl } from '.';
import { IDevSocialSetting } from '../components/toolkits/DevSocial/default';
import {
  EDevSocialProvider,
  EStackoverflowLayout,
} from '../components/toolkits/DevSocial/dev-social.enum';

const leetcodeStatsUrl = (setting: IDevSocialSetting) => {
  return `https://leetcard.jacoblin.cool/${
    setting.leetcodeStats.username
  }?${objectToUrl(
    {
      ...setting.leetcodeStats,
      border: +setting.leetcodeStats.border,
    },
    {
      omit: ['username'],
    }
  )}`;
};

const stackoverflowStatsUrl = (setting: IDevSocialSetting) => {
  return `https://github-readme-stackoverflow.vercel.app?${objectToUrl(
    {
      ...setting.stackoverflowStats,
    },
    {
      omit: [
        setting.stackoverflowStats.layout === EStackoverflowLayout.DEFAULT
          ? 'layout'
          : '',
      ],
    }
  )}`;
};

const devSocialToMarkdown = (setting: IDevSocialSetting) => {
  switch (setting.provider) {
    case EDevSocialProvider.LEETCODE:
      return `<img src="${leetcodeStatsUrl(setting)}" alt=""/>`;
    case EDevSocialProvider.STACKOVERFLOW:
      return `<img src="${stackoverflowStatsUrl(setting)}" alt=""/>`;
    default:
      return '';
  }
};

export { leetcodeStatsUrl, stackoverflowStatsUrl };
export default devSocialToMarkdown;
