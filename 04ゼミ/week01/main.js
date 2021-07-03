const B_button=document.getElementById("basket-button");
        const BB_button=document.getElementById("baseball-button");
        const D_button=document.getElementById("dog-button");
        const C_button=document.getElementById("cat-button");

        B_button.onclick=function(){
            alert("正解");
        }
        BB_button.onclick=function(){
            alert("不正解");
        }

        D_button.onclick=function(){
            alert("正解");
        }
        C_button.onclick=function(){
            alert("不正解");
        }


const Roy={
    name:'ロイ',
    age:20,
    university:'立教',
    hoby:["バスケ","洋楽"],
    likeWord:"情熱",
    likeComedian:"サンドウィッチマン",
    likeColor:"緑",
    syuukatsu:"嫌",
    sayHello:function(){
        alert("こんにちは");
    },
}