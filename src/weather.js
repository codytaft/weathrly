// import data from './WeatherData.js';

const getAllWeatherData = (data) => {
  return [
    { currentWeather: getCurrentWeatherData(data) },
    { hourlyWeather: getHourlyWeatherData(data) },
    { dailyWeather: getDailyWeatherData(data) }
  ]
}

const getCurrentWeatherData = (data) => {
  return {
    currentTemp: data.current_observation.temp_f,
    currentTempIcon: data.current_observation.icon_url,
    currentDescription: data.forecast.txt_forecast.forecastday[0].fcttext,
  }
}

const getHourlyWeatherData = (data) => {
  return []
    // currentTemp: data.current_observation.temp_f,
    // currentTempIcon: data.current_observation.icon_url,
    // currentDescription: data.forecast.txt_forecast[0].fcttext,
}

const getDailyWeatherData = (data) => {
  return []
    // currentTemp: data.current_observation.temp_f,
    // currentTempIcon: data.current_observation.icon_url,
    // currentDescription: data.forecast.txt_forecast[0].fcttext,
}

// hiTemp: 85,
// loTemp: 45,
export default getCurrentWeatherData;
// export default getCurrentWeatherData;