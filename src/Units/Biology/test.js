// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';

const MakeComponent = () => {

    const test = {
        Type: 'Default',
        Header: 'Types of Rational Numbers',
        Text: {
            transition: "Next",
            text: [
                "<p>There are various types of rational numbers, We shouldn't assume that only fractions with integers are rational numbers.</p>",
                "<p>The different types consist of:</p>",
                {
                    Example: 'List',
                    Content: [
                        {   front: {
                            Example: null,
                            Content: "<p>0</p><p>-3</p><p>6</p>",
                            },
                            back: {
                                Example: null,
                                Content: "<h2>Integers</h2>",
                            }
                        },
                        {   front: {
                                Example: 'Math',
                                Content: "\\\\frac{3}{7}\\\\   \\\\frac{-6}{5}\\\\   \\\\frac{9}{2}"
                            },
                            back: {
                                Example: null,
                                Content: "<h2>Fractions</h2>"
                            }
                        },
                        {   front: {
                                Example: null,
                                Content: "<p>0.333</p><p>8.121212</p><p>-0.72</p>",
                            },
                            back: {
                                Example: null,
                                Content: "<h2>Decimals</h2>"
                            }
                        },
                    ]
                }
            ]
        },
        Image: null,
        Audio: null
    }




const ComponentArray = [test]; // Insert component names here in the order they should be displayed

	return (
	   <MakePage componentArray={ComponentArray} />
	);
}
export default MakeComponent;