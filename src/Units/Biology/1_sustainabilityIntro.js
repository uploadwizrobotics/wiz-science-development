// The bulk of the code will be within these curly brackets
// place objects within MakeComponent in order of appearance 

import MakePage from './MakePage.js'; // For parsing
import { useTranslation } from 'react-i18next';


const MakeComponent = () => {
    
    const Intro = {
        Type: 'Default',
        Header: 'Introduction to Sustainability',
        Text: {
            transition: null,
            text: [
                `<p><i>By the end of this lesson, students will be able to:</i></p>
                <p>Investigate and explain how sustainable practices used by various communities, including First Nations,
                Metis, and Inuit communities</p>
                <p>Reflect an understanding of the importance of the dynamic equilibrium of ecosystems</p>
                <p>Analyse contributions to science by people from communities in Canada</p>
                <p><br><b>Learning Expectations: B1.2, B1.3, A2.5</bn></p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Sustainability/sustainability-6.png ",
            alt: 'ecosystem',
            position: 'below',
            width: 200,
            height: 200,
            zoom: null
        },
        Audio: null
    }

    const Lesson1 = {
        Type: 'Default',
        Header: 'What does sustainability mean to you?',
        Text: {
            transition: 'Next',
            text: [
                `<p></p>`,
                `<p>To be <b>sustainable</b> means to meet your needs today without depleting resources that are necessary for future generations.</p>`,
                
                `<p>The choices you make and the lifestyle you live today affects your future and the future of others.<br></p>`,
                
                `<p>Energy and matter flow through ecosystems from one organism to another; 
                in order to be alive, all organisms must consume resources and energy for themselves.</p>`,

                `<p>If a resource is used at a faster rate than it can be replaced, it will deplete over time and <b>may eventually run out.</b></p>`
            ]
        },
        Image: {
            url: "City",
            alt: 'city',
            position: 'above',
            width: 400,
            zoom: null
        },
        Audio: null
    }

    const Lesson2 = {
        Type: 'Default',
        Header: 'The Seventh Generation Principle...',
        Text: {
            transition: 'Next',
            text: [
                `<p>Is based on an ancient Iroquois philosophy that ensures the decisions that the current generation makes should result in a world 
                that can sustain itself for seven generations into the future.</p>`,

                `<p>It's used when making decisions about energy, water, and other natural resources, in an attempt to protect sustainability.</p>`,
                
                `<p>These types of resources are known as <b>common pool resources.</b></p>`,

                `<p>The <i>Tragedy of the Commons</i> represents a situation in which those with equal access to a common pool resource unsustainably act in their own interest, 
                and in doing so, deplete the entire resource pool.</p>`
            ]
        },
         Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Sustainability/sustainability-3.png",
            alt: 'numbers',
            position: 'below',
            width: 200,
            height: 200,
            zoom: null
        },
        Audio: null
    }

    const Lesson3 = {
        Type: 'Default',
        Header: null,
        Text: {
            transition: 'Next',
            text: [
                `<p>Unsustainable practices will continue to contribute to climate change, and at our current rate of consumption, 
                it is <b>not likely seven generations will survive into the future.</b></p>`,

                `<p>Indigenous peoples are the most affects by climate change, as they are facing the eradication of their land, 
                and are unable to continue their traditional way of life.</p>`,

                `<p>By involving those who best represent a common pool resource, such as Indigenous commmunities, we can slowly work towards mutual coercion to 
                <b>sustainably set boundaries.</b></p>`
            ]
        },
        Image: {
            url: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Sustainability/sustainability-7.png ",
            alt: 'numbers',
            position: 'below',
            width: 200,
            height: 200,
            zoom: null
        },
        Audio: null
    }

    const Lesson4 = {
        Type: 'Multiple Choice',
        Header: 'Which of the following is an unsustainable practice?',
        Question: 'A. Recycling <br> B. Overpopulated cities <br> C. Renewable energy <br> D. Locally grown food <br>',
        Options: [
            "A",
            "B",
            "C",
            "D"
        ],
        Answer: 'B', 
        Image: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Sustainability/sustainability-1.png",
        Audio: null
    }
    
    const Ending = {
        Type: 'Default',
        Header: 'Congrats! You made it to the end!',
        // Image: "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/CWE/SNC1D/Unit1/Introduction+To+Sustainability/sustainability-2.png",
        Text: null,
        Audio: null
    }
    
    // place objects in order of appearance
    const ComponentArray = [ Intro, Lesson1, Lesson2, Lesson3, Lesson4, Ending];

    return (
        <MakePage componentArray={ComponentArray} />
    );
}

export default MakeComponent;