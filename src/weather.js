
const getAllWeatherData = (data) => {
  return { 
    currentWeather: getCurrentWeatherData(data),
    hourlyWeather: getHourlyWeatherData(data),
    dailyWeather: getDailyWeatherData(data)
  }
}

const getCurrentWeatherData = (data) => {
  return {
    currentLocation: data.current_observation.display_location.full,
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
  let hourlyArray = data.hourly_forecast.map( (hour, i) => {
    return {
      hour: data.hourly_forecast[i].FCTTIME.hour,
      icon: data.hourly_forecast[i].icon_url,
      temp: data.hourly_forecast[i].temp.english,
    }
  })
  return hourlyArray.slice(1, 8);
}

const getDailyWeatherData = (data) => {
  let dailyArray = data.forecast.simpleforecast.forecastday.map( (day, i) => {
    return {
      day: data.forecast.simpleforecast.forecastday[i].date.weekday,
      icon: data.forecast.simpleforecast.forecastday[i].icon_url,
      high: data.forecast.simpleforecast.forecastday[i].high.fahrenheit,
      low: data.forecast.simpleforecast.forecastday[i].low.fahrenheit
    }
  })
  return dailyArray.slice(1, 10)
}

export default getAllWeatherData;