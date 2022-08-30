// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance 
import 'katex/dist/katex.min.css';
import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {

    const Intro = {
        Type: 'Default',
        Header: 'Energy Flow Through Ecosystems',
        Text: {
            transition: null,
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>
                <p>Compare and contrast the processes of cellular respiration and photosynthesis, and how explain how their 
                complementary relationship contributes to the dynamic equilibrium of ecosystems.</p>
                <p><br><b>Learning Expectation: B2.3</b></p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Energy+Flow/energy-5.png",
            alt: 'energy',
            position: 'above',
            width: 420,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Lesson1 = {
        Type: 'Default',
        Header: 'Where do living things get their energy from?',
        Text: {
            transition: 'Next',
            text: [
                `<p></p>`,

                `<p>Nearly all living things on Earth get their energy either directly or indirectly from the sun.</p>`,
                
                `<p>Tracking what happens to this energy as it moves through ecosystems can help us understand key patterns in nature.</p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Energy+Flow/energy-2.png",
            alt: 'flow',
            position: 'below',
            width: 400,
            zoom: null
        },
        Audio: null
    }

    const Lesson2 = { //explanation of photosynthesis
        Type: 'Default',
        Header: null,
        Text: {
            transition: 'Next',
            text: [
                `<p>Energy from the sun is captured during <b>photosynthesis.</b></p>`,

                `<p>Photosynthesis traps solar energy into the chemical bonds of glucose, sort of like a solar battery.</p>`,
                
                { 
                    Example: 'Math',
                    Content: '6CO_2 + 6H_2O \\rightarrow C_6H_{12}O_6 + 6O_2\\',
                },

                `<p>As seen by the equation above, plants take in carbon dioxide and water from the atmosphere, and convert it into glucose (sugar) and oxygen.</p>`,
                
                `<p>Without plants, we wouldn't have any oxygen to breathe!</p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Energy+Flow/energy-4.png",
            alt: 'glucose',
            position: 'below',
            width: 400,
            zoom: null
        },
        Audio: null
    }

    const Lesson3 = { //explanation of cellular respitation
        Type: 'Default',
        Header: null,
        Text: {
            transition: 'Next',
            text: [
                `<p>The energy stored in glucose can be released and used in the process of <b>cellular respiration.</b></p>`,

                `<p>Glucose is used for metabolic functions in animals, but also used by plants, as the main component of their physical bodies!</p>`,
                
                { 
                    Example: 'Math',
                    Content: 'C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O\\',
                },

                `<p>The equation above describes how cellular respiration takes glucose and oxygen to convert it into carbon dioxide and water.</p>`,
                
                `<p>Without cellular respiration, humans wouldn't be able to use energy!</p>`,

                { // note
                    Example: 'Note',
                    Content: "Think deeper: research what would happen when there is no oxygen available for cellular respiration! ",
                    // Image: { // optional
                    //     url: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Energy+Flow/energy-3.png', 
                    //     alt: 'Short image description goes here',
                    //     width: 150,
                    //     height: 150,
                    //     position: 'below',
                    //     zoom: null // optional
                    // },
                },
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Energy+Flow/energy-1.png",
            alt: 'numbers',
            position: 'below',
            width: 400,
            zoom: null
        },
        Audio: null
    }

    const MC = {
        Type: 'Multiple Choice',
        Header: null,
        Question: '<b>Why are animals not able to get energy directly from the sun?</b> <br>A. They get their energy from breaking down glucose <br>B. Animals do not take in carbon dioxide <br>C. Animals are not primary organisms <br> D. Plants have more complex mitochondria',
        Options: [
            "A",
            "B",
            "C",
            "D"
        ],
        Answer: 'A', 
        Image: null,
        Audio: null
    };

    const Outro = {
        Type: 'Default',
        Header: 'You have reached the end! Ready for some more?',
        Text: null,
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Energy+Flow/energy-3.png",
            alt: 'numbers',
            position: 'below',
            width: 400,
            zoom: null
        },
        Audio: null
    }

    const ComponentArray = [Intro, Lesson1, Lesson2, Lesson3, MC, Outro]; // Insert component names here in the order they should be displayed

    return ( 
    <MakePage componentArray={ComponentArray} /> 
    );
}
export default MakeComponent;