import './MC.css'
import '../../UI/Buttons/DefaultButton.css'
import React, { useState } from "react";
import Question from "../Question/QuestionTemplate.js"
import Box from "../../UI/Box/Box.js"
import Alert from '../../Alert/Alert';
import { showMoreContext } from "../../../Parser/ParsePage.js";
import { endContext } from "../../../Parser/ParsePage.js";
import { scrollSuccess } from '../../../Transitions/ScrollTo'
import LoadMore from "../../../Transitions/Continue/LoadMore.js";

function Form(props) {

  const header = props.header;
  const question = props.question;
  const idx = props.index;
  const options = props.options.map((option, i) => ({id: i, title: option}));
  const length = props.length;
  const answer = props.answer;
  const image = props.image;
  const alt = props.alt;
  const position = props.position;
  const zoom = props.zoom;
  const width = props.width;
  const pagetype = props.pagetype;

  // create an array of states equal to the number of checkboxes + initialize to false
  const [checked, setChecked] = useState(new Array(length).fill(false));
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showMore, setShowMore] = React.useContext(showMoreContext);
  const [end, setEnd] = React.useContext(endContext);
  const [loadMore, setLoadMore] = useState(false);

  // update checkbox status
  const handleChange = (position) => {
    const updatedChecked = checked.map((item, index) => index === position ? !item: item);
    setSubmitted(false);
    setResult(null);
    setChecked(updatedChecked);
  };

  // execute once form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.answer.value == answer) {
      setResult('success');
      setLoadMore(true);
      scrollSuccess();
    } else {
      setResult('tryAgain');
    }
  };

  const handleClick = () => {
    setSubmitted(true);
  }
  
  if (loadMore === true && !end && count === 0) {
      const newCount = count + 1;
      setCount(newCount);
      LoadMore();
      setLoadMore(false);
      setShowMore(true);
  }

  return (
    <div className='MC'>
      { submitted && <Alert result={result} />}
      <form onSubmit={handleSubmit}>
        <Box classes="outer_box">
          { header && <h1>{header}</h1> }
          { question && <Question question={question} image={image} alt={alt} position={position} zoom={zoom} width={width} type='MC' /> }
          <br></br>
            <Box classes="input_box">
              {options.map((option) => (
                <div key={option.id} className="option">
                  <input
                  type="radio"
                  className="radio"
                  name="answer"
                  id={"radio-" + option.id + idx}
                  value={option.title}
                  isChecked={checked}
                  onChange={handleChange}
                  />
                  <label className='mcLabel' for={"radio-" + option.id + idx}>
                    <div className="name">
                      {option.title}
                    </div>
                  </label>
                </div>
              ))}
            </Box>
          { (pagetype === 'Lesson') && 
            <button href="#" className="cta" onClick={handleClick}>
              <span>
                  Submit
              </span>
              <svg 
                  width="13px" 
                  height="10px" 
                  viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          }
        </Box>
      </form>
    </div>
  );
  
}

export default Form;
