import { useEffect } from 'react';
import './Pikachu.css';

const Pikachu = () => {
useEffect(() => {
	var mouseX = 0;
var mouseY = 0;

document.getElementById("box").onmousemove = 
function mouseMove(e){
  var box = document.getElementById("box");
  var rect = box.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  mouseX = e.clientX - left;
  mouseY = e.clientY - top;
};


class massPoint {
  constructor(d){
    this.X = 0.0;
    this.Y =  0.0;
    this.velocityX = 0.0;
    this.velocityY = 0.0;
    this.forceX = 0.0;
    this.forceY = 0.0;
    this.mass = 0.01;
    this.frct = 0.1;
    this.deltaT = d;  
  }
  calculateForce(extForceX, extForceY){
    this.forceX =  extForceX - this.frct*this.velocityX;
    this.forceY =  extForceY - this.frct*this.velocityY;
  }
  calculateVelocity(){
    this.velocityX = this.velocityX + this.forceX/this.mass * this.deltaT;
    this.velocityY = this.velocityY + this.forceY/this.mass * this.deltaT;
  }
  calculatePosition() {
    this.X = this.X + this.velocityX * this.deltaT;
    this.Y = this.Y + this.velocityY * this.deltaT;
  }
}


var elct = 10.0;       //electrostatic force
var intervalTime = 20;   // interval time  (ms)
var N = 200; 
var size = 500.0;



var ball = new Array(N);
var circlesHTML ="";


for(var i = 0; i < N; i++){
  var x = Math.random()*500;
  var y = Math.random()*500;
  
  ball[i] = new massPoint(intervalTime*0.001);
  ball[i].X = x;
  ball[i].Y = y;
  
  circlesHTML = circlesHTML + '<circle   cx="' + x + '" cy='+ y +' r="1" stroke-width ="3" stroke="black" fill="black" fill-opacity="1.0" id="circle'+ (i+1) + '"/>';
}

document.getElementById("circles").innerHTML = circlesHTML;
 
  
setInterval(
  function(){
    
    var i = 0;
    for(i = 0; i < N ;i++){
      var rx = ball[i].X - mouseX;
      var ry = ball[i].Y - mouseY;
      var r = Math.sqrt(rx**2 + ry**2);
      var uvx = rx/r;
      var uvy = ry/r;
    
      ball[i].calculateForce(elct*uvx*bump(r/80), elct*uvy*bump(r/80));
      ball[i].calculateVelocity(); 
      ball[i].calculatePosition(); 
   
      document.getElementById("circle" + (i+1)).style.cx = Math.round(ball[i].X);
      document.getElementById("circle"+ (i+1)).style.cy = Math.round(ball[i].Y);
    }
  }, intervalTime);


function bump(r){
  //bump function
  if(Math.abs(r) >= 1.0)return 0.0;
  var s = Math.exp(-(1/(1-r**2))) / Math.exp(-1);
  return s;
}
})
return (
	<center>
    <svg height="500" width="500" id="box">
      <g id="circles"></g>
    </svg>
</center>
)
}

export default Pikachu;