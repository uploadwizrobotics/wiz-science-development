// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';
import Default from '../Components/Default/Default.js';

const MakeComponent = () => {

    const Intro = {
        Type: 'Default',
        Header: 'Linking Climate Change and Loss of Biodiversity',
        // Text: {
        //     transition: null,
        //     text: [
        //         `<p><i>In this assignment, students will:</i></p>
        //         <p>Explore <b>narrowly-focused actions</b> to combat climate change and lessen the loss of biodiversity </p>
        //         <p><br><b>Learning Expectations: A1.1, B1.1, B2.6</b></p>`
        //     ]
        // },
        Image: {
            url: "Earth",
            alt: 'multiplane',
            position: 'below',
            width: 420,
            height: 320,
            zoom: null
        },
        Audio: null
    }

    const Intro2 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: null,
            text: [
                `<p><i>In this assignment, students will:</i></p>
                <p>Explore <b>narrowly-focused actions</b> to combat climate change and lessen the loss of biodiversity </p>
                <p><br><b>Learning Expectations: A1.1, B1.1, B2.6</b></p>`
            ]
        },

        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Sustainability/sustainability-8.png",
            alt: 'earth cliamte change',
            position: 'below',
            width: 320,
            height: 320,
            zoom: null
        }
    }

    const Lesson1 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: "Next",
            text: [
                `<p><b>Your mission?</b>Pick <i>three</i> of the following topics to research and summarize your findings into a paragraph, don't forget to upload it as a PDF.</p>`,
                "<span class='re'>Stopping the loss and degradation of carbon and species-rich ecosystems on land and in the ocean</span>",
                "<span class='or'>Restoring carbon and species-rich ecosystems</span>",
                "<span class='ye'>Increasing sustainable agricultural and forestry practices</span>",
                "<span class='gr'>Enhancing and better-targeting conservation actions, coordinated with and supported by strong climate adaptation and innovation</span>",
                "<span class='bl'>Eliminating subsidies that support local and national activities harmful to biodiversity</span>",
                `<a href="https://sdgs.un.org/goals">The following topics are from the <b>United Nations</b> 17 Sustainable Development Goals. Visit their website for more info!</a>`
            ]
        },
        // Image: {
        //     url: "Animals2",
        //     alt: 'animals2',
        //     position: 'above',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }

const ComponentArray = [Intro, Intro2, Lesson1]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;