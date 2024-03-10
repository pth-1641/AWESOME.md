import { EAlign } from '../../../enums/share.enum';
import { EQuoteTheme, EQuoteType } from './quote.enum';

export interface IQuoteSetting {
  theme: EQuoteTheme;
  border: boolean;
  viewType: EQuoteType;
  quote: string;
  author: string;
  customQuote: boolean;
  align: EAlign;
}

export const quoteSetting: IQuoteSetting = {
  theme: EQuoteTheme.TOKYONIGHT,
  viewType: EQuoteType.HORIZONTAL,
  border: true,
  customQuote: false,
  author: '',
  quote: '',
  align: EAlign.CENTER,
};
