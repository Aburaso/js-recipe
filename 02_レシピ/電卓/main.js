const display=document.getElementById("display");
const display2= document.getElementById("display2");
const ba= document.getElementById("waru");
const bb= document.getElementById("kakeru");
const bc= document.getElementById("tasu");
const bd= document.getElementById("hiku");
const be= document.getElementById("all-clear");
const bg= document.getElementById("iqual");

let C=0;

ba.onclick=function(){
   C=1;
}
bb.onclick=function(){
   C=2;
}
bc.onclick=function(){
   C=3;
}
bd.onclick=function(){
   C=4;
}
be.onclick=function(){
   display.value="";
   display2.value="";
}

bg.onclick=function(){
   let Nd=parseFloat(display.value);
   let Nd2=parseFloat(display2.value);
   let D=0;
   const getAct=function(){
      switch(C){
         case 1:D=1;
         break;
         case 2:D=2;
         break;
         case 3:D=3;
         break;
         case 4:D=4;
         break;
         default:alert("エラー");
      }
   }
    getAct();
   let Result=0;
   const getResult=function(){
      switch(D){
         case 1:
          let result=Nd/Nd2
          Result=result;
          break;
         case 2:
          let result2=Nd*Nd2
          Result=result2;
          break;
         case 3:
          let result3=Nd+Nd2
          Result=result3;
          break;
         case 4:
          let result4=Nd-Nd2
          Result=result4;
          break;
         default:alert("エラー");
    }
 }
 getResult();
 let fResult=Result;
 alert(fResult);
}
 




