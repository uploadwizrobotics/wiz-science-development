import MakePage from './MakePage.js';

const MakeComponent = () => {
    
    const Intro = {
        Type: 'Default',
        Header: 'Checkpoint Three',
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
                "<div class='or'>Why is competition a biotic factor, but availability/quality is an abiotic factor?</div>",
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
                "<div class='or'>What is meant by the term 'carrying capacity'?</div>",
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
                "<div class='or'>When does the predator population tend to peak?</div>",
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
                "<div class='or'>A barnacle attached to a whale is able to travel thousands of miles collecting and filtering food from the moving water, but the whale does not seem to be affected by the barnacles. What kind of relationship is this?</div>",
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
                "<div class='or'>What kind of population is only affected by birth and death rates?</div>",
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
                "<div class='or'>Describe the process of eutrophication and why it is detrimental to organisms.</div>",
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
                "<div class='gr'>You have reached the end!</div>",
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