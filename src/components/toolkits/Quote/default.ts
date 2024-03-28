import { EAlign } from '../../../enums/share.enum';
import {
  EJokeTheme,
  EQuoteProvider,
  EQuoteTheme,
  EQuoteType,
} from './quote.enum';

export interface IQuote {
  theme: EQuoteTheme;
  border: boolean;
  viewType: EQuoteType;
  quote: string;
  author: string;
  customQuote: boolean;
}

export interface IQuoteJokes {
  theme: EJokeTheme;
  bgColor: string;
  borderColor: string;
  qColor: string;
  aColor: string;
  textColor: string;
  codeColor: string;
  hideBorder: boolean;
  customTheme: boolean;
}
export interface IQuoteSetting {
  provider: EQuoteProvider;
  quote: IQuote;
  quoteJokes: IQuoteJokes;
  align: EAlign;
}

export const quoteSetting: IQuoteSetting = {
  provider: EQuoteProvider.QUOTE,
  quote: {
    theme: EQuoteTheme.TOKYONIGHT,
    viewType: EQuoteType.HORIZONTAL,
    border: true,
    customQuote: false,
    author: '',
    quote: '',
  },
  quoteJokes: {
    customTheme: false,
    theme: EJokeTheme.TOKYONIGHT,
    aColor: '#0284c7',
    bgColor: '#fcd34d',
    borderColor: '#10b981',
    codeColor: '#a855f7',
    qColor: '#f43f5e',
    textColor: '#3b82f6',
    hideBorder: true,
  },
  align: EAlign.CENTER,
};
