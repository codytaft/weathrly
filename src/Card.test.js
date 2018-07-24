import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Card from './Card';
import data from './WeatherData.js'

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    let currentData = {
                  hour: "14",
                  icon: "http://icons.wxug.com/i/c/k/partlycloudy.gif",
                  temp: "83.2",
                  day: "Wednesday",
                  high: "87", 
                  low: "59",
    }
    wrapper = shallow(<Card currentData={currentData} key={0}/>);
    
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have props for hour, icon, temp, day high, and low', () => {
    expect(wrapper.instance().props.currentData.hour).toEqual('14');
    expect(wrapper.instance().props.currentData.icon).toEqual('http://icons.wxug.com/i/c/k/partlycloudy.gif');
    expect(wrapper.instance().props.currentData.temp).toEqual('83.2');
    expect(wrapper.instance().props.currentData.day).toEqual('Wednesday');
    expect(wrapper.instance().props.currentData.high).toEqual('87');
    expect(wrapper.instance().props.currentData.low).toEqual('59');
  })

  

});