import { ISocialSetting } from '../components/toolkits/Social/default';

const socialToMarkdown = (props: ISocialSetting) => {
  return `<div align="${props.settings.position}">
  ${props.icons
    .map(
      (icon) =>
        `<a href="${icon.href ? icon.href : '#'}"
        target="_blank"
        rel="noopener noreferrer"><img src="https://api.iconify.design/${icon.name.replace(
          ':',
          '/'
        )}.svg" alt="${icon.name}" height="${props.settings.size}" /></a>
  <img width="${props.settings.gap}"/>`
    )
    .join('')}
</div>`;
};

export default socialToMarkdown;
