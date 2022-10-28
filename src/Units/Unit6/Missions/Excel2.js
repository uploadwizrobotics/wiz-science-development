import MakePage from './MakePage.js.js';

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
            url: "https://drive.google.com/uc?export=view&id=1TWP3O79FQt6R3taVTr-wgvaqA65ri-0-",
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
                "You ask your best friend to lend you <div class='example'>$200</div> to buy a laptop.",
                "She says she can lend you the money if you give her an extra <div class='example'>$2</div> for every month that passes before you return it.",
                "Use excel to find the annual rate of interest",
                "What is the total amount you must pay her after 1 and a half years? Explain."
            ]
        },
        Image: {
            url: "https://drive.google.com/uc?export=view&id=1YlJe7qfBrzGwrJLVrRZZpAmdu49OPz8I",
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
            url: "https://drive.google.com/uc?export=view&id=144cHnrSnRLPCIOXWqPCwpu6JRVQaV3CQ",
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



