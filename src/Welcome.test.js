import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Welcome from './Welcome';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
    
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should show header with app title', () => {
    const header = wrapper.find('.App-title');

    expect(header).toBeDefined();
    expect(header.text()).toEqual('WEATHERLY');
  })

})