const apiKey = '63643e497c55ae8b4d2ea78b11409ee9'
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weatherIcon')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=` + apiKey)
    
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector('.weather').style.display = "none"
    } else {
        document.querySelector(".error").style.display = "none"
    }
    
    var data = await response.json()

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h'
    if (data.weather[0].main == 'Clear') {
        weatherIcon.src = "img/clear.png"
    } else if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = "img/clouds.png"
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "img/drizzle.png"
    } else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = "img/mist.png"
    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = "img/rain.png"
    } else if (data.weather[0].main == 'Snow') {
        weatherIcon.src = "img/snow.png"
    } else {
        weatherIcon.src = "img/clouds.png"
    }
    document.querySelector('.weather').style.display = "block"
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
