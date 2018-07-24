import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    localStorage.clear()
    wrapper = mount(<Search />);
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should have a default state', () => {
    expect(wrapper.state()).toEqual({inputVal: '', suggestions: []})
  })

  it('should render a form component', () => {
    expect(wrapper.find('form').length).toEqual(1);
  })

  it('form component should contain an input, datalist and button', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('datalist').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  })

  it('should update state when input is changed', () => {
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'b'}});

    expect(wrapper.state()).toEqual({inputVal: 'b', suggestions: []});
  })

  it('should add suggestions based on input', () => {
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'boulder, co'}});

    expect(wrapper.state()).toEqual({inputVal: 'boulder, co', suggestions: ['boulder, co']})

    input.simulate('change', { target: { value: 'bou'}});

    expect(wrapper.state()).toEqual({inputVal: 'bou', suggestions: ['boulder, co', 'bountiful, ut']})
  })

  it('should only add suggestions if input length is greater than 1 and input is a letter', () => {
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: '8'}});

    expect(wrapper.state()).toEqual({inputVal: '8', suggestions: []})

    input.simulate('change', { target: { value: 't'}});

    expect(wrapper.state()).toEqual({inputVal: 't', suggestions: []})
  })

  it('should invoke a function setLocation when button is clicked', () => {
    wrapper.instance().setLocation = jest.fn();

    const searchButton = wrapper.find('button');

    searchButton.simulate('click');

    expect(wrapper.instance().setLocation).toHaveBeenCalled();
    expect(wrapper.instance().setLocation).toHaveBeenCalledTimes(1);
  })

  it('setLocation should be passed the current input value', () => {

  })

  it('should render an option tag when there is a suggestion', () => {
    wrapper.setState({ suggestions: []});

    expect(wrapper.find('option').length).toEqual(0);

    wrapper.setState({ suggestions: ['Boulder, CO']});

    expect(wrapper.find('option').length).toEqual(1);

    wrapper.setState({ suggestions: ['boulder, co', 'bountiful, ut']});

    expect(wrapper.find('option').length).toEqual(2);
  })
 
})