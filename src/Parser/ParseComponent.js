import IsValidUrl from '../Components/Image/Display/isUrl.js'
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
import GridLayout from "../Components/GridLayout/GridLayout"

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
    var Columns = null;
    var columnDimensions = [];
    
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
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Index') {
                    Index = component[key];
                } else if (key === 'Question') {
                    Question = component[key];
                } else if (key === 'Options') {
                    Options = component[key];
                    Length = Options.length;
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'Image') {
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
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Question') {
                    Question = component[key];
                } else if (key === 'Placeholder') {
                    Placeholder = component[key];
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'Image') {
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
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Intro') {
                    Intro = component[key];
                } else if (key === 'Text') {
                    Transition = component[key].transition;
                    Text = component[key].text;
                } else if (key === 'Image') {
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
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Data') {
                    Data = component[key];
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'loadMore') {
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Horizontal DND') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Data') {
                    Data = component[key];
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'loadMore') {
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Number Line') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Text') {
                    Text = component[key];
                } else if (key === 'Position') {
                    Position = component[key];
                } else if (key === 'Max') {
                    Max = component[key];
                } else if (key === 'Min') {
                    Min = component[key];
                } else if (key === 'Step') {
                    Step = component[key];
                } else if (key === 'Initial') {
                    Initial = component[key];
                }
            }
        })
    } else if (type === 'Fill in the Blank') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Question') {
                    Question = component[key];
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'Image') {
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
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Options') {
                    Options = component[key];
                } 
            }
        })
    } else if (type === 'Farm') {
        Object.keys(component).map(key => {   
            if (component[key]) { 
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Data') {
                    Data = component[key];
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'loadMore') {
                    loadMore = component[key];
                }
            }
        })
    } else if (type === 'Rocket') {
        Object.keys(component).map(key => {   
            if (component[key]) {
                if (key === 'Header') {
                    Header = component[key];
                } else if (key === 'Question') {
                    Question = component[key];
                } else if (key === 'Placeholder') {
                    Placeholder = component[key];
                } else if (key === 'Answer') {
                    Answer = component[key];
                } else if (key === 'Image') {
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
    }   else if (type === "Grid") {
        Object.keys(component).map(key => {
            if (component[key]) {
                if (key === 'Header') { // String
                    Header = component[key];
                } else if (key === 'Text') { // Bool
                    Text = component[key].text;
                    Transition = component[key].transition;
                } else if (key === "Columns"){
                    Columns = component[key]
                } else if (key === "Image") {
                    Image = Object.values(component[key]);
                    ImageURL = Image[0];
                    Alt = Image[1];
                    Position = Image[2];
                    Width = Image[3]
                    Height = Image[4]
                    Zoom = Image[5];
                } else if (key === "columnDimensions"){
                    columnDimensions = component[key]
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
            : (type === 'Feed') ? <Feed header={Header} options={Options} />
            : (type === 'Farm') ? <Farm header={Header} data={Data} answer={Answer} loadMore={loadMore} />
            : (type === 'Rocket') ? <Rocket header={Header} question={Question} placeholder={Placeholder} answer={Answer} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} loadMore={loadMore} />
            : (type === "Grid") ? <GridLayout text = {Text} header = {Header} columns = {Columns} transition = {Transition} image = {ImageURL} alt = {Alt} width = {Width} height = {Height} zoom = {Zoom} columnDimensions = {columnDimensions}/>            
            : <Default header={Header} text={Text} transition={Transition} image={ImageURL} alt={Alt} position={Position} width={Width} height={Height} zoom={Zoom} />
            }
        </div>
      );
  }
  
  export default ParseComponent;