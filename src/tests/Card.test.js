import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  let wrapper;
  let currentData;

  beforeEach(() => {
    localStorage.clear()
    currentData = {
                  hour: "14",
                  icon: "partlycloudy",
                  temp: "83.2",
                  day: "Wednesday",
                  high: "87", 
                  low: "59",
    }
    wrapper = mount(<Card currentData={currentData} key={0}/>);
    
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have props for hour, icon, temp, day high, and low', () => {
    expect(wrapper.instance().props.currentData.hour).toEqual('14');
    expect(wrapper.instance().props.currentData.icon).toEqual('partlycloudy');
    expect(wrapper.instance().props.currentData.temp).toEqual('83.2');
    expect(wrapper.instance().props.currentData.day).toEqual('Wednesday');
    expect(wrapper.instance().props.currentData.high).toEqual('87');
    expect(wrapper.instance().props.currentData.low).toEqual('59');
  })

  it('should pass the correct data to each hour card', () => {
    currentData = {
                  hour: "15",
                  icon: "partlycloudy",
                  temp: "83.2",
                  day: null,
                  high: null, 
                  low: null,
    }
    wrapper = mount(<Card currentData={currentData} key={0}/>);

    const cardTime = wrapper.find('.card_time');
    const cardTemp = wrapper.find('.card_temp');

    expect(cardTime).toBeDefined();
    expect(cardTime.text()).toEqual('15:00');

    expect(cardTemp).toBeDefined();
    expect(cardTemp.text()).toEqual('83.2  ');
  })

  it('should pass the correct data to each day card', () => {
    currentData = {
                  hour: null,
                  icon: "partlycloudy",
                  temp: null,
                  day: "Wednesday",
                  high: "87", 
                  low: "59",
    }
    wrapper = mount(<Card currentData={currentData} key={0}/>);

    const cardTime = wrapper.find('.card_time');
    const cardTemp = wrapper.find('.card_temp');

    expect(cardTime).toBeDefined();
    expect(cardTime.text()).toEqual('Wednesday');

    expect(cardTemp).toBeDefined();
    expect(cardTemp.text()).toEqual('87  59');
  }) 

});