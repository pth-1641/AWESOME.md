import { objectToUrl } from ".";
import { IQuoteSetting } from "../components/toolkits/Quote/default";
import { EQuoteProvider } from "../components/toolkits/Quote/quote.enum";

const quoteUrl = (setting: IQuoteSetting) => {
  return `https://quotes-github-readme.vercel.app/api?${objectToUrl(
    {
      ...setting.quote,
      type: setting.quote.viewType,
      border: setting.quote.border || "",
    },
    {
      omit: [
        "customQuote",
        "viewType",
        ...(setting.quote.customQuote ? [] : ["author", "quote"]),
      ],
    }
  )}`;
};

const quoteJokeUrl = (setting: IQuoteSetting) => {
  return ` https://readme-jokes.vercel.app/api?${objectToUrl(
    {
      ...(setting.quoteJokes.customTheme
        ? { ...setting.quoteJokes }
        : { theme: setting.quoteJokes.theme }),
    },
    {
      omit: [
        "customTheme",
        setting.quoteJokes.hideBorder ? "" : "hideBorder",
        setting.quoteJokes.customTheme ? "theme" : "",
      ],
    }
  )}`;
};

const quoteToMarkdown = (setting: IQuoteSetting) => {
  switch (setting.provider) {
    case EQuoteProvider.QUOTE:
      return `<div align="${setting.align}">
      <img src="${quoteUrl(setting)}" alt="" />
</div>`;
    case EQuoteProvider.QUOTE_JOKES:
      return `<div align="${setting.align}">
      <img src="${quoteJokeUrl(setting)}" alt=""/>
</div>`;
    default:
      return "";
  }
};

export { quoteJokeUrl, quoteUrl };
export default quoteToMarkdown;
