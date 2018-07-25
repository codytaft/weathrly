import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';

describe('App component', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    wrapper = shallow(<App />);
  });

  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  it('should exist', () => {
    console.log(localStorage.getItem('savedLocation'))
    expect(wrapper).toBeDefined();
  });

  it.skip('should have a default state with an empty object of locationData and empty string of searchedLocation', () => {
    expect(wrapper.state()).toEqual({locationData: {}, 
                                   searchedLocation: ''})
  });

  it.skip('should render a welcome page', () => {

  });

  it.skip('should render an error page if there is a catch error', () => {

  });

  it.skip('should render a results page with weather data', () => {

  });

  it.skip('should save city ', () => {

  });

  
})

