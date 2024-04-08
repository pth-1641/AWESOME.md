import { EAlign } from '../enums/share.enum';

export const alignImageStyle = (align: EAlign) => {
  switch (align) {
    case EAlign.CENTER:
      return { margin: 'auto' };
    case EAlign.RIGHT:
      return { marginLeft: 'auto' };
    case EAlign.LEFT:
    default:
      return { marginRight: 'auto' };
  }
};
