const loginInput = document.querySelector("#login-form input");
const loginForm  = document.querySelector("#login-form"); 

function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(loginInput.value);
    // const username = loginInput.value;
    console.log(loginInput.value);
}


loginForm.addEventListener("submit", onLoginSubmit);

// functiondp () 즉시실행s