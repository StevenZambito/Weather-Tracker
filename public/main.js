function getWeatherByCityName() {
  const cityName = document.getElementById('city').value
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=5529d8be646bfd216a2b2b7ef4f382c0`
    )
    .then((response) => {
      document.getElementById('weather-in').innerHTML = `The weather in ${
        response.data.name
      } is: ${response.data.weather[0].description.toUpperCase()}`

      document.getElementById(
        'temp'
      ).innerHTML = `Temperature: ${response.data.main.temp} °F`

      document.getElementById(
        'max-temp'
      ).innerHTML = `Max Temp: ${response.data.main.temp_max} °F`

      document.getElementById(
        'min-temp'
      ).innerHTML = `Min Temp: ${response.data.main.temp_min} °F`

      document.getElementById(
        'pressure'
      ).innerHTML = `Pressure: ${response.data.main.pressure} hPa`

      document.getElementById(
        'humidity'
      ).innerHTML = `Humidity: ${response.data.main.humidity}%`

      document.getElementById('sunrise').innerHTML = `Sunrise: ${moment
        .unix(response.data.sys.sunrise)
        .format('h:mm a')}`

      document.getElementById('sunset').innerHTML = `Sunset: ${moment
        .unix(response.data.sys.sunset)
        .format('h:mm a')}`
    })
}

function getWeatherByZipCode() {
  const zipCode = document.getElementById('zip').value
  return axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=5529d8be646bfd216a2b2b7ef4f382c0`
    )
    .then((response) => {
      document.getElementById('weather-in').innerHTML = `The weather in ${
        response.data.name
      } is: ${response.data.weather[0].description.toUpperCase()}`

      document.getElementById(
        'temp'
      ).innerHTML = `Temperature: ${response.data.main.temp} °F`

      document.getElementById(
        'max-temp'
      ).innerHTML = `Max Temp: ${response.data.main.temp_max} °F`

      document.getElementById(
        'min-temp'
      ).innerHTML = `Min Temp: ${response.data.main.temp_min} °F`

      document.getElementById(
        'pressure'
      ).innerHTML = `Pressure: ${response.data.main.pressure} hPa`

      document.getElementById(
        'humidity'
      ).innerHTML = `Humidity: ${response.data.main.humidity}%`

      document.getElementById('sunrise').innerHTML = `Sunrise: ${moment
        .unix(response.data.sys.sunrise)
        .format('h:mm a')}`

      document.getElementById('sunset').innerHTML = `Sunset: ${moment
        .unix(response.data.sys.sunset)
        .format('h:mm a')}`
    })
}

const resetGame = () => {
  document.getElementById('weather-in').innerHTML =
    'Welcome to the Weather Tracker!'
  document.getElementById('temp').innerHTML = 'Temperature:'
  document.getElementById('max-temp').innerHTML = 'Max Temp:'
  document.getElementById('min-temp').innerHTML = 'Min Temp:'
  document.getElementById('pressure').innerHTML = 'Pressure:'
  document.getElementById('humidity').innerHTML = 'Humidity:'
  document.getElementById('sunrise').innerHTML = 'Sunrise:'
  document.getElementById('sunset').innerHTML = 'Sunset:'
  document.querySelector('#city').value = ''
  document.querySelector('#zip').value = ''
}
