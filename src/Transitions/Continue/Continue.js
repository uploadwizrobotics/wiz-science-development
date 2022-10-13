import './Continue.css'
import React, { useState, useRef, useEffect }from "react";
import Confetti from 'react-confetti';
import ContinueButton from "../../Components/UI/Buttons/Continue/ContinueButton.js"
import { otherContext } from "../../Parser/ParsePage.js";
import { showMoreContext } from "../../Parser/ParsePage.js";
import { listContext } from "../../Parser/ParsePage.js";
import { indexContext } from "../../Parser/ParsePage.js";
import { nextContext } from "../../Parser/ParsePage.js";
import { endContext } from "../../Parser/ParsePage.js";
import Thermostat from '../../Components/Examples/Thermostat/Thermostat';

/* -------------------------------------- REQUIREMENTS: --------------------------------------- */
//   - must have more than 1 element in data array (why would you need continue down otherwise)
//   - length and limit must be whole numbers

const Continue = () => {

  const counter  = useRef(0);
  counter.current = counter.current + 1;

 /* -------------------------------- VARIABLES --------------------------------- */

 const [showMore, setShowMore] = React.useContext(showMoreContext);
 const [list, setList] = React.useContext(listContext);
 const [index, setIndex] = React.useContext(indexContext);
 const value = React.useContext(otherContext);
 const [next, setNext] = React.useContext(nextContext);
 const [end, setEnd] = React.useContext(endContext);
 const [therm, setTherm] = useState(false);

 var body = document.body,
 html = document.documentElement;
 var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
 var limit = 1;
 var length = 0;
 var data = [];

 value.map((state, idx) => {
   if (idx === 0) {
     limit = state;
    } else if (idx === 1) {
      length = state;
    } else {
      data = state;
    }
  });
  
  const type = list[0].props.component.Type;

  useEffect(() => {
    if (type !== 'Default' && type !== "Grid") {
        setShowMore(false); 
      } else if (next === true) {
        setShowMore(false); 
      }

      if (end) {
        setShowMore(false);
      }
    });


  /* ------------------------ LOAD MORE DATA ------------------------ */ 

  // returns list of data and load more button
  // renders updated array
  return (
    <div className='Continue'>
      { end && <div style={{ zIndex:"100", position: 'absolute' }}><Confetti height={height} /></div> }
      { list.map((component, idx) => {
        setEnd(idx === length - 1);
        return <div key={idx}>{component}</div>;
      }) }
      { showMore &&
        <ContinueButton />
      }
    </div>
  );

}    

export default Continue;