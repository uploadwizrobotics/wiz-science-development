import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
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

    const Worksheet = {
        Type: 'Default',
        Header: "Don't forget to print and fill out the worksheet!",
        Text: null,
        Image: {
            url: "https://drive.google.com/uc?export=view&id=1rSdQNvCOfJgV_TO1MHhUpdLx9dqwushs",
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
                "<p>The following dot plot summarizes the number of vitamins Cecelia has taken each day since starting her new diet.</p><p><img src=https://drive.google.com/uc?export=view&id=1x8TfvfS_o-qbjm34r8YfQ38qEWg_uvkS width='500vw' style='padding-top: 10px;' alt={alt}/></p>",
                "What is a resonable estimate of the probability that Cecelia takes exactly 6 vitamins tomorrow?",
            ]
        },
        Image: {
            url: "https://drive.google.com/uc?export=view&id=1N8p4U3VKstkXkpzN_9OVOLfu-o65Nw7P",
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
        Question: "What is a resonable estimate of the probability that Winston scores 8-11 points in the next basketball game?", 
        Options: [
            "³⁄₂₅",
            "⁵⁄₂₅",
            "⁶⁄₂₅",
            "⁸⁄₂₅"
        ],
        Answer: '⁸⁄₂₅',
        Image: {
            url: "https://drive.google.com/uc?export=view&id=1IAFf_GX_NXd-pZpijnnVKUvspI1f4g3q",
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
                "Lois is stranded on an island.",
                "<p>The probability of her finding safety by waiting for help is <div class='example'>¼</div></p><p>The probability of her finding safety by leaving on her raft is <div class='example'>0.32</div></p>",
                "Which of the event is more likely? Justify your answer.",
            ]
        },
        Image: {
            url: "https://drive.google.com/uc?export=view&id=1Ttg2_J9Nt7g62Dhm67XbgxHRREKz05hH",
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
        Question: "<p>Pat's Pizza Parlour made: 21 cheese pizzas,</p><p>14 veggie pizzas, 23 pepperoni pizzas,</p><p>and 14 sausage pizzas yesterday.</p><p>What is a reasonable estimate of the probability that the next pizza made is <b>not</b> a cheese pizza?</p>",
        Placeholder: '____%',
        Answer: '71',
        Image: {
            url: "https://drive.google.com/uc?export=view&id=1ohvVZ1DPD_UmVIukdwCd9TZupU8bGXM8",
            alt: 'Question',
            position: 'below',
            width: '200vw',
            zoom: null
        },
        Audio: null
    }

    const SortQuestion = {
        Type: 'Default',
        Header: 'Sort',
        Text: {
            transition: "Next",
            text: [ 
                "Ricky, Vicky, and Nicky are competing in a hotdog-eating contest.",
                "<p>Their probabilities of winning are:</p><div class='example'>P(Ricky) = 0.75</div>",
                "<div class='example'>P(Vicky) = 5%</div>",
                "<div class='example'>P(Nicky) = ⅕</div>",
                "Sort the events from <b>least</b> to <b>most</b> likely."
            ]
        },
        Image: null,
        Audio: null
    }

    const Sort = {
        Type: 'Vertical DND',
        Header: 'Sort',
        Data: [
            {
                id: 'ricky',
                label: 'Ricky wins',
                items: [],
                tint: 2,
            },
            {
                id: 'vicky',
                label: 'Vicky wins',
                items: [],
                tint: 1,
            },
            {
                id: 'nicky',
                label: 'Nicky wins',
                items: [],
                tint: 3,
            },
        ],
        Answer: [
            {
                id: 'vicky',
                label: 'Vicky wins',
                items: [],
                tint: 1,
            },
            {
                id: 'nicky',
                label: 'Nicky wins',
                items: [],
                tint: 3,
            },
            {
                id: 'ricky',
                label: 'Ricky wins',
                items: [],
                tint: 2,
            },
        ]
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
    const ComponentArray = [ Intro, Worksheet, WP1, SortQuestion, Sort, MC, WP2, Rocket, Ending ];
    return (
        <MakePage componentArray={ComponentArray} />
    );
}

export default MakeComponent;



