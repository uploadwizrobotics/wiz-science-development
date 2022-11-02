/* --------- DISPLAY IMAGE --------- */
import Thermostat from "../../Examples/Thermostat/Thermostat";
import Phone from "../../Examples/Phone/Phone";
import Swipe from "../../Examples/Swipe/Swipe";
import Numbers from '../../Examples/Numbers/Numbers'
import PlanetToy from "../../PlanetToy/PlanetToy";
import Planet from "../../Planet/Planet";
import BigBang from "../../BigBang/BigBang";
import Electricity from '../../Electricity/Electricity';
import Charger from "../../Charger/Charger";
import Pikachu from "../../Pikachu/Pikachu";
import ElectricString from "../../ElectricString/ElectricString";
import LightSwitch from "../../LightSwitch/LightSwitch";
import Solid from '../../Solid/Solid';
import Liquid from '../../Liquid/Liquid';
import Gas from "../../Gas/Gas";
import Builder from '../../Builder/Builder';
import Particles from '../../Particles/Particles';


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
    }
    else if (image === 'PlanetToy') {
        return <PlanetToy/>
    }
    else if (image === 'Planet') {
        return <Planet/>
    }
    else if (image === "BigBang") {
        return <BigBang/>
    }
    else if (image === "Electricity") {
        return <Electricity/>
    }
    else if (image === "Charger") {
        return <Charger/>
    }
    else if (image === "Pikachu") {
        return <Pikachu/>
    }
    else if (image === "ElectricString") {
        return <ElectricString/>
    }
    else if (image === "LightSwitch") {
        return <LightSwitch/>
    }
    else if (image === "Solid") {
        return <Solid/>
    }
    else if (image === "Liquid") {
        return <Liquid/>
    }
    else if (image === "Gas") {
        return <Gas/>
    }
    else if (image === "Builder") {
      return <Builder/>
    }
    else if (image === "Particles") {
        return <Particles/>
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
