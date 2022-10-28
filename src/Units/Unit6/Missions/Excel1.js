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

    const Excel = {
        Type: 'Default',
        Header: "Don't forget to save and submit your excel worksheet!",
        Text: null,
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Excel+Missions/submitexcel.gif",
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
                "Below are the number of houses the garbage truck visited each day last week.",
                "<div class='example'>12, 28, 33, 37, 23 14, 9</div>",
                "<p>Use excel to create a table, then a histogram.</p><p><i>Don't forget to add axis labels and a title!</i></p>",
                "How many more days did the garbage truck visit 20-30 houses than 30-40 houses? Explain how you know."
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/MPM1D/MPM1D-U6/Excel+Missions/garbage-truck.png",
            alt: 'process',
            position: 'below',
            width: '250vw',
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
    const ComponentArray = [ Intro, Excel, WP1, Ending ];
    return (
        <MakePage componentArray={ComponentArray} />
    );
}

export default MakeComponent;



