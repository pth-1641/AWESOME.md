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
    iconName: 'fluent:code-20-regular',
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
  {
    label: 'Image',
    iconName: 'ph:image-thin',
    type: EToolkitType.IMAGE,
  },
  {
    label: 'Meme',
    iconName: 'arcticons:memetastic',
    type: EToolkitType.MEME,
  },
  {
    label: 'Quote',
    iconName: 'f7:quote-bubble',
    type: EToolkitType.QUOTE,
  },
  {
    label: 'Dev Social',
    iconName: 'material-symbols-light:logo-dev-outline-rounded',
    type: EToolkitType.DEV_SOCIAL,
  },
];

export const UNAVAIABLE_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
export const APP_NAME = 'AWESOME.md';

export const PRIVATE_KEY = import.meta.env.VITE_PRIVATE_KEY;
