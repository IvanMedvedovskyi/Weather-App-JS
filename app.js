const apiKey = '7213143cbd4f174b431dca2af5390707';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const cityName = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector('.weather-icon')

async function getWeather(city) {
    const responseWeatherData = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await responseWeatherData.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    switch(data.weather[0].main){
        case 'Clouds':
            weatherIcon.src = 'images/clouds.png';
            break;
        case 'Clear':
            weatherIcon.src = 'images/clear.png';
            break;
        case 'Rain':
            weatherIcon.src = 'images/rain.png';
            break;
        case 'Drizzle':
            weatherIcon.src = 'images/drizzle.png';
            break;
        case 'Mist':
            weatherIcon.src = 'images/mist.png';
            break;
    }

    document.querySelector(".weather").style.display = 'block'
}

searchButton.addEventListener("click", ()=>{
    getWeather(cityName.value)
})

