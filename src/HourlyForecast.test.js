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
  })

  it('should render an hour card', () => {
    const currentData = getAllWeatherData(data)
    let wrapper = shallow(<HourlyForecast locationData={currentData}/>)
    const firstCard = wrapper.find('Card').first()
    const lastCard = wrapper.find('Card').last()
    console.log(wrapper.find('Card').length)
  })
})