import React from 'react'
import { shallow, mount } from 'enzyme';
import HourlyForecast from './HourlyForecast.js';

import data from './WeatherData';
import getAllWeatherData from './weather.js';

describe('HourlyForecast component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<HourlyForecast locationData={getAllWeatherData(data)}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
    console.log('test')
  })

  it('should render an hour card', () => {
    const currentData = getAllWeatherData(data)
    
    let wrapper = shallow(<HourlyForecast locationData={currentData}/>)

  })
})