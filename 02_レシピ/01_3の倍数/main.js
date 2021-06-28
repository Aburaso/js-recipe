const Number=24;

if(Number%3===0){
    console.log(Number+"!!!!");
}

for(let n=1;n<=Number;n++){
    if(n%3===0){
        console.log(n+"!!!");
    }else{
        console.log(n);
    }
}

const genkiFunction=function(number){
    for(let n=1;n<=number;n++){
        if(n%3===0){
            console.log(n+"!!!");
        }else{
            console.log(n);
        }
    }
}