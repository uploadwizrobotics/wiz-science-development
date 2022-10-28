import { Link } from 'react-scroll' // library with 283373 weekly downloads
import { indexContext } from "../../../../Parser/ParsePage.js";
import { otherContext } from "../../../../Parser/ParsePage.js";
import scrollToDummy from '../../../../Transitions/ScrollTo'
import './RetroButton.css'
import LoadMore from '../../../../Transitions/Continue/LoadMore';
import React, { useState } from 'react';

const RetroButton = (props) => {

    var end = false;

    const [index, setIndex] = React.useContext(indexContext);
    const value = React.useContext(otherContext);

    value.map((state, idx) => {
        if (idx === 1) {
            const length = state;
            if (index === length) {
                end = true;
            }
        }
    });

    const HandleSubmit = props.handleSubmit;

    const [result, setResult] = useState(null);

    const handleClick = () => {
        setResult(HandleSubmit());
    }

    if (result === 'Success' && !end) {
        LoadMore();
        scrollToDummy();
        setResult(null);
    }

    return (
        <div className='wrapper'>
            <div role='button' className='retro-btn'>
                <Link 
                    className='btn' 
                    onClick={handleClick}
                > 
                    <span className='btn-inner'>
                        <span className='content-wrapper'>
                            <span className='btn-content'>
                                <span className='btn-content-inner' label='Submit'>
                                </span>
                            </span>
                        </span>
                    </span>
                </Link>
            </div>
        </div>
    );
  };


export default RetroButton;