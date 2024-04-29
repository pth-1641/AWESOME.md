import { EToolkitType } from '../enums/share.enum';
import {
  iconToMarkdown,
  statsToMarkdown,
  textToMarkdown,
  viewToMarkdown,
} from '../utils';
import devSocialToMarkdown from '../utils/dev2md';
import imageToMarkdown from '../utils/img2md';
import quoteToMarkdown from '../utils/quote2md';

const useGenerateMd = (sections: any[]) => {
  const md = sections
    .map((section) => {
      if (section.type === EToolkitType.TEXT) return textToMarkdown(section);
      if (section.type === EToolkitType.TECH) return iconToMarkdown(section);
      if (section.type === EToolkitType.SOCIAL) return iconToMarkdown(section);
      if (section.type === EToolkitType.STATS) return statsToMarkdown(section);
      if (section.type === EToolkitType.VIEWS) return viewToMarkdown(section);
      if (section.type === EToolkitType.IMAGE) return imageToMarkdown(section);
      if (section.type === EToolkitType.MEME) return imageToMarkdown(section);
      if (section.type === EToolkitType.QUOTE) return quoteToMarkdown(section);
      if (section.type === EToolkitType.DEV_SOCIAL)
        return devSocialToMarkdown(section);
    })
    .join(
      `
`
    )
    .replace(/\<\>/g, '')
    .replace(/\<\/\>/g, '');
  return md;
};

export default useGenerateMd;
