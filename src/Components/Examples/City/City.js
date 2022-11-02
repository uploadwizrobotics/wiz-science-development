import './City.css'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const City = () => {
    var text = ["Sustainable?", "it" , "sustain", "itself?"];
    var counter = 0;
    var elem = document.getElementById("txt");
    // var inst = setInterval(change, 1500);

    // function change() {
    //     elem.innerHTML = text[counter];
    //     counter++;
    //     if (counter >= text.length) {
    //         counter = 0;
    //     }
    // }

    // window.addEventListener("DOMContentLoaded", change);


		return(
			<div className='City'>
                <main>
                    <div class="way way-l">
                        <div class="cube">
                            <div class="cube__face cube__face--front">
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__door"></div>
                            </div>
                            <div class="cube__face cube__face--back">
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                            </div>
                            <div class="cube__face cube__face--right">
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                            </div>
                            <div class="cube__face cube__face--left">
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-4"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                            </div>
                            <div class="cube__face cube__face--top"></div>
                            <div class="cube__face cube__face--bottom"></div>
                        </div>
                    </div>
                    <div class="way way-r">
                        <div class="cube">
                            <div class="cube__face cube__face--front">
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__door"></div>
                            </div>
                            <div class="cube__face cube__face--back">
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                            </div>
                            <div class="cube__face cube__face--right">
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-4"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window "></div>
                            </div>
                            <div class="cube__face cube__face--left">
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-4"></div>
                            </div>
                            <div class="cube__face cube__face--top"></div>
                            <div class="cube__face cube__face--bottom"></div>
                        </div>
                        <div class="cube">
                            <div class="cube__face cube__face--front">
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-4"></div>
                                <div class="cube__door"></div>
                            </div>
                            <div class="cube__face cube__face--back">
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-2"></div>
                            </div>
                            <div class="cube__face cube__face--right">
                                <div class="cube__window cube__window-light-2"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-4"></div>
                                <div class="cube__window cube__window-light-1"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window "></div>
                            </div>
                            <div class="cube__face cube__face--left">
                                <div class="cube__window cube__window-light-5"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window "></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-3"></div>
                                <div class="cube__window"></div>
                                <div class="cube__window cube__window-light-4"></div>
                            </div>
                            <div class="cube__face cube__face--top"></div>
                            <div class="cube__face cube__face--bottom"></div>
                        </div>
                    </div>
                    <div class="bridge bridge-l">
                    </div>
                    <div class="bridge bridge-r"></div>
                    <span class="ad">KEMENDAG</span>
                    <span class="txt" id="txt">IS IT SUSTAINABLE?</span>

                    <div class="truck">
                        <div class="truck-f">
                            <div class="truck-f__face truck-f--front">
                                <div class="truck__handle"></div>
                            </div>
                            <div class="truck-f__face truck-f--back">
                                <div class="truck__handle"></div>
                            </div>
                            <div class="truck-f__face truck-f--left"></div>
                            <div class="truck-f__face truck-f--righ"></div>
                            <div class="truck-f__face truck-f--top"></div>
                            <div class="truck-f__face truck-f--bottom"></div>
                        </div>
                        <div class="truck-b">
                            <div class="truck-b__face truck-b--front">
                                <span class="truck__txt"></span>
                            </div>
                            <div class="truck-b__face truck-b--back">
                                <span class="truck__txt"></span>
                            </div>
                            <div class="truck-b__face truck-b--left"></div>
                            <div class="truck-b__face truck-b--right"></div>
                            <div class="truck-b__face truck-b--top"></div>
                            <div class="truck-b__face truck-b--bottom"></div>
                        </div>

                        <div class="truck-ls">
                            <div class="truck-l"></div>
                            <div class="truck-l"></div>
                            <div class="truck-l"></div>
                        </div>

                        <div class="truck-w truck-w--lf"></div>
                        <div class="truck-w truck-w--lb"></div>
                        <div class="truck-w truck-w--rf"></div>
                        <div class="truck-w truck-w--rb"></div>
                        <div class="truck-w truck-w--rf-2"></div>
                        <div class="truck-w truck-w--rb-2"></div>

                    </div>

                </main>
			</div>
		);
}

export default City;