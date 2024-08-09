const apiKey = "ffe27fe0c6391c65ae1f8e0b5ea508c2";
const Url = "https://api.openweathermap.org/data/2.5/weather?q=";
const cityName = document.querySelector(".inputText");
const searchBtn = document.querySelector(".search button");
const wheatherIcon = document.querySelector('.wheather-icon');
async function checkWheather(cityName) {
    const response = await fetch(Url+`${cityName}`+`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".wheather").style.display = "none";
    }else{
    var data = await response.json();

    console.log(data)
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273.15) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        wheatherIcon.src = "images/clouds.png"
    }else if(data.weather[0].main == "Clear"){
         wheatherIcon.src = "images/clear.png"
    }else if(data.weather[0].main == "Rain"){
         wheatherIcon.src = "images/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
         wheatherIcon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        wheatherIcon.src = "images/mist.png"
   }
    }
    
}

searchBtn.addEventListener("click",()=>{
   
    checkWheather(cityName.value);
    document.querySelector(".wheather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    
})