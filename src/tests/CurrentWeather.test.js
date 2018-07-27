import React from 'react';
import { shallow, mount } from 'enzyme';

import CurrentWeather from '../CurrentWeather.js';
import data from '../WeatherData.js';
import getAllWeatherData from '../helper.js';

describe('CurrentWeather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear();

    wrapper = mount(<CurrentWeather locationData={getAllWeatherData(data)} key={0}/>);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should render icon, temp, temp-hi, temp-lo, today, and date', () => {
    const icon = wrapper.find('.Results__current-weather--icon');
    const temp = wrapper.find('.Results__current-weather--temp');
    const tempLo = wrapper.find('.Results__current-weather--lo-temp');
    const tempHi = wrapper.find('.Results__current-weather--hi-temp');
    const today = wrapper.find('.Results__current-weather--today');
    const date = wrapper.find('.Results__current-weather--date');

    expect(icon.prop('src')).toEqual('mostlycloudy.svg')
    expect(temp.text()).toEqual('46 °F')
    expect(tempLo.text()).toEqual('32')
    expect(tempHi.text()).toEqual('5132')
    expect(today.text()).toEqual('TODAY')
    expect(date.text()).toEqual('Wednesday 12:00')

  })
})