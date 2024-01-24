const api_key = '4bacf38724a2b3143f5e8efcba658ff2';
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch (apiUrl);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".empty").style.display = "none";
    }else if(response.status == 400){
        document.querySelector(".empty").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";
    }
    else{
        var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main== "Clouds"){
        weatherIcon.src = "images/clouds.png"
}
else if(data.weather[0].main== "Clear"){
    weatherIcon.src = "images/clear.png"
}
else if(data.weather[0].main== "Rain"){
    weatherIcon.src = "images/rain.png"
}
else if(data.weather[0].main== "Mist"){
    weatherIcon.src = "images/mist.png"
}
else if(data.weather[0].main== "Drizzle"){
    weatherIcon.src = "images/drizzle.png"
}
document.querySelector(".weather").style.display = "block"
document.querySelector(".error").style.display = "none"
document.querySelector(".empty").style.display = "none"


    }
    
}

searchBtn.addEventListener("click", ()=>{

    checkWeather(searchBox.value);
    searchBox.value = "";
})
