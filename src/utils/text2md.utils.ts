import { ITextSetting } from '../components/toolkits/Text/default';
import { ETextStyle } from '../components/toolkits/Text/text.enum';

const textToMarkdown = (props: ITextSetting) => {
  console.log(props.value);
  const textStyleSymbol = () => {
    switch (props.text.style) {
      case ETextStyle.ITALIC:
        return 'i';
      case ETextStyle.STRIKE:
        return 'strike';
      default:
        return '';
    }
  };

  return `<${props.text.tag} align="${props.text.align}">
    <${textStyleSymbol()}>${props.value.trim()}</${textStyleSymbol()}>
</${props.text.tag}>`;
};

export default textToMarkdown;
