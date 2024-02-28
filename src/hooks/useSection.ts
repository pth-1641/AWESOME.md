import { useUuid } from '.';
import { textSetting } from '../components/toolkits/Text/default';
import {
  socialSetting,
  techSetting,
} from '../components/toolkits/Icon/default';
import { statsSetting } from '../components/toolkits/Stats/default';
import { EToolkitType } from '../enums/toolkit.enum';

const useSection = (type: EToolkitType) => {
  switch (type) {
    case EToolkitType.TEXT:
      return { ...textSetting, type, id: useUuid() };
    case EToolkitType.TECH:
      return { ...techSetting, type, id: useUuid() };
    case EToolkitType.SOCIAL:
      return { ...socialSetting, type, id: useUuid() };
    case EToolkitType.STATS:
      return { ...statsSetting, type, id: useUuid() };
    default:
      return null;
  }
};

export default useSection;
