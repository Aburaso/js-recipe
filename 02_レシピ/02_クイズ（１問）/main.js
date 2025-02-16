const button1=document.getElementById("choice-1")
const button2=document.getElementById("choice-2")
const button3=document.getElementById("choice-3")
const feedBack=document.getElementById("feedback")
const quizText=document.getElementById("quiz-text")
const quizImage=document.getElementById("quiz-image")

const quiz={
    text:"この星の名前は何でしょう？",
    image:"Ganymede.jpg",
    choices:[
        {
        text:"ゴリアテ",
        feedback:"残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
        },

        {
        text:"ゼニガメ",
        feedback:"残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
        },
　　　　 {
        text:"ガニメデ",
        feedback:"正解！ガニメデは、木星の第三惑星だよ！",
        },
    ]
}

const reloadQuiz= function(){
    quizText.textContent="Q"+quiz.text
    quizImage.src="./images/"+quiz.image
    button1.textContent=quiz.choices[0].text
    button2.textContent=quiz.choices[1].text
    button3.textContent=quiz.choices[2].text
}

const choose=function(chooseNumber){
    feedBack.textContent=quiz.choices[chooseNumber].feedback
}

button1.onclick=function(){
    choose(0)
}

button2.onclick=function(){
    choose(1)
}

button3.onclick=function(){
    choose(2)
}
reloadQuiz()

