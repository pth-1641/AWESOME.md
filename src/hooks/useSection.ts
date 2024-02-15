import { useUuid } from '.';
import { textSetting } from '../components/toolkits/Text/default';
import { techSetting } from '../components/toolkits/Techs/default';
import { socialSetting } from '../components/toolkits/Social/default';
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
