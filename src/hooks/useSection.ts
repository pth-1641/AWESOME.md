import { useUuid } from '.';
import { textSetting } from '../components/toolkits/Text/default';
import {
  socialSetting,
  techSetting,
} from '../components/toolkits/Icon/default';
import { statsSetting } from '../components/toolkits/Stats/default';
import { viewsSetting } from '../components/toolkits/Views/default';
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
    default:
      return null;
  }
};

export default useSection;
