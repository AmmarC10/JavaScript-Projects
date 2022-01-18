const API = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JEquVHg6wHxF2agIc7XpQMwdaus46Kf11nynhfTQ"

async function sendRequest(){
    let response = await fetch(API);
    let info = await response.json();
    let items = info.photos.slice(0, 10);
    console.log(items);
    items.map( item => {
        createPosts(item);
    })
    
    checkLikes();
    
}

function createPosts(items) {
    var ul = document.querySelector(".content");
    var li = document.createElement("li");
    li.innerHTML = `
    <h2>${items.rover.name} Rover - ${items.camera.full_name} (Picture id: ${items.id})</h2>
    <img src="${items.img_src}" alt = "Picture by ${items.rover.name} Rover on the Moon"/>
    <p>${items.earth_date}</p>
    <button class= "btn liked"><i class="fas fa-heart"></i></i></button>
    `
    ul.appendChild(li);
    
}

sendRequest();


const checkLikes = () => {
    var btns = document.querySelectorAll(".btn");
    console.log(btns);
    btns.forEach(btn => {
        btn.addEventListener("click", event => {
            btn.classList.toggle("liked")
        })
    })
}




