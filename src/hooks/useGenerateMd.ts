import { EToolkitType } from '../enums/toolkit.enum';
import { iconsToMarkdown, textToMarkdown } from '../utils';

const useGenerateMd = (sections: any[]) => {
  const md = sections
    .map((section) => {
      if (section.type === EToolkitType.TEXT) return textToMarkdown(section);
      if (section.type === EToolkitType.TECH) return iconsToMarkdown(section);
    })
    .join('')
    .replace('<>', '')
    .replace('</>', '');
  // .join('<br />')
  // .replace(/\n/g, '<br />');

  console.log(md);

  return;
};

export default useGenerateMd;
