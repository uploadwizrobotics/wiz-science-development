import './Electricity.css';

const Electricity = () => {
    var canvas, c, electrode1, electrode2, particleCount, v;
    const colors = ['#2962ff', '#0091ea', '#00b8d4'];
    var mouse = {
      x: undefined,
      y: undefined
    }
    
    var hop = 0.01;
    
    var v = {
      x: undefined,
      y: undefined
    }
    var deX, deY;
    
    var speed = -2, counter = speed;
    function _(elm){ return document.querySelector(elm); }
    function resizeCanvas(){
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }
    window.addEventListener('load', function(){
      // canvas
      canvas = _('canvas');
      // resize
      
      window.addEventListener('resize', resizeCanvas);
      // ctx
      c = canvas.getContext('2d');
      init();
      animate();
      resizeCanvas();
      // retrieve mouse position
      window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
      });
    });
    function randomIntFromRange(min, max){
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function init(){
      let electrodes = [];
      let particleCount = 2;
      var x = (canvas.width/20) * 4,
          y = canvas.height/2,
          r = 4, color, rad;
      
      mouse.x = x;
      mouse.y = y;
          
      color = colors[Math.floor(Math.random() * colors.length)];
      electrode1 = new Electrode(x, y, r, color, rad);
      rad = Math.random() * Math.PI * 2;
      x = (canvas.width / 20) * 16; 
      color = colors[Math.floor(Math.random() * colors.length)];
      electrode2 =  new Electrode(x, y, r, color, rad);
    }
    
    
    function Electrode(x, y, r, color, rad){
      
      this.x = x;
      this.y = y;
      this.lastX = x;
      this.lastY = y;
      this.r = r;
      this.color = '#639cf2';
    
      this.radians = rad;
      this.velocity = 0.05; 
      this.dev = randomIntFromRange(50, 120);
      this.lastMouse = {x: x, y: y};
      
      this.last = {x:x, y:y};
      this.next = {x:x, y:y};
      
      this.dir = 1;
      
      
      this.draw = function(){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);  
        c.fill();
        c.closePath();
      };
      this.drawElectric = function(lw){
        
        this.next.x = this.last.x + (hop * v.x );
        this.next.y = this.last.y + (hop * v.y );
      
        
        if(this.next.x > electrode2.x) this.next.x = electrode2.x;
        
        if(this.next.x == electrode2.x && this.next.y != electrode2.y){
          this.next.y = electrode2.y;
        } 
        
        
        c.beginPath();
        c.strokeStyle = this.color;
        //c.lineWidth = getDistance(this.x, this.y, mouse.x, mouse.y)/ 1000;
        c.lineWidth = lw;
        
        c.moveTo(this.last.x, this.last.y);
        
        deX = this.next.x - this.last.x;
        deY = this.next.y - this.last.y;
        
        
        c.lineTo(this.last.x + (Math.random() * deX), this.last.y + ( Math.random() * deY + Math.random() * 15)) ;
        
        c.lineTo(this.next.x, this.next.y);
        
        c.stroke();
        
        this.last.x = this.next.x;
        this.last.y = this.next.y;
        
        hop = hop + 0.01;
        if(electrode2.x - electrode1.next.x > 1){
          this.drawElectric();
        }
      };
      this.update = function(){
        
        this.draw();
      };
    }
    
    function animate(){
      requestAnimationFrame(animate);
      // clear all
      //c.clearRect(0, 0, canvas.width, canvas.height);
      
      // overwrite with opaque white - trail effect
      c.fillStyle = 'rgb(255,255,255)';
      c.fillRect(0, 0, canvas.width, canvas.height);
      electrode2.update();
      electrode1.update();
      electrode1.x = mouse.x;
      electrode1.y = mouse.y;
      
      v.x = (electrode2.x - electrode1.x) ;
      v.y = (electrode2.y - electrode1.y) ;
      
      speed = -1 + Math.random();
      if(counter >= 0){
        electrode1.next.x = electrode1.x;
        electrode1.next.y = electrode1.y;
        
        electrode1.last.x = electrode1.x;
        electrode1.last.y = electrode1.y;
        
        hop = 0.01;
        
        electrode1.drawElectric(2);
      }
      counter = counter >= 0 ? speed : ++counter;  
    }
    
    function getDistance(x1, y1, x2, y2){
      var xDist = x2 - x1,
          yDist = y2 - y1;
      
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
      
    }
    return(
        <div className='Electricity'>
            <canvas></canvas>
        </div>
    )
}

export default Electricity;