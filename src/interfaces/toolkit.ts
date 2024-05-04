import { EToolkitType } from "../enums/share.enum";

export interface IToolkit {
  label: string;
  iconName: string;
  type: EToolkitType;
}

export interface ISocial {
  href: string;
  iconName: string;
}
