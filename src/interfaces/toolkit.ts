import { EToolkitType } from '../enums/toolkit.enum';

export interface IToolkit {
  label: string;
  iconName: string;
  type: EToolkitType;
}
