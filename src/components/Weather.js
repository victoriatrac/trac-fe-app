import React from "react"
import axios from "axios"

function ConvertCtoF(celcius) {
    const fahrenheit = (celcius * 9) / 5 + 32
    return fahrenheit
}

function Weather() {
    window.addEventListener('load', () => {
        
        if (navigator.geolocation) {
        
            const iconImg = document.getElementById('weather-icon')
            const loc = document.querySelector('#location')
            const tempC = document.querySelector('.c')
            const tempF = document.querySelector('.f')
            const min = document.querySelector('.min')
            const max = document.querySelector('.max')
            const desc = document.querySelector('.desc')
            const sunriseDOM = document.querySelector('.sunrise')
            const sunsetDOM = document.querySelector('.sunset')

            const options = {
                timeout: 5000
            }

            const apiKey = process.env.REACT_APP_WEATHER_API_KEY

            function success(pos) {
                const lon = pos.coords.longitude
                const lat = pos.coords.latitude

                axios
                    .all([
                        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`),
                        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`)
                    ])
                    .then(axios.spread((currentRes, futureRes) => {

                        const currentWeather = currentRes.data
                        const futureWeather = futureRes.data

                        console.log(`future Weather`)
                        console.log(futureWeather)

                        const { temp } = currentWeather.main
                        const place = currentWeather.name
                        const { description, icon } = currentWeather.weather[0]
                        const { sunrise, sunset } = currentWeather.sys
                        const tempMin = currentWeather.main.temp_min
                        const tempMax = currentWeather.main.temp_max

                        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

                        const sunriseGMT = new Date(sunrise * 1000)
                        const sunsetGMT = new Date(sunset * 1000)

                        iconImg.src = iconUrl;
                        loc.textContent = `${place}`;
                        desc.textContent = `${description}`;
                        tempC.textContent = `${temp.toFixed(0)} °C`;
                        tempF.textContent = `${ConvertCtoF(temp).toFixed(0)} °F`
                        min.textContent = `${ConvertCtoF(tempMin).toFixed(0)}`
                        max.textContent = `${ConvertCtoF(tempMax).toFixed(0)}`
                        sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                        sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
                    }))
            }

            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`)
            }

            navigator.geolocation.getCurrentPosition(success, error, options)
        }
    
    })

    return (
        <div className="weatherContainer">
            <img src="" alt="" id="weather-icon" />
            <div id="location">Fetching weather failed</div>
            <div className="desc">No information available</div>
            <div className="weather">
                <div className="c">Error</div>
                <div className="circle"></div>
                <div className="f">Error</div>
            </div>
            <div className="day">
                <div className="min">Error</div>
                <div className="max">Error</div>
            </div>
            <div className="info">
                <h4>Sunrise: <span className="sunrise">No info</span></h4>
                <h4>Sunset: <span className="sunset">No info</span></h4>
            </div>
        </div>
    )
}

export default Weather