import MakePage from './MakePage.js';

const MakeComponent = () => {
    
    const Intro = {
        Type: 'Default',
        Header: 'Checkpoint Two',
        Text: {
            transition: null,
            text: [ 
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U1/Checkpoint/check-in+(2).png",
            alt: 'flag',
            position: 'below',
            width: 300,
            zoom: null
        },
        Audio: null
    }

    const Question1 = {
        Type: 'Default',
        Header: 'Question One',
        Text: {
            transition: null,
            text: [
                "<div class='or'>What are the four main elements that make up all living things, and how do they become part of the biotic and abiotic parts of ecosystems?</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    const Question2 = {
        Type: 'Default',
        Header: 'Question Two',
        Text: {
            transition: null,
            text: [
                "<div class='or'>Describe the two carbon cycles and how they are interconnected.</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    const Question3 = {
        Type: 'Default',
        Header: 'Question Three',
        Text: {
            transition: null,
            text: [
                "<div class='or'>Why can't natural processes stop climate change?</div>",
            ]
        },
        Image: null,
        Audio: null
    }
    
    const Question4 = {
        Type: 'Default',
        Header: 'Question Four',
        Text: {
            transition: null,
            text: [
                "<div class='or'>Describe what is meant by 'limiting nutrient', and give an example.</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    const Question5 = {
        Type: 'Default',
        Header: 'Question Five',
        Text: {
            transition: null,
            text: [
                "<div class='or'>Choose one sustainable farming practice and describe its overall goal.</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    const Question6 = {
        Type: 'Default',
        Header: 'Question Six',
        Text: {
            transition: null,
            text: [
                "<div class='or'>Why are food webs preferred over food chains?</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    const seven = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: null,
            text: [
                "<div class='bl'>You have reached the end!</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    // place objects in order of appearance
    const ComponentArray = [ Intro, Question1, Question2, Question3, Question4, Question5, Question6, seven];
    return (
        <MakePage componentArray={ComponentArray} />
    );
}

export default MakeComponent;