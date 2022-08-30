// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance 

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {
    const Intro = {
        Type: 'Default',
        Header: 'The Four Spheres of the Earth',
        Text: {
            transition: null,
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>
                <p>Investigate the interacts between the biosphere, hydrosphere, lithosphere, and atmosphere, to explain why these interactions are important for ecosystem sustainability.</p>
                <p><br><b>Learning Expectations: B2.1</b></p>`
            ]
        },
        Image: {
            url: "Earth",
            alt: 'globe',
            position: 'below',
            width: 420,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Lesson1 = {
        Type: 'Default',
        Header: 'What are the spheres?',
        Text: {
            transition: "Next",
            text: [
                'The Earth can be subdivided into <b>four major spheres</b> in order to make it easier to study.',

                '<p>All four spheres interact with each other and all of them contain major stores of minerals and nutrients such as carbon, nitrogen, and phosphorus in various forms.</p>',

                `<p>Changes in one component of one sphere can cause impacts that affect components of other spheres.</p>`,
                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "Atmosphere", 
                            },
                            back: {
                                Example: null,
                                Content: "Thin layer of gas surrounding the Earth; complex layered mixture of different gasses", 
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Hydrosphere"
                            }, 
                            back: {
                                Example: null,
                                Content: "All of the water on Earth; more than 90% of the water is in the oceans as salt water)"
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "Lithosphere", 
                            },
                            back: {
                                Example: null,
                                Content: "All of the land on Earth, this covers about 25% of the Earth's surface"
                            }
                        },
                        {   front: {
                            Example: null,
                            Content: "Biosphere", 
                            },
                            back: {
                                Example: null,
                                Content: "Sum of all of the world's ecosystems; zone of life on Earth"
                            }
                    },
                    ]
                }
            ]
        },
        Image: null,
        Audio: null
    }

    const Lesson2 = { //abreviations 
        Type: 'Default',
        Header: 'Sphere Abbreviations:',
        Text: {
            transition: 'Next',
            text: [
                `<b>You'll need these abbreviations for the next task!</b>`,
                `H = Hydrosphere`,
                `A = Atmosphere`,
                `L = Lithosphere`,
                `B = Biosphere`
            ],
        },
        // Image: {
        //     url: "Globe",
        //     alt: 'globe',
        //     position: 'below',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }

    const Lesson3 = { //https://geography.name/how-do-earths-four-spheres-interact/

        Type: 'Fill in the Blank',
        Header: 'Fill the blanks in with the best term:',
        Question: [
            'Channels within a stream generally bend back and forth as the water flows downhill. The water is faster and more energetic in some parts of the stream than in others, eroding into the streambed and riverbank. The surface of the Earth can be uplifted or dropped down, influencing the balance of erosion and deposition. This is an example of a ',
            ['H-A', 'L-B', 'B-A', 'L-H'], 

            ' interaction. Plants and animals utilize precipitation from the air, and some plants can extract moisture directly out of the air without it raining. This interaction is an example of ', 
            ['H-A', 'L-B', 'B-A', 'L-H'],

            '. Energy from the Sun evaporated water from the ocean, moving the water molecules into the atmomsphere. The water vapour can remain in the atmosphere or can condense into tiny drops that form most clouds. Under the right conditions, the water returns as rain. This is a ', 
            ['H-A', 'L-B', 'B-A', 'L-H'], 
            
            ' interaction. Soils help determine the types of plants that can grow, as well as the geographic setting. Plants remove nutrients from the soil but return material back to the soil through roots and annual leaf fall, or plant death and decay. This is a ', 
            ['H-A', 'L-B', 'B-A', 'L-H'],

            ` interaction.`
        ],
        Answer: ['L-H','B-A','H-A', 'L-B'],
        Image: null,
        Audio: null
    };

const ComponentArray = [Intro, Lesson1, Lesson2, Lesson3]; // Insert component names here in the order they should be displayed

    return ( 
    <MakePage componentArray={ComponentArray} /> 
    );
}
export default MakeComponent;