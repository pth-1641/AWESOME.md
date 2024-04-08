import { IIconSetting } from '../components/toolkits/Icon/default';

const iconToMarkdown = (props: IIconSetting) => {
  return `<div align="${props.settings.position}">${props.icons
    .map(
      (icon) =>
        `${icon.href ? `<a href="${icon.href}">` : ''}
        <img src="https://api.iconify.design/${icon.name.replace(
          ':',
          '/'
        )}.svg" alt="${icon.name}" height="${props.settings.size}" />
        ${icon.href ? '</a>' : ''}<img width="${props.settings.gap}" />`
    )
    .join('')}
    </div>`;
};

export default iconToMarkdown;
