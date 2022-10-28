import './Alert.css';
import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery';

const Alert = (props) => {

    const result = props.result;
    
    if (result) {
        handleSuccess();
    } 
    function handleSuccess() {
        $('.alert').addClass("show");
        $('.alert').removeClass("hide");
        $('.alert').addClass("showAlert");
        setTimeout(function(){
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
        },2000);
    }
    function handleClose() {
        $('.alert').removeClass("show");
        $('.alert').addClass("hide");
    }
    
    return (
        <div className='Alert'>
            <div className = {result}>
                <div class="alert hide">
                <span class="fas fa-exclamation-circle"><FontAwesomeIcon icon={result === 'success' ? faCheck : faXmark} /></span>
                <span class="msg">{result === 'success' ? 'Success: You did it! Keep it up!' : 'Not quite, try again!'}</span>
                </div>
            </div>
        </div>
    );
}

export default Alert;