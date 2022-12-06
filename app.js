<script>
    
var val=document.getElementById("text");

function myfunctiondisplay(v){
val.value+=v;
}


function cls(){
val.value="";
}

function exe(){
val.value=eval(val.value);
}


function cancel(){
val.value=val.value.substr(0,val.value.length-1);
}

function off(){
document.getElementById('text').style.display='none';
}

</script>