import './BigBang.css';


const BigBang = () => {
	var pos = 44;
	const slide = () => {
	  var outer = document.getElementsByClassName("outer")[0];
	  var body = document.getElementsByTagName("body")[0];
	  
	  outer.classList.toggle("day");
	  outer.classList.toggle("night");
	  var slider = document.getElementsByClassName("slider")[0];
	  slider.style.transform = `translateX(${pos}px)`;
	  pos = -pos;
	}

return (	
	
<div class="outer center day">
  <div class="slider center" onClick={slide}></div>
</div>

	)


}
 
export default BigBang;