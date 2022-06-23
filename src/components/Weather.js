import React from 'react'
import axios from 'axios'

import './components.css'
import './weather.css'

import arrow from '../images/arrow-up.svg'

// helper function for temp conversion
function ConvertCtoF(celcius) {
  const fahrenheit = (celcius * 9) / 5 + 32
  return fahrenheit
}

function Weather() {
  window.addEventListener('load', () => {
    if (navigator.geolocation) {
    
      const iconImg = document.getElementById('weather-icon-img')
      const loc = document.querySelector('#weather-location')
      const tempF = document.querySelector('#weather-f')
      const feelsLike = document.querySelector('#weather-feels')
      const min = document.querySelector('#weather-min')
      const max = document.querySelector('#weather-max')
      const desc = document.querySelector('#weather-desc')
      const sunriseDOM = document.querySelector('#weather-sunrise')
      const sunsetDOM = document.querySelector('#weather-sunset')

      const options = {
        timeout: 5000
      }

      const apiKey = process.env.REACT_APP_WEATHER_API_KEY

      function success(pos) {
        const lon = pos.coords.longitude
        const lat = pos.coords.latitude

        axios
          .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
          // .all([
          //     axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`),
          //     axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=metric`)
          // ])
          // .then(axios.spread((currentRes, futureRes) => {
          .then((currentRes) => {

            const { weather, main, sys, name} = currentRes.data
            // const futureWeather = futureRes.data
            
            const { temp, feels_like, temp_min, temp_max } = main
            const place = name
            const { description } = weather[0]
            const { sunrise, sunset } = sys

            const iconUrl = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
              weather[0]["icon"]
            }.svg`

            const sunriseGMT = new Date(sunrise * 1000)
            const sunsetGMT = new Date(sunset * 1000)

            iconImg.src = `${iconUrl}`;
            loc.textContent = `${place}`;
            desc.textContent = `${description}`;
            tempF.textContent = `${ConvertCtoF(temp).toFixed(0)}°F`
            feelsLike.textContent = `Feels like ${ConvertCtoF(feels_like).toFixed(0)}°F`
            max.textContent = `${ConvertCtoF(temp_max).toFixed(0)}°F`
            min.textContent = `${ConvertCtoF(temp_min).toFixed(0)}°F`
            sunriseDOM.textContent = `${sunriseGMT.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}`;
            sunsetDOM.textContent = `${sunsetGMT.toLocaleTimeString([], {hour: 'numeric', minute:'2-digit'})}`;
          })
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
      }

      navigator.geolocation.getCurrentPosition(success, error, options)
    }
  
  })

  return (
    <div class="tile-container">
      <div id="weather-tile">
        <div id="weather-top-div">
          <div id="weather-icon-div">
            <img src="" alt="weather-icon" id="weather-icon-img" />
            <p id="weather-desc">No information available</p>
          </div>
          <div id="weather-temps-div">
            <div id="weather-temp">
              <div id="weather-f">Error</div>
              <div id="weather-feels">Error</div>
            </div>
            <div id="weather-location">Fetching weather failed</div>
          </div>
        </div>
        <div id="weather-bottom-div">
          <div class="weather-bottom-inner-div">
            <div class="weather-expected-temps-div">
              <img src={arrow} alt="up-arrow" id="weather-arrow-icon" class="weather-arrow-up"/>
              <span id="weather-min">Error</span>
            </div>
            <div class="weather-expected-temps-div">
              <img src={arrow} alt="down-arrow" id="weather-arrow-icon" class="weather-arrow-down"/>
              <span id="weather-max">Error</span>
            </div>
          </div>
          <div class="weather-bottom-inner-div">
            <h4>Sunrise: <span id="weather-sunrise">No info</span></h4>
            <h4>Sunset: <span id="weather-sunset">No info</span></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather