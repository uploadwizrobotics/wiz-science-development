import { Link } from 'react-scroll' // library with 283373 weekly downloads
import scrollToDummy from '../../../../Transitions/ScrollTo'
import '../DefaultButton.css'
import LoadMore from '../../../../Transitions/Continue/LoadMore';
import React, { useState } from 'react';

const ContinueButton = () => {

    const [loadMore, setLoadMore] = useState(false);

    function handleClick() {
        setLoadMore(true);
        scrollToDummy();
    }

    if (loadMore === true) {
        LoadMore();
        setLoadMore(false);
    }

    return (
        <div className='continue' id='continue'>
            <a href="#" className="cta">
                <span>
                    <Link onClick={handleClick}>
                        Continue
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

export default ContinueButton;