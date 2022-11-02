import './Computer.scss'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const Computer = () => {

		return(
			<div id="computer">
                <div id="side"></div>
                <div id="top"></div>
                <div id="front"></div>
                <div id="screen"></div>
                <div id="text">
                    <div>$&nbsp;S&#8203;N&#8203;C&#8203;1&#8203;W</div>
                    <div>1&#8203;0&#8203;%&#8203; C&#8203;o&#8203;d&#8203;i&#8203;n&#8203;g&#8203; P&#8203;r&#8203;o&#8203;j&#8203;e&#8203;c&#8203;t</div>
                    <div>T&#8203;u&#8203;e J&#8203;a&#8203;n 2 0&#8203;9&#8203;:&#8203;0&#8203;0&#8203;:&#8203;0&#8203;0</div>

                </div>
                <div id="button"></div>
                </div>
		);
}

export default Computer;