
       for(let n=1;n<=100;n++){
            if(n%3===0){
                let id=setInterval(function(){
                    console.log(n+"!!!");
                    clearInterval(id);
                },n*1000);
            }else{
                let id2=setInterval(function(){
                    console.log(n);
                    clearInterval(id2);
                },n*1000);
            }
        }
    