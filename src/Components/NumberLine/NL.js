import "./NL.css";
import React, { useState, useEffect } from "react";
const NL = (props) => {

    const text = props.text;

    const position = props.position;

    const max = props.max;

    const min = props.min;

    const step = props.step;

    const init = props.init;

    const numbers = []

    if (max - step < 5) {
        for (var i = min; i <= max; i += step) {
            numbers.push(Math.round((i + Number.EPSILON) * 100) / 100);
        }
    } else {
        for (var i = min; i <= max; i++) {
            numbers.push(i);
        }
    }

    const [value, setValue] = useState(init);

    const handleValue = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className='NL'>
            { (text && (position === 'above' || position === null)) && <p>{text}</p> }
            <div className="value">{value}</div>
            <input type="range" step={step} min={min} max={max} value={value} onChange={handleValue}/>
            <div className="ticks">
                { numbers.map(number => (
                    <p>{number}</p>
                ))}
            </div>
            { (text && (position === 'below')) && <p>{text}</p> }
        </div>
    );
}   

export default NL;