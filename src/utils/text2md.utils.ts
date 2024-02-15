import { ITextSetting } from '../components/toolkits/Text/default';
import { ETextStyle } from '../components/toolkits/Text/text.enum';

const textToMarkdown = (props: ITextSetting) => {
  const textStyleSymbol = () => {
    switch (props.settings.style) {
      case ETextStyle.ITALIC:
        return 'i';
      case ETextStyle.STRIKE:
        return 'strike';
      default:
        return '';
    }
  };

  return `<${props.settings.tag} align="${props.settings.align}">
    <${textStyleSymbol()}>${props.value.trim()}</${textStyleSymbol()}>
</${props.settings.tag}>`;
};

export default textToMarkdown;
