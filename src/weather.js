import data from './WeatherData.js';

const getCurrentWeatherData = (location) => {
  return {
    currentTemp: data.current_observation.temp_f,
    currentTempIcon: data.current_observation.icon_url,
    currentDescription: data.forecast.txt_forecast.forecastday[0].fcttext,
  }
}

// const getHourlyWeatherData = (location) => {
//   return {
//     currentTemp: data.current_observation.temp_f,
//     currentTempIcon: data.current_observation.icon_url,
//     currentDescription: data.forecast.txt_forecast[0].fcttext,
//   }
// }

// hiTemp: 85,
// loTemp: 45,
export default getCurrentWeatherData;
// export default getCurrentWeatherData;