import './QuestionTemplate.css'
import PrintImage from '../../Image/Display/PrintImage'
import Inspect from '../../Image/Inspect/Inspect.js'

// problem to be given
const Question = (props) => {

  const question = props.question;
  const image = props.image;
  const alt = props.alt;
  const position = props.position;
  const zoom = props.zoom;
  const width = props.width;
  const type = props.type;

  const DisplayImage = () => {
    if (image !== null) {
      if (zoom) {
        return(
          <Inspect image={image} imageLarge={zoom} />
        );
      } else {
        return (
          <PrintImage image={image} alt={alt} width={width} type={type} />
        );
      }
    }
  }
  
  return (
    <div className='question'>
      { (position === "below") && <DisplayImage /> }
      <p>
      <div dangerouslySetInnerHTML={{ __html: question }} />
      </p>
      { (position === "above") && <DisplayImage /> }
    </div>
  );
};

export default Question;