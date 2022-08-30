import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';

const Inspect = (props) => {
  const image = props.image;
  const imageLarge = props.imageLarge;

  return (
    <InnerImageZoom src={image} zoomSrc={imageLarge} />
    );
}


export default Inspect;
