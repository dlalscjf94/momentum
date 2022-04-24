const loginInput = document.querySelector("#login-form input");
const loginForm  = document.querySelector("#login-form"); 
const greeting = document.querySelector("h1#greet");
const clock = document.querySelector("h2#clock");

const CLASS_HIDDEN = "hidden";
const USERNAME_KEY = "username";

//date
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

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}: ${minutes}: ${seconds}`;
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
    setInterval(getClock, 1000);
}





// functiondp () 즉시실행s