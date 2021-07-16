const figure=document.getElementById("figure");

let count=0;

figure.onclick=function(){
    count=count+1;
    if(count==1){
        figure.classList.add("rounded");
    }else if(count==2){
        figure.classList.remove("square");
        figure.classList.remove("rounded");
        figure.classList.add("triangle");
        
    }else if(count==3){
        count=count-3;
        figure.classList.remove("rounded");
        figure.classList.remove("triangle");
        figure.classList.add("square");
    }
}