import React, { Component } from "react";
import "./normalize.css";
import "./App.css";
import Welcome from "./Welcome.js";
import Error from "./Error";
import Search from "./Search.js";
import getAllWeatherData from "./helper.js";
import apiKey from "./apiKey.js";
import CurrentWeather from "./CurrentWeather.js";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

class App extends Component {
  constructor() {
    super();
    this.state = {
      locationData: {},
      searchedLocation: "",
      dataLoaded: false,
      error: false
    };
  }

  fetchAPI(city, state) {
    fetch(
      `http://api.wunderground.com/api/${apiKey}/conditions/hourly/forecast10day/q/${state}/${city}.json`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          locationData: getAllWeatherData(data),
          dataLoaded: true
        });
      })
      .catch(() => {
        this.setState({
          error: true
        });
        localStorage.clear();
      });
  }

  setLocation = location => {
    const [city, state] = location.split(", ");
    let noSpaceCity = city.replace(/ /, "_");
    this.setState({ searchedLocation: location });
    this.fetchAPI(noSpaceCity, state);
    localStorage.setItem("savedLocation", location);
  };

  returnToWelcomePage = () => {
    localStorage.clear();
    window.location.reload();
  };

  componentDidMount() {
    this.setState({ error: false });
    const storedLocation = localStorage.getItem("savedLocation");
    if (storedLocation) {
      this.setLocation(storedLocation);
    }
  }

  render() {
    if (this.state.searchedLocation && this.state.dataLoaded) {
      return (
        <div className="Results">
          <header className="Results__header">
            <button
              className="Results__header--home-button"
              onClick={this.returnToWelcomePage}
              aria-label="home button"
            />
            <Search setLocation={this.setLocation} />
          </header>
          <CurrentWeather locationData={this.state.locationData} />
          <div className="Results__hourly--section">
            <h3 className="Results__city-name">
              {this.state.locationData.currentWeather.currentLocation}
            </h3>
            <div className="Results__hourly">
              <HourlyForecast locationData={this.state.locationData} />
            </div>
          </div>
          <div className="Results__daily">
            <DailyForecast locationData={this.state.locationData} />
          </div>
        </div>
      );
    } else if (this.state.error === true) {
      return (
        <div className="Main-page">
          <Error />
          <Search setLocation={this.setLocation} />
        </div>
      );
    }
    return (
      <div className="Main-page">
        <Welcome />
        <Search setLocation={this.setLocation} />
      </div>
    );
  }
}

export default App;
