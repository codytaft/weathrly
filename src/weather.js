
const getAllWeatherData = (data) => {
  return { 
    currentWeather: getCurrentWeatherData(data),
    hourlyWeather: getHourlyWeatherData(data),
    dailyWeather: getDailyWeatherData(data)
  }
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
  return data.forecast.simpleforecast.forecastday.map( (day, i) => {
    return {
      day: data.forecast.simpleforecast.forecastday[i].date.pretty,
      icon: data.forecast.simpleforecast.forecastday[i].icon_url,
      high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
    }
  })
}

export default getAllWeatherData;