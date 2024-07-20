const apiKey = "d8a66408ce7933d915b7d9ccbb85f671";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.getElementsByClassName('weather-icon')[0];

async function checkWeather(cityName){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else{
        document.querySelector('.error').style.display = "none";
        var data = await response.json();
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(parseInt(data.main.temp)) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == 'Clouds'){
            weatherIcon.src = "images/icons8-cloud-50.png"
        }
        else if(data.weather[0].main == 'Clear'){
            weatherIcon.src = "images/icons8-clear-sky-64.png";
        }
        else if(data.weather[0].main == 'Rain'){
            weatherIcon.src = "images/icons8-rain-50.png";
        }
        else if(data.weather[0].main == 'Mist'){
            weatherIcon.src = "images/icons8-mist-100.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            weatherIcon.src = "images/icons8-drizzle-50.png";
        }
    
        document.querySelector('.weather').style.display = "block";
    }
}

searchBtn.addEventListener('click', function(){
    const cityName = searchBox.value;
    checkWeather(cityName);
})

