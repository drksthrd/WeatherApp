import axios from 'axios';
// import { apiKey } from '../../config/openWeatherData.js';
const apiKey = '59f6721c3c077c0a1a9a7458697acfe8';
const getOpenWeatherData = (zipCode) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${apiKey}`)
    .then((response) => response);
}


export default getOpenWeatherData;