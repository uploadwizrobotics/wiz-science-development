import React, { useState, useRef }from "react";
import Default from "../../Components/Default/Default.js";
import NextButton from "../../Components/UI/Buttons/Next/NextButton.js"
import '../Continue/Continue.css'
import { otherTextContext } from "../../Components/Default/Default.js";
import { showMoreTextContext } from "../../Components/Default/Default.js";
import { listTextContext } from "../../Components/Default/Default.js";
import { indexTextContext } from "../../Components/Default/Default.js";

/* -------------------------------------- REQUIREMENTS: --------------------------------------- */
//   - must have more than 1 element in data array (why would you need continue down otherwise)
//   - length and limit must be whole numbers

const Next = () => {

 /* -------------------------------- VARIABLES --------------------------------- */

  const [showMoreText, setShowMoreText] = React.useContext(showMoreTextContext);
  const [textList, setTextList] = React.useContext(listTextContext);
  const [textIndex, setTextIndex] = React.useContext(indexTextContext);
  const value = React.useContext(otherTextContext);

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
    

  /* ------------------------ LOAD MORE DATA ------------------------ */ 

  // returns list of data and load more button
  // renders updated array
  return (
    <React.Fragment>
        {textList.map((component, idx) => {
            return <Default key={idx} header={null} text={component} transition={null} image={null} alt={null} position={null} zoom={null} />
        })}
        {showMoreText &&
            <NextButton />
        }
    </React.Fragment>
  );
}    

// export to index.js
export default Next;