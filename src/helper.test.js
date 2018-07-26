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
                                                currentTempIcon: 'mostlycloudy',
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
                                                icon: 'partlycloudy',
                                                temp: '49' },
                                              { hour: '14',
                                                icon: 'partlycloudy',
                                                temp: '49' },
                                              { hour: '15',
                                                icon: 'clear',
                                                temp: '51' },
                                              { hour: '16',
                                                icon: 'clear',
                                                temp: '50' },
                                              { hour: '17',
                                                icon: 'clear',
                                                temp: '48' },
                                              { hour: '18',
                                                icon: 'clear',
                                                temp: '45' },
                                              { hour: '19',
                                                icon: 'clear',
                                                temp: '43' }])
  })

  it('should return dailyWeather', () => {
    const cleanData = getAllWeatherData(data);
    expect(cleanData.dailyWeather).toEqual([ { day: 'Thursday',
                                                icon: 'clear',
                                                high: '55',
                                                low: '51' },
                                              { day: 'Friday',
                                                icon: 'chancerain',
                                                high: '57',
                                                low: '44' },
                                              { day: 'Saturday',
                                                icon: 'rain',
                                                high: '47',
                                                low: '30' },
                                              { day: 'Sunday',
                                                icon: 'cloudy',
                                                high: '37',
                                                low: '22' },
                                              { day: 'Monday',
                                                icon: 'clear',
                                                high: '35',
                                                low: '19' },
                                              { day: 'Tuesday',
                                                icon: 'partlycloudy',
                                                high: '32',
                                                low: '20' },
                                              { day: 'Wednesday',
                                                icon: 'partlycloudy',
                                                high: '33',
                                                low: '26' },
                                              { day: 'Thursday',
                                                icon: 'snow',
                                                high: '35',
                                                low: '23' },
                                              { day: 'Friday',
                                                icon: 'partlycloudy',
                                                high: '31',
                                                low: '18' } ])
                                              })
})