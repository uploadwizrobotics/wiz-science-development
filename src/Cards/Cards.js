import './Cards.css'
import React, { useState, useRef, useEffect }from "react";
import Math from '../Formatting/Math';
import { chunk } from 'lodash';

const Cards = (props) => {

    const text = props.text[0];
    const length = text.length;
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (active === false) {
            setActive(true);
        } else {
            setActive(false);
        }
    }
    
    const arr = chunk(text, 3);

    return (
        <div className="Cards">
            {length === 1 ? 
            <ul className={ active ? "cards-split-delay transition" : "cards-split-delay" }>
                <li className={ "card card-" + 4 }>
                <div className="content">
                    <div className="front">
                        <h1>{text[0].front.Example === 'Math' ? <Math inline={text[0].front.Content} /> : <div dangerouslySetInnerHTML={{ __html: text[0].front.Content }} />}</h1>
                    </div>
                    <div className="back">
                        <h1>{text[0].back.Example === 'Math' ? <Math inline={text[0].back.Content} /> : <div dangerouslySetInnerHTML={{ __html: text[0].back.Content }} />}</h1>
                    </div>
                </div>
                </li>
            </ul>
        : arr.map(cards => 
            <ul className={ active ? "cards-split-delay transition" : "cards-split-delay" }>
                { cards.map((object, idx) => (
                    <li className={ "card card-" + (idx + 1) } onClick={handleClick}>
                    <div className="content">
                        <div className="front">
                            <h1>{object.front.Example === 'Math' ? <Math inline={object.front.Content} /> : <div dangerouslySetInnerHTML={{ __html: object.front.Content }} />}</h1>
                        </div>
                        <div className="back">
                            <h1>{object.back.Example === 'Math' ? <Math inline={object.back.Content} /> : <div dangerouslySetInnerHTML={{ __html: object.back.Content }} />}</h1>
                        </div>
                    </div>
                </li>
                )) }
            </ul>
            )}
        </div>
    );
}

export default Cards;
