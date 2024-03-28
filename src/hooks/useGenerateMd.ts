import { EToolkitType } from '../enums/share.enum';
import {
  iconToMarkdown,
  statsToMarkdown,
  textToMarkdown,
  viewToMarkdown,
} from '../utils';
import imageToMarkdown from '../utils/img2md.utils';

const useGenerateMd = (sections: any[]) => {
  const md = sections
    .map((section) => {
      if (section.type === EToolkitType.TEXT) return textToMarkdown(section);
      if (section.type === EToolkitType.TECH) return iconToMarkdown(section);
      if (section.type === EToolkitType.SOCIAL) return iconToMarkdown(section);
      if (section.type === EToolkitType.STATS) return statsToMarkdown(section);
      if (section.type === EToolkitType.VIEWS) return viewToMarkdown(section);
      if (section.type === EToolkitType.IMAGE) return imageToMarkdown(section);
    })
    .join('')
    .replace('<>', '')
    .replace('</>', '');

  console.log(md);
  navigator.clipboard.writeText(md);

  return;
};

export default useGenerateMd;
