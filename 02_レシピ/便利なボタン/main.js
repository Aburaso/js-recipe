let display=document.getElementById("display");
let button=document.getElementById("button");
let button2=document.getElementById("button2");
let button3=document.getElementById("button3");

let count=0;

button.onclick=function(){
    count=count+1;
    display.textContent=count;
}
button2.onclick=function(){
    count=count-1;
    display.textContent=count;
}
button3.onclick=function(){
    count=count*2;
    display.textContent=count;
}