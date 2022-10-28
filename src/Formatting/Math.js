import './Math.css'
import React from 'react';
// import react-mathjax
import MathJax from 'react-mathjax';

const Math = (props) => {
  const inlineFormula = props.inline;

  return (
    <div className="Math">
    <MathJax.Provider>
      <MathJax.Node inline formula={inlineFormula} />
    </MathJax.Provider>
    </div>
  );
};

export default Math;