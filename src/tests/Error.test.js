import React from 'react';
import { shallow, mount } from 'enzyme';

import Error from '../Error';

describe('Error', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should show header with error message', () => {
    const header = wrapper.find('.error-msg');

    expect(header).toBeDefined();
    expect(header.text()).toEqual('Uh Oh... Does your city exist?')
  })

  it('should show smaller header with error hint', () => {
    const header = wrapper.find('.error-hint');

    expect(header).toBeDefined();
    expect(header.text()).toEqual('make sure to use City, State format')
  })
})