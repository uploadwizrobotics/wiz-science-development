import MakePage from './MakePage.js';

const MakeComponent = () => {
    
    const Intro = {
        Type: 'Default',
        Header: 'Checkpoint Four',
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
                "<div class='or'>Explain why monoculture can be harmful to ecosystems.</div>",
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
                "<div class='or'>Who are ecosystem engineers?</div>",
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
                "<div class='or'>What are some ways we can measure biodiversity?</div>",
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
                "<div class='or'>Why does succession happen? Describe the first two stages in detail.</div>",
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
                "<div class='or'>What are irrational numbers?</div>",
            ]
        },
        Image: null,
        Audio: null
    }

    const six = {
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
    const ComponentArray = [ Intro, Question1, Question2, Question3, Question4, six];
    return (
        <MakePage componentArray={ComponentArray} />
    );
}

export default MakeComponent;