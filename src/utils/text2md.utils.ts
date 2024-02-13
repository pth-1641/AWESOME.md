import { ITextSetting } from '../components/common/Text/default';
import { ETextStyle } from '../components/common/Text/text.enum';

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
    <${textStyleSymbol()}>${props.value}</${textStyleSymbol()}>
</${props.settings.tag}>`;
};

export default textToMarkdown;
