const loginInput = document.querySelector("#login-form input");
const loginForm  = document.querySelector("#login-form"); 
const greeting = document.querySelector("#greet");

const CLASS_HIDDEN = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(loginInput.value);
    // const username = loginInput.value;
    console.log(loginInput.value);
    const username = loginInput.value;
    loginForm.classList.add(CLASS_HIDDEN);
    console.log(username);
    // greeting.innerText = "hello " + username;
    greeting.innerText = 'hello ${username}';
    greeting.classList.remove(CLASS_HIDDEN);
    
}


loginForm.addEventListener("submit", onLoginSubmit);

// functiondp () 즉시실행s