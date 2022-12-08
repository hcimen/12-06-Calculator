let x=document.getElementById("text");
    
function my1(v){
x.value+=v;
}

function exe(){
x.value=eval(x.value);
}

function cls(){
x.value="";
}

function cancel(){
x.value=x.value.substr(0,x.value.length-1);
}

function percent(){
x.value = eval(x.value)  * 1/100 ;
}

function exponent(){
x.value=eval(x.value);
x.value = eval(x.value * x.value);
}

function pi(){
var π = 3.1415;
x.value+=π;
}

function permille(){
x.value = eval(x.value)  * 1/1000 ;
}

function sqrt(){
x.value = eval(Math.sqrt(x.value)) ;
}

function minus(){
x.value = eval(x.value)  * -1 ;
}

function abs(){
x.value = eval(Math.abs(x.value)) ;
}

function parse() {
x.value = parseFloat(x.value).toFixed(2) ;  
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      x.value="";
      return;
    }
    if (event.key === 'Enter') {
      x.value=eval(x.value);
      return;
    }
    if (event.key === 'Backspace') {
      x.value=x.value.substr(0,x.value.length-1);
      return;
    }
    if (event.key === '0') {
      x.value+=0;
      return;
    }
    if (event.key === '1') {
      x.value+=1;
      return;
    }
    if (event.key === '2') {
      x.value+=2;
      return;
    }
    if (event.key === '3') {
      x.value+=3;
      return;
    }
    if (event.key === '4') {
      x.value+=4;
      return;
    }
    if (event.key === '5') {
      x.value+=5;
      return;
    }
    if (event.key === '6') {
      x.value+=6;
      return;
    }
    if (event.key === '7') {
      x.value+=7;
      return;
    }
    if (event.key === '8') {
      x.value+=8;
      return;
    }
    if (event.key === '9') {
      x.value+=9;
      return;
    }
    if (event.key === '+') {
      x.value+='+';
      return;
    }
    if (event.key === '/') {
      x.value+='/';
      return;
    }
    if (event.key === '*') {
      x.value+='*';
      return;
    }
    if (event.key === '-') {
      x.value+='-';
      return;
    }
    if (event.key === 'Shift') {
      x.value = parseFloat(x.value).toFixed(2) ;
      return;
    }
  }, false);