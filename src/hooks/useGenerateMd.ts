import { EToolkitType } from '../enums/toolkit.enum';
import { techsToMarkdown, textToMarkdown } from '../utils';
import socialToMarkdown from '../utils/social2md.utill';

const useGenerateMd = (sections: any[]) => {
  const md = sections
    .map((section) => {
      if (section.type === EToolkitType.TEXT) return textToMarkdown(section);
      if (section.type === EToolkitType.TECH) return techsToMarkdown(section);
      if (section.type === EToolkitType.SOCIAL)
        return socialToMarkdown(section);
    })
    .join('')
    .replace('<>', '')
    .replace('</>', '');

  console.log(md);

  return;
};

export default useGenerateMd;
