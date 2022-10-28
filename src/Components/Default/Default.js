import './Default.css';
import React, { useState, useRef, useEffect }from "react";
import { slice, concat } from 'lodash';
import { nextContext } from "../../Parser/ParsePage.js";
import Next from "../../Transitions/Next/Next";
import Cards from "../../Cards/Cards.js";
import DisplayImage from '../Image/Display/PrintImage.js';
import Thermometer from "../../Components/Examples/Thermometer/Thermometer";
import NL from "../NumberLine/NL.js";
import Note from "../Notes/Note.js";
import Math from '../../Formatting/Math';
import PlayVideo from '../../Components/Video/PlayVideo';
import ClickMe from '../UI/Buttons/ClickMe/ClickMe';
export const otherTextContext = React.createContext();
export const showMoreTextContext = React.createContext();
export const listTextContext = React.createContext();
export const indexTextContext = React.createContext();


const Default = (props) => {

    const counter  = useRef(0);
    counter.current = counter.current + 1;

    const header = props.header;
    const text = props.text;
    const length = text ? text.length : 0;
    const image = props.image;
    const alt = props.alt;
    const position = props.position;
    const width = props.width;
    const height = props.height;
    const zoom = props.zoom;
    const transition = props.transition;
    const intro = props.intro;
    var type = 'default';
    const [next, setNext] = React.useContext(nextContext);
    const [showMore, setShowMore] = React.useContext(nextContext);

    // var to check if there is any data left to display
    const [showMoreText, setShowMoreText] = useState(true);

    // initial list of data to display (cuts off array at limit # of elements)
    const [textList, setTextList] = useState(slice(text, 0, 1));

    // var to manage index (initial index is limit)
    const [textIndex, setTextIndex] = useState(1);

    const TextParser = () => {
        if (Array.isArray(text)) {
            if (transition === 'Next') {
                // setNext(true);
                type = 'next';
            } 
        } else if (typeof text === 'object') {
            type = 'example';
        } else {
            type = 'default';
        }
    }
    useEffect(() => {
        if (transition === 'Next' && counter.current === 1) {
            setNext(true);
        }
    })

    const TextType = () => {
        TextParser();
        if (type === 'next') {
            return (
                <otherTextContext.Provider value={[1, length, text]}>
                    <showMoreTextContext.Provider value={[showMoreText, setShowMoreText]}>
                        <listTextContext.Provider value={[textList, setTextList]}>
                            <indexTextContext.Provider value={[textIndex, setTextIndex]}>
                                <div className = { intro ? 'intro' : 'nextgroup' }> 
                                    <Next />
                                </div>
                                <div className="dummy"></div>
                            </indexTextContext.Provider>
                        </listTextContext.Provider>
                    </showMoreTextContext.Provider>
                </otherTextContext.Provider>
            );
        }
        if (type === 'default') {
            return <div dangerouslySetInnerHTML={{ __html: text }} />;
        }
        if (type === 'example') {
            if (text.Example === 'Thermometer') {
                return (
                    <React.Fragment>
                        <Thermometer />
                        <br /><p><div dangerouslySetInnerHTML={{ __html: text.Text }} /></p>
                    </React.Fragment>
                );
            } else if (text.Example === 'Number Line') {
                const max = text.Max;
                const min = text.Min;
                const step = text.Step;
                const init = text.Initial;
                const data = text.Data;
                const useType = text.UseType;
                return (
                    <React.Fragment>
                        <NL max={max} min={min} step={step} init={init} useType={useType}/>
                        <br />
                        <p>{(data) && (data.constructor === ({}).constructor) ? <Math inline={data.Content} /> : <div dangerouslySetInnerHTML={{ __html: data }} />}</p>
                    </React.Fragment>
                );
            } else if (text.Example === 'Note') {
                return <Note text={text.Content} image={text.Image}/>;
            } else if (text.Example === 'Math') {
                const content = text.Content;
                return <div className ='numbers'><Math inline={content} /></div>;
            } else if (text.Example === 'List') {
                const content = text.Content;
                return <Cards text={[content]}/>;
            } else if (text.Example === 'Video') {
                const content = text.Content;
                const button = text.Button;
                return <PlayVideo video={[content]} button={button}/>;
            } else if (text.Example === 'Button') {
                return <ClickMe />;
            }
        }
    }

    return (
        <div className = 'default'>
            {header && <h1>{header}</h1>}
                { (text && (position === 'above' || position === null)) && <TextType /> }
                { (image) &&  <DisplayImage image={image} alt={alt} position={position} width={width} height={height} zoom={zoom} />}
                { (text && (position === 'below')) && <TextType />} 
        </div>
    );

}

export default Default;