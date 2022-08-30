import ParsePage from '../Parser/ParsePage.js';

const MakePage = (props) => {

    const componentArray = props.componentArray;
    const numComponents = componentArray.length;

    const Page_Template = {
        Length: numComponents,
        Type: 'Lesson or Mission',
        Transition: {
            type: 'Transition type goes here', 
            limit: 'Number of obejcts to display each time'
        },
        Content: componentArray,
        Audio: 'Audio file goes here', 
    }

    /* ------------ CREATE CUSTOM PAGE HERE ------------ */

    const Page = {
        Length: numComponents,
        Type: 'Lesson',
        Transition: {
            type: 'Continue', 
            limit: 1,
        },
        Content: componentArray,
        Audio: null, 
    }
    
    return (
        <ParsePage page={Page} />
    );

}

export default MakePage;