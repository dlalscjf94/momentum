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
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove(CLASS_HIDDEN);
    localStorage.setItem(USERNAME_KEY, username);
    
}


loginForm.addEventListener("submit", onLoginSubmit);

const savedusername = localStorage.getItem(USERNAME_KEY);


if (savedusername == "") {
    loginForm.classList.remove("hidden");
} 
else {
    greet.classList.remove("hidden");
}

// functiondp () 즉시실행s