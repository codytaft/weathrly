import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import App from './App';
import data from './WeatherData';
import getAllWeatherData from './helper.js';

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

  it('should render an error page with an error and search component if there is a catch error', () => {
    wrapper.setState({ error: true })

    expect(wrapper.find('Error').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render a results page with current weather, hourly forecast, and daily forecast components', () => {
    wrapper.setState({ locationData: getAllWeatherData(data), searchedLocation: 'Denver, CO', dataLoaded: true })

    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('HourlyForecast').length).toEqual(1);
    expect(wrapper.find('DailyForecast').length).toEqual(1);
  });

  it('should update state with new location', () => {
    const searchedLocation = 'Denver, CO';
    
    expect(wrapper.state().searchedLocation).toEqual('');

    wrapper.instance().setLocation(searchedLocation);

    expect(wrapper.state().searchedLocation).toEqual('Denver, CO');
  });

  it.skip('should have a function that fetches API when a new location is entered', () => {
    const searchedLocation = 'Denver, CO';

    // expect(wrapper.instance().fetchAPI).not.toHaveBeenCalled();
    wrapper.instance().setLocation(searchedLocation);
    // expect(wrapper.instance().fetchAPI).toHaveBeenCalled();
    expect(typeof wrapper.instance().fetchAPI).toEqual('function');
  });

  it('should save location to localStorage', () => {
    const searchedLocation = 'Denver, CO';
    
    expect(localStorage.getItem('savedLocation')).toEqual(undefined);

    wrapper.instance().setLocation(searchedLocation);

    expect(localStorage.getItem('savedLocation')).toEqual('Denver, CO');
  });

  it('when component loads it should check if there is a city in locale storage and set error to false', () => {
    expect(wrapper.state().error).toEqual(false);
    expect(wrapper.state().searchedLocation).toEqual('');

    localStorage.setItem('savedLocation', 'Denver, CO');
    wrapper = shallow(<App />);

    expect(wrapper.state().searchedLocation).toEqual('Denver, CO');
  });

  it('when component loads it should have a state error property of false', () => {
    expect(wrapper.state().error).toEqual(false);
  });

  it('should return to welcome page when home button is clicked', () => {
    wrapper.setState({ locationData: getAllWeatherData(data), searchedLocation: 'Denver, CO', dataLoaded: true })

    const homeButton = wrapper.find('.Home-button');

    homeButton.simulate('click');

    wrapper = shallow(<App />);

    expect(wrapper.find('Welcome').length).toEqual(1);
    expect(wrapper.find('Search').length).toEqual(1);
  });
  
})

