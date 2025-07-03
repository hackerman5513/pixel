canvas = document.createElement('canvas');
canvas.style.border = '1px solid red';
document.body.appendChild(canvas);
ctx = canvas.getContext('2d');


canvas2 = document.createElement('canvas');
canvas2.style.border = '1px solid red';
document.body.appendChild(canvas2);
ctx2 = canvas2.getContext('2d');


click_objects = [];

let w = canvas.width/30;
for(let i = 0; i < 30; i++){
 let colors = ['red','blue','orange','violet','green'];
 let color = colors[i%6];
 ctx.fillStyle = color;
 ctx2.fillStyle = color;
 let a = Math.random()*150;
 let b = 150-a;
 ctx.fillRect(i*w,a,w,b);
 ctx2.fillRect(i*w,a,w,b); 
click_objects.push([i*w,a,w,b,color]);
}

canvas.onmousemove = (e) => {
 let [x,y] = [e.offsetX, e.offsetY];
 
for(let o of click_objects)
  if(in_object(x,y,...o))
   blink(...o);
};

in_object = (mx,my,x,y,w)=>(mx>x && mx < (x+w) && my > y);

colors = [];   

blink = (x, y, w, h,color) => {
  ctx.fillStyle = 'red';
  ctx.fillRect(x, y, w, h);
 
  setTimeout(() => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  }, 1000);
};


// todo check the bug - browser source code ant internals 
