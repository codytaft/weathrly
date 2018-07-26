import React from 'react'
import { shallow, mount } from 'enzyme';
import DailyForecast from './DailyForecast.js';

import data from './WeatherData';
import getAllWeatherData from './helper.js';

describe('DailyForecast component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mount(<DailyForecast locationData={getAllWeatherData(data)}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render 9 day cards', () => {

    const firstCard = wrapper.find('Card').first();
    
    expect(wrapper.find('Card').length).toEqual(9);
    expect(firstCard.props().currentData.day).toEqual('Thursday')
    expect(firstCard.props().currentData.icon).toEqual('clear')
    expect(firstCard.props().currentData.high).toEqual('55')
    expect(firstCard.props().currentData.low).toEqual('51')
  })
})