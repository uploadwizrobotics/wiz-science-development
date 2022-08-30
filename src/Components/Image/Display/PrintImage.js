/* --------- DISPLAY IMAGE --------- */ 
import Thermostat from "../../Examples/Thermostat/Thermostat";
import Phone from "../../Examples/Phone/Phone";
import Swipe from "../../Examples/Swipe/Swipe";
import Numbers from '../../Examples/Numbers/Numbers'
import City from '../../Examples/City/City'
import Alchemist from '../../Examples/Alchemist/Alchemist'
import Earth from '../../Examples/Earth/Earth'
import Computer from '../../Examples/Computer/Computer'
import Biker from '../../Examples/Biker/Biker'
import Rabbits from '../../Examples/Rabbits/Rabbits'
import CircleDiagram from '../../Examples/CircleDiagram/CircleDiagram'
import Tree from '../../Examples/Tree/Tree'


const PrintImage = (props) => {

    const image = props.image;
    const alt = props.alt;
    const width = props.width;
    const type = props.type;

    if (image === 'Numbers') {
        return <Numbers />;
    } 
     //NEW CODE PENS GO HERE
    else if (image === 'City') {
        return <div className='City'><City /></div>;
    } 

    else if (image === 'Alchemist') {
        return <div className='Alchemist'><Alchemist /></div>;
    } 

    else if (image === 'Earth') {
        return <div className='Earth'><Earth /></div>;
    } 

    else if (image === 'Computer') {
        return <div className='Computer'><Computer /></div>;
    } 

    else if (image === 'Biker') {
        return <div className='Biker'><Biker /></div>;
    } 

    else if (image === 'Rabbits') {
        return <div className='Rabbits'><Rabbits /></div>;
    } 

    else if (image === 'CircleDiagram') {
        return <div className='CircleDiagram'><CircleDiagram /></div>;
    } 

    else if (image === 'Tree') {
        return <div className='Tree'><Tree /></div>;
    }

    //other pens here
    
    else if (image === 'Thermostat') {
        return <div className='thermostat'><Thermostat /></div>;
    } 
    
    else if (image === 'Phone') {
        return <div className='thermostat'><Phone /></div>;
    } 
    else if (image === 'Swipe') {
        return <Swipe />;
    } 
    
    else if (type === 'MC' || type === 'SA') {
        return (
            <img 
                src={image} 
                width={width} 
                alt={alt}
                style={{borderRadius: '20px'}}
            />
        );
    } 
    
    else {
        // set image dimensions + alt
        return (
            <img 
                src={image} 
                width={width} 
                alt={alt}
                style={{borderRadius: '20px', }}
            />
        );
    }

}

export default PrintImage;