// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {

    const Intro = {
        Type: 'Default',
        Header: 'Symbiosis',
        Text: {
            transition: null,
            text: [
                `<p><i>In this lesson, students will:</i></p>
                <p>Investigate and explain how relationships amongst organisms can be beneficial, harmful, or neither.</p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Symbiosis/symbiosis-1.png",
            alt: 'ant',
            position: 'below',
            width: 350,
            height: 350,
            zoom: null
        }, 
        Audio: null
    }

    const Lesson1 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: "Next",
            text: [
                `<p><h2>Some organisms are entirely dependent on another species for their survival.</h2></p>`,

                `Changes in one population will directly cause a change in the other.`,

                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "<p>Mutalism</p>",
                            },
                            back: {
                                Example: null,
                                Content: "Mutually beneficial interactions",
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Parasitism"
                            },
                            back: {
                                Example: null,
                                Content: "<p>Parasite benefits and the host is harmed, e.g when a tick sucks blood out of a dog</p>"
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Commensalism",
                            },
                            back: {
                                Example: null,
                                Content: "<p>Beneficial for one organism, but does not affect the other in a positive or negative way</p>"
                            }
                        },
                    ]
                }
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Symbiosis/symbiosis-2.png",
            alt: 'symbiosis',
            position: 'below',
            width: 200,
            height: 200,
            zoom: null
        }, 
        Audio: null
    }

    const Lesson2 = {
        Type: 'Short Answer',
        Header: 'Determine what type of relationship this is:',
        Question: 'Ants living in a tree may protect the tree from an organism that would like to make the tree its next meal, and at the same time, the tree is a safe home for the ants. Pay attention to capitalization!',
        Placeholder: 'Input answer here',
        Answer: 'Mutualism',
        
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Symbiosis/symbiosis-3.png",
            alt: 'process',
            position: 'below',
            width: 150,
            height: 150,
            zoom: null
        },
        Audio: null
    };

    const Ending = {
        Type: 'Default',
        Header: 'All done. Ready for some more?',
        Text: null,
        Audio: null
    }

const ComponentArray = [Intro, Lesson1, Lesson2, Ending]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;