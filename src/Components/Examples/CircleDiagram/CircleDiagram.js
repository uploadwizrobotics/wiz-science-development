import './CircleDiagram.css'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
// import { ControlCamera } from '@mui/icons-material';
gsap.registerPlugin(Draggable);

const CircleDiagram = () => {
		//COPIED JS CODE GOES HERE

		return(
            /*
            *climate control
            *recycling vital chemicals
            *renewable energy sources
            *Soil formation and renewal
            *air/water purification
            *non renewable energy sources
            *natural pest and disease control
            *gene pool
            *waste removal/detoxification
            */
			<div className='CircleDiagram'>
                    <dl class="skills-diagram">
                    <dt class="skill-5">Renewable energy sources</dt>
                    <dd>5</dd>
                    <dt class="skill-10">Waste removal</dt>
                    <dd>10</dd>
                    <dt class="skill-3">Mineral resources</dt>
                    <dd>3</dd>
                    <dt class="skill-4">Recyling chemicals</dt>
                    <dd>4</dd>
                    <dt class="skill-6">Water purification</dt>
                    <dd>6</dd>
                    <dt class="skill-7">Gene pool</dt>
                    <dd>7</dd>
                    <dt class="skill-2">Soil renewal</dt>
                    <dd>2</dd>
                    </dl>
			</div>
		);
}

export default CircleDiagram;