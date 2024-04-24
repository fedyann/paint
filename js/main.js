const config = {
    'lineSize': 5,
    'color': 'black'
}
window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const indicator = document.getElementById('indicator');
    
    canvas.setAttribute('width', window.innerWidth);
    canvas.setAttribute('height', window.innerHeight);

    ctx.lineWidth = config.lineSize;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = config.color;
    ctx.fillStyle = config.color;

    document.ontouchmove = function(e){ e.preventDefault(); }
    var canvastop = canvas.offsetTop
  
    var context = canvas.getContext("2d");
  
    var lastx;
    var lasty;
  
    function clear() {
      context.fillStyle = "#ffffff";
      context.rect(0, 0, 300, 300);
      context.fill();
    }
  
    function dot(x,y) {
      context.beginPath();
      context.fillStyle = "#000000";
      context.arc(x,y,1,0,Math.PI*2,true);
      context.fill();
      context.stroke();
      context.closePath();
    }
  
    function line(fromx,fromy, tox,toy) {
      context.beginPath();
      context.moveTo(fromx, fromy);
      context.lineTo(tox, toy);
      context.stroke();
      context.closePath();
    }
  
    canvas.ontouchstart = function(event){                   
      event.preventDefault();                 
      
      lastx = event.touches[0].clientX;
      lasty = event.touches[0].clientY - canvastop;
  
      dot(lastx,lasty);
    }
  
    canvas.ontouchmove = function(event){                   
      event.preventDefault();                 
  
      var newx = event.touches[0].clientX;
      var newy = event.touches[0].clientY - canvastop;
  
      line(lastx,lasty, newx,newy);
      
      lastx = newx;
      lasty = newy;
    }
  
  
    var clearButton = document.getElementById('clear')
    clearButton.onclick = clear
  
    clear()
  }
