import React, { useState } from 'react';
import { Link } from 'react-scroll'
import '../DefaultButton.css'

const SubmitButton = () => {

    return (
        <div className='sub'>
            <button href="#" className="cta">
                <span>
                <Link >
                    Submit
                </Link>
                </span>
                <svg 
                    width="13px" 
                    height="10px" 
                    viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </div>
    );
}

export default SubmitButton;