import './FB.css'
import React, { useState } from 'react'
import { showMoreContext } from "../../../Parser/ParsePage.js";
import { endContext } from "../../../Parser/ParsePage.js";
import scrollToDummy from '../../../Transitions/ScrollTo.js';
import LoadMore from '../../../Transitions/Continue/LoadMore';
import DisplayImage from '../../Image/Display/PrintImage';

const FB = (props) => {
    
    const header = props.header;
    const question = props.question;
    const answer = props.answer;
    const image = props.image;
    const alt = props.alt;
    const position = props.position;
    const width = props.width;
    const height = props.height;
    const zoom = props.zoom;
    var idx = -1;
    var results = [];
    var option = 0;
    const [showMore, setShowMore] = React.useContext(showMoreContext);
    const [end, setEnd] = React.useContext(endContext);
    const [loadMore, setLoadMore] = useState(false);
    const [count, setCount] = useState(0);
    
    const handleChoice = (event) => {
        if (event.target.className === 'blank') {
            option = event.target.id;
            if (document.getElementById("choice_cloud" + option).style.display === "block") {
                document.getElementById("choice_cloud" + option).style.display = "none";
            } else {
                document.getElementById("choice_cloud" + option).style.display = "block";
            }
        } else if (event.target.className === 'choice') {
            const name = event.target.getAttribute("name");
            const choice = event.target.id;
            if (document.getElementById(choice).className === "choice" && document.getElementById("choice_cloud" + option).contains(document.getElementById(choice))) {
                document.getElementById("text_container" + option).innerHTML = name;
                checkAnswer(option, name);
            } 
        }
    }

    const checkAnswer = (index, ans) => {
        if (answer[index] === ans) {
            results.push('success');
        }
        if (results.length === answer.length) {
            console.log("success");
            setLoadMore(true);
            scrollToDummy();
        }
    }

    if (loadMore === true && !end && count === 0) {
        const newCount = count + 1;
        setCount(newCount);
        LoadMore();
        setLoadMore(false);
        setShowMore(true);
    }

    return (
        <div className='FB'>
            <div class="content_container">
                {header && <h1>{header}</h1>}
                { image &&  <p><DisplayImage image={image} alt={alt} position={position} width={width} height={height} zoom={zoom} /></p>}
                {question.map(content => {
                    if (Array.isArray(content)) {
                        idx = idx + 1;
                        return ( 
                            <span class="blank" id={idx} onClick={handleChoice}>
                                <span class="text_container" id={"text_container" + idx} >&nbsp;</span>
                                <span class="choice_cloud" id={"choice_cloud" + idx}>
                                {content.map((choice, ind) => (
                                    <span class="choice" id={choice + ind} name={choice}>{choice}</span>
                                ))}
                                </span>
                            </span>
                        );
                    } else {
                        return <span className='contentText' dangerouslySetInnerHTML={{ __html: content }} />;
                    }
                })}
            </div>
        </div>
    );
}

export default FB;