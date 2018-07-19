import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    wrapper = shallow(<App />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })
})

