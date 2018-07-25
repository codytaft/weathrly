import React from 'react'
import { shallow, mount } from 'enzyme';
import HourlyForecast from './HourlyForecast.js';

import data from './WeatherData';
import getAllWeatherData from './weather.js';

describe('HourlyForecast component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<HourlyForecast locationData={getAllWeatherData(data)}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render 7 hour cards', () => {
    const currentData = getAllWeatherData(data)
    let wrapper = mount(<HourlyForecast locationData={currentData}/>)
    

    
    expect(wrapper.find('Card').length).toEqual(7)
    expect()
  })
})