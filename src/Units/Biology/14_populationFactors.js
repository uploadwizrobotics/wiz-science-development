// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {
    const Intro = {
        Type: 'Default',
        Header: 'Factors Affecting Populations',
        Text: {
            transition: null,
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>
                <p>Explain various factors that affect and limit population size, using relevant terminology regarding biotic and abiotic factors.</p>`,
            ]
        },
        Image: {
            url: "Rabbits",
            alt: 'Rabbits',
            position: 'above',
            width: 420,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Lesson1 = {
        Type: 'Horizontal DND',
        Header: 'Drag and drop the options to the topics that best describe them.',
        Data: {
            tasks: {
							//objects that can be dragged into each box
                'op-1': { id: 'op-1', content: 'Number of offspring of a species born in one year'},
                'op-2': { id: 'op-2', content: 'Number of individuals of a species that die in one year' },
                'op-3': { id: 'op-3', content: 'Number of individuals of a species moving into an existing population' },
                'op-4': { id: 'op-4', content: 'Number of individuals of a species moving out of an existing population' },
            },
            columns: {
								//boxes that information is being dragged into
                'column-1': {
                    id: 'column-1',
                    type: 'input',
                    title: 'Immigration',
                    taskIds: [],
                },
                'column-2': {
                    id: 'column-2',
                    type: 'input',
                    title: 'Natality',
                    taskIds: [],
                },
                'column-3': {
                    id: 'column-3',
                    type: 'input',
                    title: 'Mortality',
                    taskIds: [],
                },
                'column-4': {
                    id: 'column-4',
                    type: 'input',
                    title: 'Emigration',
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
                'op-1': { id: 'op-1', content: 'Number of offspring of a species born on one year'},
                'op-2': { id: 'op-2', content: 'Number of individuals of a species that die in one year' },
                'op-3': { id: 'op-3', content: 'Number of individuals of a species moving into an existing population' },
                'op-4': { id: 'op-4', content: 'Number of individuals of a species moving out of an existing population' },
            },
            columns: {
                'column-1': {
                    id: 'column-1',
                    type: 'input',
                    title: 'Immigration',
                    taskIds: ['op-3'],
                },
                'column-2': {
                    id: 'column-2',
                    type: 'input',
                    title: 'Natality',
                    taskIds: ['op-1'],
                },
                'column-3': {
                    id: 'column-3',
                    type: 'input',
                    title: 'Mortality',
                    taskIds: ['op-2'],
                },
                'column-4': {
                    id: 'column-4',
                    type: 'input',
                    title: 'Emigration',
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

    const Lesson2 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: "Next",
            text: [
                `<p><i>How do we calculate population growth?</i></p>`,

                `<p><span class = "bl">Population growth = (births + immigration) - (deaths + emigration)</span></p>`,

                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "Open populations",
                            },
                            back: {
                                Example: null,
                                Content: "<p>Populations in which all four factors are acting on the population, usually occuring within natural ecosystems.</p>",
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Closed populations"
                            },
                            back: {
                                Example: null,
                                Content: "<p>Populations in which immigration and emigration do not happen, such as in laboratory settings. Only natality and mortality affect the population.</p>"
                            }
                        },
                    ]
                }
            ]
        },
        // Image: {
        //     url: "Designers",
        //     alt: 'Designers',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }

    const Lesson3 = {
        Type: 'Multiple Choice',
        Header: 'Which of the following is an abiotic factor that limits population growth?',
        Question: 'A. Competition for space <br>B. Competition for mates <br>C. Disease <br>D. Availability of sunlight',
        Options: [
            "A",
            "B",
            "C",
            "D"
        ],
        Answer: 'D',
        Image: null,
        Audio: null
    };

    const Lesson4 = {
        Type: 'Vertical DND',
        Header: 'Determine which are abiotic and biotic factors that limit population growth',
        Data: [
            {
                id: 'Abiotic Factors',
                label: 'Abiotic Factors',
                items: [
                    {id: 'item-1', label: 'Availability of nutrients'},
                    {id: 'item-3', label: 'Availability of soil'},
                    {id: 'item-13', label: 'Disease'},
                    {id: 'item-6', label: 'Competition for space'},
                    {id: 'item-10', label: 'Competition for sunlight'},
                    {id: 'item-11', label: 'Competition for mates'},
                    {id: 'item-12', label: 'Predator-prey relationships'},

                ],
                tint: 1,
            },
            {
                id: 'Biotic Factors',
                label: 'Biotic Factors',
                items: [
                    {id: 'item-2', label: 'Water quality'},
                    {id: 'item-7', label: 'Competition for habitat'},
                    {id: 'item-8', label: 'Competition for shelter'},
                    {id: 'item-4', label: 'Climate/weather'},
                    {id: 'item-9', label: 'Competition for Water'},
                    {id: 'item-5', label: 'Pollution/toxins'},

                ],
                tint: 3,
            },
        ],
        Answer: [
            {
                id: 'Abiotic Factors',
                label: 'Abiotic Factors',
                items: [
                    {id: 'item-1', label: 'Availability of nutrients'},
                    {id: 'item-2', label: 'Water quality'},
                    {id: 'item-3', label: 'Availability of soil'},
                    {id: 'item-4', label: 'Climate/weather'},
                    {id: 'item-5', label: 'Pollution/toxins'},
                ],
                tint: 1,
            },
            {
                id: 'Biotic Factors',
                label: 'Biotic Factors',
                items: [
                    {id: 'item-6', label: 'Competition for space'},
                    {id: 'item-7', label: 'Competition for habitat'},
                    {id: 'item-8', label: 'Competition for shelter'},
                    {id: 'item-9', label: 'Competition for Water'},
                    {id: 'item-10', label: 'Competition for sunlight'},
                    {id: 'item-11', label: 'Competition for mates'},
                    {id: 'item-12', label: 'Predator-prey relationships'},
                    {id: 'item-13', label: 'Disease'},
                ],
                tint: 3,
            },
        ]
    }

    const Ending = {
        Type: 'Default',
        Header: 'Nicely done, you have reached the end!',
        Text: null,
        Audio: null
    }

    const ComponentArray = [Intro, Lesson1, Lesson2, Lesson3, Lesson4, Ending]; // Insert component names here in the order they should be displayed

    return (
    <MakePage componentArray={ComponentArray} />
    );

}   

export default MakeComponent;