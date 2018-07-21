import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import weather from './weather';

describe('weather', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    wrapper = shallow(<weather />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})