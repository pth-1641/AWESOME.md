import { ITextSetting } from '../components/common/Text/default';
import { EToolkitType } from '../enums/toolkit.enum';

export interface IToolkit {
  label: string;
  iconName: string;
  type: EToolkitType;
}

export interface Section {
  [EToolkitType.TEXT]?: ITextSetting;
}
