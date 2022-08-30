import './Biker.css'
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const Biker = () => {
		//COPIED JS CODE GOES HERE

		return(
			<div className='Biker'>
                <div class="bike">
                    <div class="bike__cloud-1"></div>
                    <div class="bike__cloud-2"></div>
                    <div class="bike__cloud-3"></div>
                    <div class="bike__bike">
                        <div class="bike__wheel">
                        <div class="bike__needle"></div>
                        <div class="bike__needle"></div>
                        <div class="bike__needle"></div>
                        </div>
                        <div class="bike__wheel">
                        <div class="bike__needle"></div>
                        <div class="bike__needle"></div>
                        <div class="bike__needle"></div>    
                        </div>
                        <div class="bike__down-tube"></div>
                        <div class="bike__tubes">
                        <div class="bike__chain"></div>
                        <div class="bike__seat-stays"></div>
                        <div class="bike__chain-stays"></div>
                        <div class="bike__seat-tube"></div>
                        <div class="bike__star">
                            <div class="bike__pedal"></div>    
                        </div>
                        <div class="bike__seat"></div>    
                        </div>
                        <div class="bike__top-tube"></div>
                        <div class="bike__fo"></div>
                        <div class="bike__head-tube"></div>
                        <div class="bike__helm"></div>
                        <div class="bike__lock"></div>    
                    </div>
                    <div class="bike__man">
                        <div class="bike__arm">
                        <div class="bike__forearm">
                            <div class="bike__hand"></div>    
                        </div>
                        <div class="bike__sleeve"></div>    
                        </div>
                        <div class="bike__back-leg">
                        <div class="bike__shin">
                            <div class="bike__skin"></div>
                            <div class="bike__ked"></div>    
                        </div>    
                        </div>
                        <div class="bike__butt"></div>
                        <div class="bike__front-leg">
                        <div class="bike__shin">
                            <div class="bike__skin"></div>
                            <div class="bike__ked"></div>    
                        </div>    
                        </div>
                        <div class="bike__shirt">
                        <div class="bike__collar"></div>    
                        </div>
                        <div class="bike__arm">
                        <div class="bike__forearm">
                            <div class="bike__hand"></div>    
                        </div>
                        <div class="bike__sleeve"></div>    
                        </div>
                        <div class="bike__head">
                        <div class="bike__eye"></div>
                        <div class="bike__eye"></div>
                        <div class="bike__whisker"></div>
                        <div class="bike__nose"></div>
                        <div class="bike__month"></div>
                        <div class="bike__whisker"></div>
                        <div class="bike__cap">
                            <div class="bike__peak">
                            <div class="bike__peak-parts"></div>   
                            </div>    
                        </div>
                        </div>
                    </div>    
                    </div>
			</div>
		);
}

export default Biker;