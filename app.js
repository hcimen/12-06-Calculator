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