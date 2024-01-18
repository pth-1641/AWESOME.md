import { useUuid } from ".";
import { textSetting } from "../components/common/Text/default";
import { techSetting } from "../components/common/Techs/default";
import { EToolkitType } from "../enums/toolkit.enum";

const useSection = (type: EToolkitType) => {
  switch (type) {
    case EToolkitType.TEXT:
      return { ...textSetting, type, id: useUuid() };
    case EToolkitType.TECH:
      return { ...techSetting, type, id: useUuid() };
    default:
      return null;
  }
};

export default useSection;
