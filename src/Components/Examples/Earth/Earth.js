import './Earth.css'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const Earth = () => {

    return (
        <div className='Earth'>
            <div class="canvas">
                <div class="earth">
                    <div class="land-big na">
                    <div class="land l-1"></div>
                    <div class="land-join"></div>
                    <div class="land l-2"></div>
                    </div>
                    <div class="land-big sa">
                    <div class="land l-1"></div>
                    <div class="land-join"></div>
                    <div class="land l-2"></div>
                    </div>
                    <div class="land-big ce">
                    <div class="land l-1"></div>
                    <div class="land-join"></div>
                    <div class="land-join j-2"></div>
                    <div class="land l-2"></div>
                    <div class="land l-3"></div>
                    </div>
                    <div class="land-big a">
                    <div class="land l-1"></div>
                    <div class="land-join"></div>
                    <div class="land l-2"></div>
                    </div>
                    <div class="land ne"></div>
                    <div class="land au"></div>
                    <div class="land np"></div>
                    <div class="land sp"></div>
                    <div class="cloud-wrapper">
                    <div class="cloud c1"></div>
                    <div class="cloud c2"></div>
                    <div class="cloud c3"></div>
                    <div class="cloud c4"></div>  
                    <div class="cloud c5"></div>  
                    <div class="cloud c6"></div>  
                    <div class="cloud c7"></div>  
                    <div class="cloud c8"></div>  
                    </div>
                </div>
                <div class="shine"></div>
                <div class="ellipsis">
                    <div class="rotate-moon">
                    <div class="counter-rotate-moon">
                        <div class="moon">
                        <div class="crater c1"></div>
                        <div class="crater c2"></div>
                        <div class="crater c3"></div>
                        <div class="crater c4"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Earth;