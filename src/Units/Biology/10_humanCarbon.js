// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance 

import MakePage from './MakePage.js'; // For parsing -> every parser change will be made in MakePage.js and not the other Parser files
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {
    const Intro = {
        Type: 'Default',
        Header: 'Human Sources of Carbon',
        Text: {
            transition: "Next",
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>`,
                `<p>Explain the effects of various human activities on the dynamic equilibrium of ecosystems and analyse how human activities contribute to climate change.</p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/The+Carbon+Cycle/carbon-2.png",
            alt: 'carbon',
            position: 'below',
            width: 300,
            height: 300,
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
                `<p>Some human activites, such as burning of fossil fuels and deforestation increase atmospheric CO2 and affect 
                Earth's climate and oceans.</p>`,

                `<p>Global demand for fossil fuel reserves (non-renewable sources) are being used up much faster than they can by natural geological processes.</p>`,

                `<p>When fossil fuels are burned, CO2 is released into the air; increasing use of fossil fuels has led to elevated levels of atmospheric CO2.</p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-6.jpeg ",
            alt: 'carbon',
            position: 'below',
            width: 350,
            height: 350,
            zoom: null
        },
        Audio: null
    }

    const DND = { //6 items, carbon-2 is part of the human sources 
        //human source, natural source, could be both!
        Type: 'Horizontal DND',
        Header: 'Determine which of the sources of carbon are man-made, natural, or both:',
        Data: {
            tasks: { 
							//objects that can be dragged into each box
                'op-1': { id: 'op-1', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-1.png'},
                'op-2': { id: 'op-2', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-2.png' },
                'op-3': { id: 'op-3', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-3.png' },
                'op-4': { id: 'op-4', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-4.png' },
                'op-5': { id: 'op-5', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-5.png' },
                'op-6': { id: 'op-6', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/The+Carbon+Cycle/carbon-2.png' },
            },
            columns: {
								//boxes that information is being dragged into
                'column-1': {
                    id: 'column-1',
                    type: 'input',
                    title: 'Man-made Sources',
                    taskIds: [],
                },
                'column-2': {
                    id: 'column-2',
                    type: 'input',
                    title: "Natural Sources",
                    taskIds: [],
                },
                'column-3': {
                    id: 'column-3',
                    type: 'input',
                    title: 'Both',
                    taskIds: [],
                },
                'column-4': {
                    id: 'column-4',
                    type: 'options',
                    title: 'Options',
                    taskIds: ['op-3', 'op-6', 'op-2', 'op-4', 'op-5', 'op-1'],
                },
            },
            // Facilitate reordering of the columns
            columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
        },
        Answer: {
            tasks: {
                'op-1': { id: 'op-1', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-1.png'},
                'op-2': { id: 'op-2', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-2.png' },
                'op-3': { id: 'op-3', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-3.png' },
                'op-4': { id: 'op-4', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-4.png' },
                'op-5': { id: 'op-5', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Human+Sources+Of+Carbon/humanCarbon-5.png' },
                //6th one will be the factory
                'op-6': { id: 'op-6', content: 'https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/The+Carbon+Cycle/carbon-2.png' },
            },
            columns: {
                'column-1': {
                    id: 'column-1',
                    type: 'input',
                    title: 'Man-made Sources', //cutting down trees and factory
                    taskIds: ['op-5', 'op-6'],
                },
                'column-2': {
                    id: 'column-2',
                    type: 'input',
                    title: "Natural Sources",
                    taskIds: ['op-1', 'op-3', 'op-4'], //natural sources
                },
                'column-3': {
                    id: 'column-3',
                    type: 'input',
                    title: 'Both', //wildfires
                    taskIds: ['op-2'],
                },
                'column-4': {
                    id: 'column-5',
                    type: 'options',
                    title: 'Options',
                    taskIds: [],
                },
            },
            // Facilitate reordering of the columns
            columnOrder: ['column-1', 'column-2', 'column-3'],
        }
    }

    const Lesson2 = {
        Type: 'Default',
        Header: "Reducing our Carbon Emissions",
        Text: {
            transition: "Next",
            text: [
                `<p><h3>Limiting your carbon footprint:</h3></p> Reducing the total amount of greenhouse gases that are generated by our actions.`,

                `<p>Greenhouse gases include <b>carbon dioxide</b> and <b>methane</b>, which are also apart of the natural carbon cycle.</p>`,

                `<h3>Take a break to research some ways we can reduce our carbon footprint! You will need it for the upcoming assignment.</h3>`

            ]
        },
        Image: {
            url: "Biker",
            alt: 'biker',
            position: 'below',
            width: 420,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Ending = {
        Type: 'Default',
        Header: 'Ready for another lesson?',
        Text: null,
        Audio: null
    }

const ComponentArray = [Intro, Lesson1, DND, Lesson2, Ending]; // Insert component names here in the order they should be displayed

    return ( 
    <MakePage componentArray={ComponentArray} /> 
    );
}
export default MakeComponent;