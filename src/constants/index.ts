import { EToolkitType } from '../enums/share.enum';
import { IToolkit } from '../interfaces/toolkit';

export const toolkits: IToolkit[] = [
  {
    label: 'Text',
    iconName: 'fluent:text-t-28-regular',
    type: EToolkitType.TEXT,
  },
  {
    label: 'Techs',
    iconName: 'ph:code-duotone',
    type: EToolkitType.TECH,
  },
  {
    label: 'Stats',
    iconName: 'arcticons:coinstats',
    type: EToolkitType.STATS,
  },
  {
    label: 'Socials',
    iconName: 'material-symbols-light:share-outline',
    type: EToolkitType.SOCIAL,
  },
  {
    label: 'Views',
    iconName: 'lets-icons:view-light',
    type: EToolkitType.VIEWS,
  },
];
