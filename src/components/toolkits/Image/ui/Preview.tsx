import { useSectionProps } from '../../../../hooks';
import { IImageSetting } from '../default';
import { alignImageStyle } from '../../../../utils';
import { useEffect, useState } from 'preact/hooks';
import { UNAVAIABLE_IMAGE } from '../../../../constants';

const Preview = ({ id }: { id: string }) => {
  const props = useSectionProps<IImageSetting>(id);
  if (!props) return null;

  const [imageUrl, setImageUrl] = useState<string>(props.url);

  useEffect(() => {
    setImageUrl(props.url);
  }, [props.url]);

  return (
    <img
      src={imageUrl}
      width={props.width}
      style={alignImageStyle(props.align)}
      onError={() => setImageUrl(UNAVAIABLE_IMAGE)}
    />
  );
};

export default Preview;
