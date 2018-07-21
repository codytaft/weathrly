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

  it('should have default')
})