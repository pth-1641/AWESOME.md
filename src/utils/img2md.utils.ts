import { IImageSetting } from '../components/toolkits/Image/default';

const imageToMarkdown = (props: IImageSetting) => {
  return `<img src="${props.url}" align="${props.align}" width="${props.width}" />`;
};

export default imageToMarkdown;
