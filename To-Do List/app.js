const addToDoButton = document.querySelector('#addToDo');
const toDoContainer = document.querySelector('#toDoContainer');
const inputfield = document.querySelector('#inputfield');

addToDoButton.addEventListener('click', function(){
    event.preventDefault();
    var paragraph = document.createElement("P");
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    toDoContainer.appendChild(paragraph);
    inputfield.value="";

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})
