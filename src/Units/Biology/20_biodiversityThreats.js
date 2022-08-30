// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {

    const Intro = {
        Type: 'Default',
        Header: 'Biodiversity Threats Investigation',
        Text: {
            transition: "Next",
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>
                <p>Explain how the effects of various human activities on the dynamic equilibrium of ecosystems</p>
                <p><br><b>Learning Expectations: A1.1, B2.5</bn></p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Threats+To+Biodiversity/bio-threats-1.png",
            alt: 'threat',
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
                `<span class='or'>Download the attachment and remember to submit it as a PDF!</span>`,
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U1/NumberSenseFinal/worksheet1.gif",
            alt: 'tractor',
            position: 'below',
            width: 420,
            height: 420,
            zoom: null
        },
        Audio: null
    }

const ComponentArray = [Intro, Lesson1]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;