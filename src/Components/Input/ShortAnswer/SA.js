import React, { useState, useRef } from "react";
import Question from "../Question/QuestionTemplate.js"
import Box from "../../UI/Box/Box.js"
import { showMoreContext } from "../../../Parser/ParsePage.js";
import { endContext } from "../../../Parser/ParsePage.js";
import { scrollSuccess } from '../../../Transitions/ScrollTo'
import Alert from '../../Alert/Alert';
import LoadMore from "../../../Transitions/Continue/LoadMore.js";
import './SA.css'

const SA = (props) => {

  

  const counter  = useRef(0);
  counter.current = counter.current + 1;

  const header = props.header;
  const question = props.question;
  const answer = props.answer;
  const placeholder = props.placeholder;
  const image = props.image;
  const alt = props.alt;
  const position = props.position;
  const zoom = props.zoom;
  const width = props.width;
  const pagetype = props.pagetype;
  console.log('SA: ',pagetype);

  // initialize input value to empty string
  const [inputs, setInputs] = useState({});
  // initialize correct state to false (for confetti)
  const [correct, setCorrect] = useState(false);
  const [showMore, setShowMore] = React.useContext(showMoreContext);
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [end, setEnd] = React.useContext(endContext);
  const [loadMore, setLoadMore] = useState(false);
  const [count, setCount] = useState(0);

  // update inputs
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
    setSubmitted(false);
    setResult(null);
  };

  // execute once form is submitted
  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.val1.value === answer) {
      // execute when correct
      console.log("correct");
      setResult('success');
      setCorrect(true);
      setLoadMore(true);
      scrollSuccess();
    } else {
      // execute when incorrect
      console.log("incorrect");
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
    <div className='SA'>
      { submitted && <Alert result={result} />}
      <form onSubmit={handleSubmit}>
        <Box classes="outer_box">
        <h1>{header}</h1>
          <Question question={question} image={image} alt={alt} position={position} zoom={zoom} width={width} type='SA' />
          <br></br>
          { 
          <React.Fragment>
            {(pagetype === 'Lesson') && 
            <><Box classes="input_box">
                  <input
                    type="text"
                    name="val1"
                    value={inputs.val1 || ""}
                    className="input"
                    maxlength="42"
                    placeholder={placeholder}
                    onChange={handleChange} />
                </Box><button href="#" className="cta" onClick={handleClick}>
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
                  </button></>
          }
          
        </React.Fragment>
        }
        </Box>
      </form>
    </div>
  );
  
}

export default SA;
