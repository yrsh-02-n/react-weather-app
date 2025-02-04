import axios from 'axios'

// https://www.weatherapi.com/docs/

const BASE_URL = 'https://api.weatherapi.com/v1'
const API_KEY = 'ff243070653f48c386e135913253001'

export const weatherCurrentFromAPI = (cityName) => {
  return axios
    .get(`${BASE_URL}/current.json?key=${API_KEY}&q=${cityName}&aqi=no`)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
      return null
    })
}

export const weatherForecastFromAPI = (cityName) => {
  return axios
    .get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${cityName}&days=7&aqi=no&alerts=no`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
      return null
    })
}
