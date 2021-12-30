const GITAPI = 'https://api.github.com/users/'

const main = document.querySelector(".main")
const form = document.querySelector(".form")
const search = document.querySelector(".search")

function createUserCard(user) {
    const info = `
        <div class = "card">
            <div class = "img-container">
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class = "user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="list">
                    <li>Followers: ${user.followers}</li>
                    <li>Following: ${user.following}</li>
                    <li>Repos: ${user.public_repos}</li>
                </ul>
                <div class = "repos">
                </div>
            </div>
        </div>
    `;

    
    main.innerHTML = info;
    
}


async function getUser(user) {
    const resp = await fetch(GITAPI + user)
    const respData = await resp.json();

    createUserCard(respData);
    
    
}


form.addEventListener('submit', e => {
    e.preventDefault();
    const user = search.value; 

    if(user) {
        getUser(user);
        search.value = "";
    }
})
