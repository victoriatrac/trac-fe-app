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
    
      const iconImg = document.getElementById('weather-icon')
      const loc = document.querySelector('#location')
      const tempF = document.querySelector('#f')
      const feelsLike = document.querySelector('#feels')
      const min = document.querySelector('#min')
      const max = document.querySelector('#max')
      const desc = document.querySelector('#weather-desc')
      const sunriseDOM = document.querySelector('#sunrise')
      const sunsetDOM = document.querySelector('#sunset')

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
    <div className="container-tile">
      <div id="top-div">
        <div id="icon-div">
          <img src="" alt="weather-icon" id="weather-icon" />
          <p id="weather-desc">No information available</p>
        </div>
        <div id="loc-desc-div">
          <div id="temp">
            <div id="f">Error</div>
            <div id="feels">Error</div>
          </div>
          <div id="location">Fetching weather failed</div>
        </div>
      </div>
      <div id="bottom-div">
        <div className="bottom-div-div">
          <div className="expected-temps-div">
            <img src={arrow} alt="up-arrow" id="arrow-icon" className="arrow-up"/>
            <span id="min">Error</span>
          </div>
          <div className="expected-temps-div">
            <img src={arrow} alt="down-arrow" id="arrow-icon" className="arrow-down"/>
            <span id="max">Error</span>
          </div>
        </div>
        <div className="bottom-div-div">
          <h4>Sunrise: <span id="sunrise">No info</span></h4>
          <h4>Sunset: <span id="sunset">No info</span></h4>
        </div>
      </div>
    </div>
  )
}

export default Weather