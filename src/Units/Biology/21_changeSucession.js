// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {

    const Intro = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: null,
            text: [
                `<br><br><br><br><br><br><br><br><br><br><span class='bl'>Change and Succession</span><br>
                <p>Students will investigate processes such as sucession, to explain how they contribute to ecosystem sustainability.</p>`
            ]
        },
        Image: {
            url: "Tree",
            alt: 'Tree',
            position: 'below',
            width: 420,
            height: 320,
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
                `<span class='re'>What is ecological succession?</span><br> <i>And when does it happen?</i>`,
                `It is the sequence of change in an ecosystem, the change in the composition of species over time.`,
                `<p>Succession usually occurs after an ecological disturbance.</p>`,
            
                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "<p>Primary Succession</p>",
                            },
                            back: {
                                Example: null,
                                Content: "<p>Begins with virtually lifeless area without soil</p>",
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "<p>Secondary Succession</p>",
                            },
                            back: {
                                Example: null,
                                Content: "<p>Existing community is cleared, but base soil is still intact.</p>"
                            }
                        },
                    ]
                }
            ]
        },
        // Image: {
        //     url: "CircleDiagram",
        //     alt: 'circle',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // }, 
        Audio: null
    }

    const Lesson2 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: "Next",
            text: [
                `<span class='gr'>Where does the soil come from then?</span>`,
                `<p>Bacteria, lichens, and mosses make the soil.</p>`,
                `<p>During secondary succession, bunring releases nutrients formerly locked up in the tissues of the tree</p>`,
                `<p>The disturbance starts the process of succession over again.</p>`
            ]
        },
        // Image: {
        //     url: "CircleDiagram",
        //     alt: 'circle',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // }, 
        Audio: null
    }

    const Lesson3 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: "Next",
            text: [
                `<span class='or'>Disturbances are natural cycles, often necessary for community development and survival</span><br><br>`,
                `Benefits of ecological disturbance include:`,
                `<p>Release of nutrients</p>`,
                `<p>Increase of biodiversity</p>`,
                `<p>Increase of habitats</p>`,
                `<p>Rejuvenation of community</p>`,
            ]
        },
        // Image: {
        //     url: "CircleDiagram",
        //     alt: 'circle',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // }, 
        Audio: null
    }

    const Ending = {
        Type: 'Default',
        Header: 'Last lesson of this unit!',
        Text: null,
        Audio: null
    }


const ComponentArray = [Intro, Lesson1, Lesson2, Lesson3, Ending]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;