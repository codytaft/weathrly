import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Card from './Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    wrapper = shallow(<Card />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have time and temp props', () => {
    expect(wrapper.time).toEqual(this.props.currentData.day || (this.props.currentData.hour + '00'))
    expect(wrapper.temp).toEqual(this.props.currentData.temp || this.rpops.currentData.high)
  })


});