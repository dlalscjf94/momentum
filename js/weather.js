const API_KEY = '88ec9091a206ec6c95e0932f547a1fb2';


function onGeoOk(position) {
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng); 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    console.log(url);
    // js call, request url
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
        console.log(data.name, data.weather[0].main);
        const weather = document.querySelector("#weather span:first-child"); 
        const city = document.querySelector("#weather span:last-child"); 
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you, No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//openweathermap.org