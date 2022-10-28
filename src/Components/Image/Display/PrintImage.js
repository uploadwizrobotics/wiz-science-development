/* --------- DISPLAY IMAGE --------- */ 
import Thermostat from "../../Examples/Thermostat/Thermostat";
import Phone from "../../Examples/Phone/Phone";
import Swipe from "../../Examples/Swipe/Swipe";
import Numbers from '../../Examples/Numbers/Numbers'


const PrintImage = (props) => {

    const image = props.image;
    const alt = props.alt;
    const width = props.width;
    const type = props.type;

    if (image === 'Numbers') {
        return <Numbers />;
    } else if (image === 'Thermostat') {
        return <div className='thermostat'><Thermostat /></div>;
    } else if (image === 'Phone') {
        return <div className='thermostat'><Phone /></div>;
    } else if (image === 'Swipe') {
        return <Swipe />;
    } else if (type === 'MC' || type === 'SA') {
        return (
            <img 
                src={image} 
                width={width} 
                alt={alt}
                style={{borderRadius: '20px'}}
            />
        );
    } else {
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