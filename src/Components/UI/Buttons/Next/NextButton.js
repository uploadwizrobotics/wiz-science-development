import { Link } from 'react-scroll' // library with 283373 weekly downloads
import '../DefaultButton.css'
import NextLoadMore from '../../../../Transitions/Next/NextLoadMore';
import React, { useEffect, useState, useRef } from 'react';
import scrollToDummy from '../../../../Transitions/ScrollTo';

const NextButton = () => {

    const [loadMore, setLoadMore] = useState(false);

    function handleClick() {
        setLoadMore(true);
        scrollToDummy();
    }

    useEffect(() => {
        if (loadMore === true) {
            setLoadMore(false);
        }
    });
    
    if (loadMore === true) {
        NextLoadMore();
    }

    return (
        <div className="next">
            <a href="#" className="cta">
                <span>
                    <Link onClick={handleClick}>
                        Next
                    </Link>
                </span>
                <svg 
                    width="13px" 
                    height="10px" 
                    viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </a>
        </div>
    );
}

export default NextButton;