import { IImageSetting } from "../components/toolkits/Image/default";

const imageToMarkdown = (props: IImageSetting) => {
  return `<div align="${props.align}">
    <img src="${props.url}" width="${props.width}" />
</div>`;
};

export default imageToMarkdown;
