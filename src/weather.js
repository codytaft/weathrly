
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
    currentLo: data.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    currentHi: data.forecast.simpleforecast.forecastday[0].high.fahrenheit,
    currentDay: data.forecast.simpleforecast.forecastday[0].date.weekday,
    currentHour: data.hourly_forecast[0].FCTTIME.hour
  }
}

const getHourlyWeatherData = (data) => {
  return data.hourly_forecast.slice(1, 8).map( (hour, i) => {
    return {
      hour: data.hourly_forecast[i].FCTTIME.hour,
      icon: data.hourly_forecast[i].icon_url,
      temp: data.hourly_forecast[i].temp.english,
    }
  })
}

const getDailyWeatherData = (data) => {
  return data.forecast.simpleforecast.forecastday.slice(1, 10).map( (day, i) => {
    return {
      day: data.forecast.simpleforecast.forecastday[i].date.weekday,
      icon: data.forecast.simpleforecast.forecastday[i].icon_url,
      high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
    }
  })
}

export default getAllWeatherData;