import SA from '../Components/Input/ShortAnswer/SA.js'
import MC from '../Components/Input/MultipleChoice/MC.js'
import Default from '../Components/Default/Default.js'
import Vert from '../Components/DND/Sort/VerticalList/Vert.js'
import Horiz from '../Components/DND/Sort/HorizontalList/Horiz.js'
import NL from '../Components/NumberLine/NL.js'
import React from 'react'
import FB from '../Components/Input/FillBlank/FB.js'
import Feed from '../Components/Examples/Feed/Feed.js'
import Farm from '../Components/Examples/Farm/Farm.js'
import Rocket from '../Components/Examples/Rocket/Rocket.js'

/* ------------------------------------- PARSE DATA ------------------------------------- */

const ParseComponent = (props) => {

    /* --------- VARIABLES --------- */

    const component = props.component;
    const pagetype = props.pagetype;

    // type of element
    var type = null;
    var Header = null;
    var Question = null;
    var Index = null;
    var Options = null;
    var Length = null;
    var Answer = null;
    var Image = [];
    var ImageURL = null;
    var Alt = null;
    var Position = null;
    var Zoom = null;
    var Placeholder = null;
    var Text = null;
    var Data = [];
    var loadMore = null;
    var Transition = null;
    var Width = 0;
    var Height = 0;
    var Max = 0;
    var Min = 0;
    var Step = 0;
    var Initial = 0;
    var Options = null;
    var Intro = null;
    
    Object.keys(component).map(key => {   
        if (key === 'Type') {
                type = component[key];
            }
        }
    );

    /* -------------------------- DETERMINE TYPE OF ELEMENT -------------------------- */

    if (type === 'Multiple Choice') {
        Object.keys(component).map(key => {   
            if (component[key]) {  
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Index') { // int
                    Index = component[key];
                } else if (key === 'Question') {
                    Question = component[key]; // string
                } else if (key === 'Options') {
                    Options = component[key]; // string array
                    Length = Options.length;
                } else if (key === 'Answer') {
                    Answer = component[key]; // string
                } else if (key === 'Image') { // image
                    Image = Object.values(component[key]);
                    ImageURL = Image[0];
                    Alt = Image[1];
                    Position = Image[2];
                    Width = Image[3]
                    Zoom = Image[4];
                } else if (key === 'loadMore') {
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Short Answer') {
        Object.keys(component).map(key => {   
            if (component[key]) {
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Question') { // string
                    Question = component[key];
                } else if (key === 'Placeholder') { // string
                    Placeholder = component[key];
                } else if (key === 'Answer') { // string
                    Answer = component[key];
                } else if (key === 'Image') { // image
                    Image = Object.values(component[key]);
                    ImageURL = Image[0];
                    Alt = Image[1];
                    Position = Image[2];
                    Width = Image[3]
                    Height = Image[4]
                    Zoom = Image[5];
                } else if (key === 'loadMore') {
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Default') {
        Object.keys(component).map(key => { 
            if (component[key]) {   
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Intro') { // boolean
                    Intro = component[key];
                } else if (key === 'Text') { // string array (translated in Next.js) used text={t(component)} on line 45
                    Transition = component[key].transition;
                    Text = component[key].text;
                } else if (key === 'Image') { // Img
                    Image = Object.values(component[key]);
                    ImageURL = Image[0];
                    Alt = Image[1];
                    Position = Image[2];
                    Width = Image[3]
                    Height = Image[4]
                    Zoom = Image[5];
                }
            }
        })
    } else if (type === 'Vertical DND') {
        Object.keys(component).map(key => {   
            if (component[key]) {   
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Data') { // array
                    Data = component[key];
                } else if (key === 'Answer') { // array
                    Answer = component[key];
                } else if (key === 'loadMore') { // ???
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Horizontal DND') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Data') { // array
                    Data = component[key];
                } else if (key === 'Answer') { // array
                    Answer = component[key];
                } else if (key === 'loadMore') { // ???
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Number Line') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Text') {  // ???
                    Text = component[key];
                } else if (key === 'Position') { // ???
                    Position = component[key];
                } else if (key === 'Max') { // int
                    Max = component[key];
                } else if (key === 'Min') {  // int
                    Min = component[key];
                } else if (key === 'Step') {  // int
                    Step = component[key];
                } else if (key === 'Initial') {  //int
                    Initial = component[key];
                }
            }
        })
    } else if (type === 'Fill in the Blank') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Question') { // array
                    Question = component[key];
                } else if (key === 'Answer') { // array
                    Answer = component[key];
                } else if (key === 'Image') { // image
                    Image = Object.values(component[key]);
                    ImageURL = Image[0];
                    Alt = Image[1];
                    Position = Image[2];
                    Width = Image[3]
                    Height = Image[4]
                    Zoom = Image[5];
                } 
            }
        })
    } else if (type === 'Feed') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Options') { // array
                    Options = component[key];
                } 
            }
        })
    } else if (type === 'Farm') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Data') { // array?
                    Data = component[key];
                } else if (key === 'Answer') { // array?
                    Answer = component[key];
                } else if (key === 'loadMore') { // ???
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Rocket') {
        Object.keys(component).map(key => {   
            if (component[key]) {
                if (key === 'Header') { // string
                    Header = component[key];
                } else if (key === 'Question') { // string
                    Question = component[key];
                } else if (key === 'Placeholder') { // string
                    Placeholder = component[key];
                } else if (key === 'Answer') { // string
                    Answer = component[key];
                } else if (key === 'Image') { // image
                    Image = Object.values(component[key]);
                    ImageURL = Image[0];
                    Alt = Image[1];
                    Position = Image[2];
                    Width = Image[3]
                    Height = Image[4]
                    Zoom = Image[5];
                } else if (key === 'loadMore') {
                    loadMore = component[key];
                }
            }
        })
    }
    
    /* ------------------- PRINT ACCORDING TO TYPE ------------------- */
    // print as Media as default
    return (
        <div className='Element'>
            { (type === 'Multiple Choice') ? <MC header={Header} question={Question} options={Options} answer={Answer} length={Length} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} loadMore={loadMore} index={Index} pagetype={pagetype} />
            : (type === 'Short Answer') ? <SA header={Header} question={Question} placeholder={Placeholder} answer={Answer} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} loadMore={loadMore} pagetype={pagetype} />
            : (type === 'Default') ? <Default header={Header} text={Text} transition={Transition} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} intro={Intro}/>
            : (type === 'Vertical DND') ? <Vert header={Header} data={Data} answer={Answer} loadMore={loadMore} pagetype={pagetype} />
            : (type === 'Horizontal DND') ? <Horiz header={Header} data={Data} answer={Answer} loadMore={loadMore} pagetype={pagetype} />
            : (type === 'Number Line') ? <NL text={Text} position={Position} max={Max} min={Min} step={Step} init={Initial} />
            : (type === 'Fill in the Blank') ? <FB header={Header} question={Question} answer={Answer} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} />
            : (type === 'Feed') ? <Feed header={Header} options={Options} pagetype={pagetype} />
            : (type === 'Farm') ? <Farm header={Header} data={Data} answer={Answer} loadMore={loadMore} />
            : (type === 'Rocket') ? <Rocket header={Header} question={Question} placeholder={Placeholder} answer={Answer} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} loadMore={loadMore} pagetype={pagetype} />
            : <Default header={Header} text={Text} transition={Transition} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} />
            }
        </div>
      );
  }
  
  export default ParseComponent;