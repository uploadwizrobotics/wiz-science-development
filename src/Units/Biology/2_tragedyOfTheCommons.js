// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance 

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {
    
    const Intro = {
        Type: 'Default',
        Header: 'Solutions to the Tragedy of the Commons',
        Text:{
            transition: 'Next',
            text: [
                `<p><i>Learning expectations: B1.1, B1.3</i></p>
                <p>Research a <b>global initiative</b> for combating climate change. 
                Identify challenges and barriers in this specific initiative, and describe how you could improve it.<p/>`,
                `<p>Submit your findings in the form of a brochure.</p>`

            ]
        },

        // Image: {
        //     url: "Numbers",
        //     alt: 'numbers',
        //     position: 'below',
        //     width: 420,
        //     height: 320,
        //     zoom: null
        // },
        Audio: null
    }
}

const ComponentArray = [Intro]; // Insert component names here in the order they should be displayed

return ( 
   <MakePage componentArray={ComponentArray} /> 
);

export default MakeComponent;