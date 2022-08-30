// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance 

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {
    const Intro = {
        Type: 'Default',
        Header: 'Overview of Ecology',
        Text: {
            transition: 'Next',
            text: [
                `<p><i>In this lesson, students will have a general overview of definitions regarding ecology.</i></p>`,

                `<p><b>Why study ecology?</b></p>`,

                `<p>Ecologists want to understand the interconnected relationships when organisms change 
                and what happens when organisms interact with their unique environments.</p>`,
            ]
        },

        // Image: {
        //     url: "Numbers",
        //     alt: 'numbers',
        //     position: 'below',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }

    const Lesson2 = {
        Type: 'Default',
        Header: 'Overview of Ecology',
        Text: {
            text:[
                { // cards
                    Example: 'List',
                    Content: [
                        {   front: {
                                Example: 'Math goes here or null', // any text is formatted using Mathjax
                                Content: "Content at front of card goes here"
                            }, 
                            back: {
                                Example: 'Math goes here or null', // any text is formatted using Mathjax
                                Content: "Content at back of card goes here"
                            },
                        },
                    ]
                }
            ]

        }
    }
    
    const Ending = {
        Type: 'Default',
        Header: 'Awesome job young scientist. You have finished this lesson!',
        Text: null,
        Audio: null
    }
}

const ComponentArray = [Intro, Lesson1, Lesson2, Ending]; // Insert component names here in the order they should be displayed

return ( 
   <MakePage componentArray={ComponentArray} /> 
);

export default MakeComponent;