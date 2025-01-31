import axios from 'axios'

export const weatherRequestFromAPI = (cityName) => {
  return axios
    .get(
      `http://api.weatherapi.com/v1/current.json?key=ff243070653f48c386e135913253001&q=${cityName}&aqi=no`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
      return null
    })
}
