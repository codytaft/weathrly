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

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should have a default state with an empty object of locationData and empty string of searchedLocation', () => {
    expect(wrapper.state()).toEqual({locationData: {}, 
                                   searchedLocation: '',
                                   dataLoaded: false,
                                   error: false})
  });

  it('should render a welcome page with a welcome and search component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it.skip('should render an error page with an error and search component if there is a catch error', () => {
    wrapper.state().error = true;
    // wrapper.instance().render();

    expect(wrapper.find('Error').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it.skip('should render a results page with current weather, hourly forecast, and daily forecast components', () => {
    wrapper.state().dataLoaded = true;
    wrapper.state().searchedLocation = 'Denver, CO';

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('HourlyForecast').length).toEqual(1);
    expect(wrapper.find('DailyForecast').length).toEqual(1);
  });

  it.skip('should update state, run a function that fetches API, and save location to localStorage', () => {
    const searchedLocation = 'Denver, CO';
    
    expect(wrapper.state().searchedLocation).toEqual('');

    wrapper.instance().setLocation(searchedLocation);

    expect(wrapper.state().searchedLocation).toEqual('Denver, CO');
  });

  it.skip('when component loads it should check if there is a city in locale storage and set error to false', () => {
    expect(wrapper.state().error).toEqual(false);
    expect(wrapper.state().searchedLocation).toEqual('');

    localStorage.setItem('savedLocation', 'Denver, CO');
    wrapper = mount(<App />);

    expect(wrapper.state().searchedLocation).toEqual('Denver, CO');
  });

  it('when component loads it should have a state error property of false', () => {
    expect(wrapper.state().error).toEqual(false);
  });

  it.skip('should return to welcome page when home button is clicked', () => {
    const homeButton = wrapper.find('.Home-button');

    homeButton.simulate('click');

    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });
  
})

