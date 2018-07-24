import getAllWeatherData from './weather';
import data from './WeatherData';

describe('weather', () => {

  it('should exist', () => {
    expect(getAllWeatherData).toBeDefined();
  })

  it('should return currentWeather', () => {
    const cleanData = getAllWeatherData(data);
    expect(cleanData.currentWeather).toEqual({ currentLocation: 'Louisville, KY',
                                                currentTemp: 46,
                                                currentTempIcon: 'http://icons.wxug.com/i/c/k/mostlycloudy.gif',
                                                currentDescription: 'Sun and clouds mixed. High 51F. Winds NE at 10 to 15 mph.',
                                                currentLo: '32',
                                                currentHi: '51',
                                                currentDay: 'Wednesday',
                                                currentHour: '12' })

  })

  it('should return hourlyWeather', () => {
    const cleanData = getAllWeatherData(data);
    expect(cleanData.hourlyWeather).toEqual([{ 
                                                hour: '13',
                                                icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                                                temp: '49' },
                                              { hour: '14',
                                                icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                                                temp: '49' },
                                              { hour: '15',
                                                icon: 'http://icons.wxug.com/i/c/k/clear.gif',
                                                temp: '51' },
                                              { hour: '16',
                                                icon: 'http://icons.wxug.com/i/c/k/clear.gif',
                                                temp: '50' },
                                              { hour: '17',
                                                icon: 'http://icons.wxug.com/i/c/k/clear.gif',
                                                temp: '48' },
                                              { hour: '18',
                                                icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
                                                temp: '45' },
                                              { hour: '19',
                                                icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
                                                temp: '43' }])
  })

  it('should return dailyWeather', () => {
    const cleanData = getAllWeatherData(data);
    expect(cleanData.dailyWeather).toEqual([ { day: 'Thursday',
                                                icon: 'http://icons.wxug.com/i/c/k/clear.gif',
                                                high: '55',
                                                low: '51' },
                                              { day: 'Friday',
                                                icon: 'http://icons.wxug.com/i/c/k/chancerain.gif',
                                                high: '57',
                                                low: '44' },
                                              { day: 'Saturday',
                                                icon: 'http://icons.wxug.com/i/c/k/rain.gif',
                                                high: '47',
                                                low: '30' },
                                              { day: 'Sunday',
                                                icon: 'http://icons.wxug.com/i/c/k/cloudy.gif',
                                                high: '37',
                                                low: '22' },
                                              { day: 'Monday',
                                                icon: 'http://icons.wxug.com/i/c/k/clear.gif',
                                                high: '35',
                                                low: '19' },
                                              { day: 'Tuesday',
                                                icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                                                high: '32',
                                                low: '20' },
                                              { day: 'Wednesday',
                                                icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                                                high: '33',
                                                low: '26' },
                                              { day: 'Thursday',
                                                icon: 'http://icons.wxug.com/i/c/k/snow.gif',
                                                high: '35',
                                                low: '23' },
                                              { day: 'Friday',
                                                icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
                                                high: '31',
                                                low: '18' } ])
                                              })
})