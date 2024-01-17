import { useUuid } from '.';
import { textSetting } from '../components/common/Text/default';
import { EToolkitType } from '../enums/toolkit.enum';

const useSection = (type: EToolkitType) => {
  switch (type) {
    case EToolkitType.TEXT:
      return { ...textSetting, type, id: useUuid() };
    default:
      return null;
  }
};

export default useSection;
