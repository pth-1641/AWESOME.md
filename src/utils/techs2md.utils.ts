import { IIconSetting } from '../components/toolkits/Icon/default';

const techsToMarkdown = (props: IIconSetting) => {
  return `<div align="${props.settings.position}">
  ${props.icons
    .map(
      (icon) =>
        `<img src="https://api.iconify.design/${icon.name.replace(
          ':',
          '/'
        )}.svg" alt="${icon}" height="${props.settings.size}" />
  <img width="${props.settings.gap}"/>`
    )
    .join('')}
</div>`;
};

export default techsToMarkdown;
