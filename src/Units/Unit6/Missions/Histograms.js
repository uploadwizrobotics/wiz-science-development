import MakePage from './MakePage.js';

const MakeComponent = () => {

const Intro = {
        Type: 'Default',
        Header: 'Final Mission',
        Text: null,
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U1/NumberSenseFinal/flag+(5).png",
            alt: 'flag',
            position: 'below',
            width: 350,
            zoom: null
        },
        Audio: null
    }

    const Worksheet = {
        Type: 'Default',
        Header: "Don't forget to print and fill out the worksheet!",
        Text: null,
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U1/NumberSenseFinal/worksheet1.gif",
            alt: 'flag',
            position: 'below',
            width: '600vw',
            zoom: null
        },
        Audio: null
    }

    const WP1 = {
        Type: 'Default',
        Header: 'Word Problem',
        Text: {
            transition: "Next",
            text: [
                "Below is the number of years each of <b>9</b> Burger Palace locations have been open.",
                "<div class='example'>5.2, 7.0, 10.5, 2.6, 2.9, 4.5, 1.0, 1.5, 2.6</div>",
                "Create a histogram.",
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Histograms+Missions/burger.png",
            alt: 'process',
            position: 'below',
            width: '250vw',
            zoom: null
        },
        Audio: null
    }

    const MC = {
        Type: 'Multiple Choice',
        Header: "Determine from the Histogram.",
        Question: "How many more watermelons have a mass between 9 and 12kg than 0 and 3kg?", 
        Options: [
            "0",
            "1",
            "2",
            "3"
        ],
        Answer: '2',
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Histograms+Missions/U6_L7_MC.png",
            alt: 'process',
            position: 'below',
            width: '370vw',
            zoom: null
        },
        Audio: null
    };

    const WP2 = {
        Type: 'Default',
        Header: 'Word Problem',
        Text: {
            transition: "Next",
            text: [
                "Below is the number of guests at Bouncy House Bonanza each day since their big launch.",
                "<div class='example'>96.299, 255, 254, 75, 211, 271, 291</div>",
                "Create a histogram.",
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Histograms+Missions/bouncycastle.gif",
            alt: 'process',
            position: 'below',
            width: '300vw',
            zoom: null
        },
        Audio: null
    }

    const WP3 = {
        Type: 'Default',
        Header: 'Word Problem',
        Text: {
            transition: "Next",
            text: [
                "Below is the number of hours that Bob worked during each of his 8 shifts..",
                "<div class='example'>2.0, 1.8, 4.6, 1.1, 7.5, 1.5, 4.0, 1.8</div>",
                "Create a histogram.",
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Histograms+Missions/working.gif",
            alt: 'process',
            position: 'below',
            width: '300vw',
            zoom: null
        },
        Audio: null
    }

    const Rocket = {
        Type: 'Rocket',
        Header: 'Solve to launch the rocket.',
        Question: 'From the histogram, how many festivals were there?',
        Placeholder: 'Input answer here',
        Answer: '15',
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Histograms+Missions/U6_L7_MC.png",
            alt: 'Question',
            position: 'below',
            width: '80%',
            zoom: null
        },
        Audio: null
    }

    const Ending = {
        Type: 'Default',
        Header: 'Congrats! You made it to the end!',
        Text: null,
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U1/NumberSenseFinal/photoSubmit.png",
            alt: 'process',
            position: 'below',
            width: '500vw',
            zoom: null
        },
        Audio: null
    }
    
    // place objects in order of appearance
    const ComponentArray = [ Intro, Worksheet, WP1, MC, WP2, WP3, Rocket, Ending ];
    return (
        <MakePage componentArray={ComponentArray} />
    );
}

export default MakeComponent;



