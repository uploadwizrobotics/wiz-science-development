// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {

    const Intro = {
        Type: 'Default',
        Header: 'Growth Curves and Predator-Prey Relationships',
        Text: {
            transition: null,
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>
                <p>Investigate how interactions between organisms affects the carrying capacity, or any particular pattern of growth and decline.</p>`
            ]
        },
        Image: {
            url: "LineGraph",
            alt: 'linegraph',
            position: 'above',
            width: 420,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Lesson1 = {
        Type: 'Default',
        Header: 'Growth Curves',
        Text: {
            transition: "Next",
            text: [
                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "<h2>Carrying capacity</h2>",
                            },
                            back: {
                                Example: null,
                                Content: "<p>Number of living organisms or crops that a region can support without environmental degradation</p>",
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "<h2>Doubling time</h2>"
                            },
                            back: {
                                Example: null,
                                Content: "<p>Amount of time it takes for a given quantity to double in size or value at a constant growth rate</p>"
                            }
                        },
                    ]
                },

                "<p>At carrying capacity, the birth rate is approximately equal to the death rate.</p>"
            ]   
        },

        //  Image: { 
        //     url: "LineGraph",
        //     alt: 'lineGraph',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }

    const Lesson2 = {
        Type: 'Default',
        Header: 'Predator-Prey Relationships',
        Text: {
            transition: "Next",
            text: [
                `<p>The interaction of predators and prey tend to show a particular pattern of growth and decline at carrying capacity.</p>`,

                `<p>Characteristics of predator/prey interactions include:</p>`,

                `<p>Regular cycles of increase and decrease</p>`,

                `<p>The population of the predator and prey follow each other closely</p>`,
                
                `<p><b>Time lag:</b> the predator population tends to peak after the prey population peaks.</p>`
            ]   
        },

        //  Image: { Hudson Bay Company
        //     url: "LineGraph",
        //     alt: 'lineGraph',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }

    const Ending = {
        Type: 'Default',
        Header: 'Congrats! This is the end.',
        Text: null,
        Audio: null
    }

const ComponentArray = [Intro, Lesson1, Lesson2, Ending]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;