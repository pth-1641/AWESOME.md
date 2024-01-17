import { EToolkitType } from '../enums/toolkit.enum';
import { IToolkit } from '../interfaces/toolkit';

export const toolkits: IToolkit[] = [
  {
    label: 'Text',
    iconName: 'fluent:text-t-28-regular',
    type: EToolkitType.TEXT,
  },
  {
    label: 'Techs',
    iconName: 'fluent:code-block-28-regular',
    type: EToolkitType.TECH,
  },
  {
    label: 'Stats',
    iconName: 'arcticons:coinstats',
    type: EToolkitType.STAT,
  },
  {
    label: 'Socials',
    iconName: 'material-symbols-light:share-outline',
    type: EToolkitType.SOCIAL,
  },
];
