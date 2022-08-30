import './ClickMe.css'
import {useEffect, useState} from 'react';

const ClickMe = () => {

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(false);
    }

    return (
        <div className='clickMe'>
            <div class="main-content">
                <div class="item button-jittery">{show && <button onClick={handleClick}>Click Me!</button> }
                </div>
            </div> 
        </div>
    );
}

export default ClickMe;