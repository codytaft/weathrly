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

})