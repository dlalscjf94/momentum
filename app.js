const loginInput = document.querySelector("#login-form input");
const loginForm  = document.querySelector("#login-form"); 
const greeting = document.querySelector("#greet");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(loginInput.value);
    // const username = loginInput.value;
    console.log(loginInput.value);
    const username = loginInput.value;
    loginForm.classList.add(CLASS_HIDDEN);
    console.log(username);
    // greeting.innerText = "hello " + username;
    // backtic
    paintGreeting(username);    
    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreeting(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(CLASS_HIDDEN);
    
}


loginForm.addEventListener("submit", onLoginSubmit);

const savedusername = localStorage.getItem(USERNAME_KEY);

if (savedusername === null) {
    loginForm.classList.remove(CLASS_HIDDEN);
    loginForm.addEventListener("submit", onLoginSubmit);
}   
else {
    greeting.classList.add(CLASS_HIDDEN);
    paintGreeting(savedusername);
}

// functiondp () 즉시실행s