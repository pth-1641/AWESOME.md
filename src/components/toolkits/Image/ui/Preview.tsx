import { useSectionProps } from '../../../../hooks';
import { IImageSetting } from '../default';
import { alignImageStyle } from '../../../../utils';
import { useEffect, useState } from 'preact/hooks';

const UNAVAIABLE_IMAGE =
  'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

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
      {...props}
      style={alignImageStyle(props.align)}
      onError={() => setImageUrl(UNAVAIABLE_IMAGE)}
    />
  );
};

export default Preview;
