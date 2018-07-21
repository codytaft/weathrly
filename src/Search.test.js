import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    wrapper = shallow(<Search />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a default state with an empty string of inputVal', () => {
    expect(wrapper.state()).toEqual({inputVal: ''})
  })

  

})