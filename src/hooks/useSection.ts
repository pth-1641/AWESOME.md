import { useUuid } from '.';
import {
  socialSetting,
  techSetting,
} from '../components/toolkits/Icon/default';
import {
  imageSetting,
  memeSetting,
} from '../components/toolkits/Image/default';
import { statsSetting } from '../components/toolkits/Stats/default';
import { textSetting } from '../components/toolkits/Text/default';
import { viewsSetting } from '../components/toolkits/Views/default';
import { quoteSetting } from '../components/toolkits/Quote/default';
import { devSocialSetting } from '../components/toolkits/DevSocial/default';
import { EToolkitType } from '../enums/share.enum';

const useSection = (type: EToolkitType) => {
  const id = useUuid();
  switch (type) {
    case EToolkitType.TEXT:
      return { ...textSetting, type, id };
    case EToolkitType.TECH:
      return { ...techSetting, type, id };
    case EToolkitType.SOCIAL:
      return { ...socialSetting, type, id };
    case EToolkitType.STATS:
      return { ...statsSetting, type, id };
    case EToolkitType.VIEWS:
      return { ...viewsSetting, type, id };
    case EToolkitType.IMAGE:
      return { ...imageSetting, type, id };
    case EToolkitType.MEME:
      return { ...memeSetting, type, id };
    case EToolkitType.QUOTE:
      return { ...quoteSetting, type, id };
    case EToolkitType.DEV_SOCIAL:
      return { ...devSocialSetting, type, id };
    default:
      return null;
  }
};

export default useSection;
