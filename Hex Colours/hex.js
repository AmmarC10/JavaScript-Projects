const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".btn");
const choicebtn = document.querySelector(".choice");
const colour = document.querySelector(".colour");
const inputfield = document.querySelector(".inputfield");

function getRandom(){
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function(){
    let hexval = '#';
    for (let c = 0; c < 6; c++){
        hexval += hex[getRandom()];
    }
    colour.textContent = hexval;
    document.body.style.backgroundColor = hexval;
})


choicebtn.addEventListener('click', function(e){
    e.preventDefault();
    let hexval = inputfield.value;
    colour.textContent = hexval;
    document.body.style.backgroundColor = hexval;
    inputfield.value = "";
})
