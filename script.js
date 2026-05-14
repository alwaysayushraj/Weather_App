const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");

async function checkWeather(city) {
    if(city.trim() === ""){
    alert("Please enter a city name");
    return;
}

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerHTML = data.name + ", " + data.sys.country;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/hr";
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/022/287/801/small/3d-rendering-sun-covered-by-clouds-icon-3d-render-cloudy-weather-with-sun-icon-sun-covered-by-clouds-png.png";

    weatherCondition.innerHTML = "Cloudy";
}
else if(data.weather[0].main == "Clear") {
     weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/075/687/846/small/cheerful-cartoon-sun-with-sunglasses-and-cloud-png.png";

    weatherCondition.innerHTML = "Clear";
}
else if(data.weather[0].main == "Rain") {
    weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/024/825/182/small/3d-weather-icon-day-with-rain-free-png.png";

    weatherCondition.innerHTML = "Rainy";
}
else if(data.weather[0].main == "Drizzle") {
     weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/024/825/195/small/3d-weather-icon-day-with-rain-free-png.png";

    weatherCondition.innerHTML = "Drizzle";
}
else if(data.weather[0].main == "Mist") {
    weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/048/344/380/small/smooth-white-clouds-atmosphere-cutout-on-transparent-backgrounds-3d-render-png.png";

    weatherCondition.innerHTML = "Mist";
}
else if(data.weather[0].main == "Snow") {
     weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/031/426/710/small/file-of-3d-clouds-in-winter-with-falling-snow-and-crystal-snow-png.png";

    weatherCondition.innerHTML = "Snowy";
}
else if(data.weather[0].main == "Thunderstorm") {
     weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/053/336/595/small/strom-3d-illustration-free-png.png";

    weatherCondition.innerHTML = "Thunderstorm";
}
else {
     weatherIcon.src = "https://static.vecteezy.com/system/resources/thumbnails/054/647/399/small/smoky-white-clouds-cutout-transparent-backgrounds-3d-rendering-png.png";

    weatherCondition.innerHTML = data.weather[0].main;
};

document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


    

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}
);

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
}
);