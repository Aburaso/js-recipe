const display=document.getElementById("display");
const pulsbutton=document.getElementById("plus-button");

let count=0;

pulsbutton.onclick=function(){
   count+=1;
   display.textContent = count;
}