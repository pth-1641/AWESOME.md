import { EToolkitType } from '../enums/share.enum';
import { iconToMarkdown, statsToMarkdown, textToMarkdown } from '../utils';

const useGenerateMd = (sections: any[]) => {
  const md = sections
    .map((section) => {
      if (section.type === EToolkitType.TEXT) return textToMarkdown(section);
      if (section.type === EToolkitType.TECH) return iconToMarkdown(section);
      if (section.type === EToolkitType.SOCIAL) return iconToMarkdown(section);
      if (section.type === EToolkitType.STATS) return statsToMarkdown(section);
    })
    .join('')
    .replace('<>', '')
    .replace('</>', '');

  console.log(md);
  navigator.clipboard.writeText(md);

  return;
};

export default useGenerateMd;
