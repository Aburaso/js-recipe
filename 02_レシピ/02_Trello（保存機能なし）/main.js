const inputElement=document.getElementById("input-todo");
const container=document.getElementById("cards-container");
const addButton=document.getElementById("add-button");

addButton.onclick=function(){
const card=createCard(inputElement.value)
    container.append(card)

    inputElement.value=""
}
const createCard=function(text){

const card=document.createElement("div")
 card.className="card"
 container.append(card)
const todo=document.createElement("div")
 todo.className="todo"
 todo.textContent=text
 card.append(todo)
const deleteButton=document.createElement("div")
 deleteButton.className="delete"
 card.append(deleteButton)

 deleteButton.onclick=function(){
     card.remove()
 }
 return card
}
