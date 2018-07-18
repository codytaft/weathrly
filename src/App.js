import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome.js';
import Search from './Search.js';
import getCurrentWeatherData from './weather.js';
import apiKey from './apiKey.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      currentTemp: 0,
      currentTempIcon: null,
      currentDescription: '',
      hiTemp: 0,
      loTemp: 0,
    }
  }

  // componentDidMount() {
  //   fetch('http://api.wunderground.com/api/${apiKey}/conditions/q/CA/San_Francisco.json
')
  //     .then(response => response.json())
  //     .then(questions => {
  //       this.setState({
  //         triviaQuestions: questions.results
  //       })
  //     })
  //     .catch(error => {
  //       throw new Error(error);
  //     });
  // }

  setLocation = (location) => {
    this.setState({ location: location })
    let locationWeather = getCurrentWeatherData(location)
    this.setState(locationWeather)
  }

  render() {
    if (this.state.location) {
      return(
        <div>
          <h1 className="App-title">WEATHERLY</h1>
          <h2>{this.state.location}</h2>
          <Search setLocation={this.setLocation}/>
          <p>{this.state.currentTemp}</p>
          <p>{this.state.currentTempIcon}</p>
          <p>{this.state.currentDescription}</p>
        </div>
      )
    }
    return (
      <div className="App">
        <h1 className="App-title">WEATHERLY</h1>
        <Welcome />
        <Search setLocation={this.setLocation} />
      </div>
    );
  }
}

export default App;

// Import welcome.js
// Will display welcome page and search bar

// If city or location entered ->>

// Will display name of SEARCHED city
// Will display Home logo link
// Will display search bar
// Import Current conditions
// Import 7Hour
// Import 10Day
// Maybe something at the bottom...