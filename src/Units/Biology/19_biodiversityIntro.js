// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {
    const Intro = {
        Type: 'Default',
        Header: 'Introduction to Biodiversity',
        Text: {
            transition: "Next",
            text: [
                `<p><i>In this lesson, students will:</i></p>
                <p>Investigate factors and processes, including biodiversity, air/water quality, soil health, and succesion, to explain how they contribute to ecosystem sustainability.</p>`,
                `<p><br><b>Learning Expectations: B2.4</b></p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Biodiversity/biodiversity-3.gif",
            alt: 'trees',
            position: 'below',
            width: 600,
            height: 600,
            zoom: null
        },
        Audio: null
    }

    const Lesson1 = {
        Type: 'Default',
        Header: 'What does biodiversity mean to you?',
        Text: {
            transition: 'Next',
            text: [
                `<span class='gr'>The number of different species in an ecosystem.</span>`,
                `<p><b>More biodiversity</b> means an ecosystem is more likely to be sustainable, less likely to be harmed.</p>`,
                `<p>Greater biodiversity offers more resources, habitats, and more resilience in the face of environmental change.</p>`,
                `<p><b>Lessened biodiversity</b> results in monoculture, increasing the risk of disease and decreasing resilience.</p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Biodiversity/biodiversity-4.png",
            alt: 'biodiversity',
            position: 'below',
            width: 320,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Lesson2 = {
        Type: 'Default',
        Header: 'Important species in a community',
        Text: {
            transition: "Next",
            text: [
                `<p></p>`,
                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "Dominant Species",
                            },
                            back: {
                                Example: null,
                                Content: "Abundant, biggest biomass, producers",
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Indicator species"
                            },
                            back: {
                                Example: null,
                                Content: "<p>Organisms that are easily affect by change in the environment, they indicate if a problem exists within the ecosystem.</p>"
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Ecosystem engineers",
                            },
                            back: {
                                Example: null,
                                Content: "<p>Species that causes such dramatic changes to landscapes that it creates a new ecosystem.</p>"
                            }
                        },
                    ]
                },

            ]
        },
        Audio: null
    }

    const Lesson3 = {
        Type: 'Default',
        Header: 'What are ecosystem services?',
        Text: {
            transition: "Next",
            text: [
                "",
                "<div class='bl'>Benefits experienced by organisms including humans, procided by sustainable ecosystems.</div>",

                `<p>They are <b>natural results</b> of all activities experiences by organisms including humans, provided by sustainable ecosystems. They include:</p>`,
                
                `<p><i>Provision of clean food and water</i></p>`,
                `<p><i>Cycling of nutrients</i></p>`,
                `<p><i>Conversion of atmospheric carbon into biomass</i></p>`,
                `<p><i>Pollination of crops and natural vegetation</i></p>`,
                `<p><i>Balance of processes such as growth and decomposition</i></p>`,

                {
                    Example: 'Note',
                    Content: "<p>Can you name an example of an ecosystem engineer? Hint: it is Canada's national animal!</p>",
                    // Image: {
                    //     url: "<https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U1/WholeNumbers/thinking.gif>",
                    //     alt: 'stop',
                    //     position: 'below',
                    //     width: 200,
                    //     zoom: null
                    // },
                },
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Biodiversity/biodiversity-1.png",
            alt: 'biodiversity',
            position: 'below',
            width: 320,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Lesson4 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: null,
            text: [
                `<span class='bl'>What price can be put on biodiversity?</span><br><br>`,
            ]
        },
        Image: {
            url: "CircleDiagram",
            alt: 'circle',
            position: 'above',
            width: 420,
            height: 320,
            zoom: null
        }, 
        Audio: null
    }

    const Lesson5 = {
        Type: 'Horizontal DND',
        Header: 'How do we measure biodiversity? Do some research!',
        Data: {
            tasks: {
							//objects that can be dragged into each box
                'op-1': { id: 'op-1', content: 'Low dose of insecticide is sprayed up into the top of a tree, when the insects fall, they are collected for observation'},
                'op-2': { id: 'op-2', content: 'Species are counted within a known square area, repeated in different places through the habitat to get an accurate representation of the biodiversity' },
                'op-3': { id: 'op-3', content: 'Transect sampling is done using a transect line, at every interval, the type and number of species are recorded.' },
                'op-4': { id: 'op-4', content: 'Fine mesh nets are used to capture birds/bats, organism is taken for genetic analysis, then released.' },
            },
            columns: {
								//boxes that information is being dragged into
                'column-1': {
                    id: 'column-1',
                    type: 'input',
                    title: 'Quadrat Sampling',
                    taskIds: [],
                },
                'column-2': {
                    id: 'column-2',
                    type: 'input',
                    title: 'Transect Sampling',
                    taskIds: [],
                },
                'column-3': {
                    id: 'column-3',
                    type: 'input',
                    title: 'Canopy Fogging',
                    taskIds: [],
                },
                'column-4': {
                    id: 'column-4',
                    type: 'input',
                    title: 'Netting',
                    taskIds: [],
                },
                'column-5': {
                    id: 'column-5',
                    type: 'options',
                    title: 'Options',
                    taskIds: ['op-1', 'op-2', 'op-3', 'op-4'],
                },
            },
            // Facilitate reordering of the columns
            columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
        },
        Answer: {
            tasks: {
                'op-1': { id: 'op-1', content: 'Low dose of insecticide is sprayed up into the top of a tree, when the insects fall, they are collected for observation'},
                'op-2': { id: 'op-2', content: 'Species are counted within a known square area, repeated in different places through the habitat to get an accurate representation of the biodiversity' },
                'op-3': { id: 'op-3', content: 'Transect sampling is done using a transect line, at every interval, the type and number of species are recorded.'  },
                'op-4': { id: 'op-4', content: 'Fine mesh nets are used to capture birds/bats, organism is taken for genetic analysis, then released.'},
            },
            columns: {
                'column-1': {
                    id: 'column-1',
                    type: 'input',
                    title: 'Quadrat Sampling',
                    taskIds: ['op-2'],
                },
                'column-2': {
                    id: 'column-2',
                    type: 'input',
                    title: 'Transect Sampling',
                    taskIds: ['op-3'],
                },
                'column-3': {
                    id: 'column-3',
                    type: 'input',
                    title: 'Canopy Fogging',
                    taskIds: ['op-1'],
                },
                'column-4': {
                    id: 'column-4',
                    type: 'input',
                    title: 'Netting',
                    taskIds: ['op-4'],
                },
                'column-5': {
                    id: 'column-5',
                    type: 'options',
                    title: 'Options',
                    taskIds: [],
                },
            },
            // Facilitate reordering of the columns
            columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
        }
    }

    const Ending = {
        Type: 'Default',
        Header: 'Do you think you are a biodiversity master? Time for an assignment!',
        Text: {
            transition: null,
            text: [
                `<a href="https://www.youtube.com/watch?v=vpTHi7O66pI">Want some insight into the next assignment? Watch this TED talk!</a>`
            ]
        },
        Audio: null
    }

const ComponentArray = [Intro, Lesson1, Lesson2, Lesson3, Lesson4, Lesson5, Ending]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;