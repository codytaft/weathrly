import React, { Component } from "react";

class Card extends Component {
  render() {
    let time = this.props.currentData.day || this.props.currentData.hour + ":00";
    let temp = this.props.currentData.temp || this.props.currentData.high;
    return (
      <section className="Results__weather-card">
        <p className="Results__weather-card--time">{time}</p>
        <img
          className="Results__weather-card--icon"
          src={require(`./icons/white/svg/${this.props.currentData.icon}.svg`)}
          alt="weather icon"
        />
        <p className="Results__weather-card--temp">
          {temp}
          <span className="Results__weather-card--lo-temp"> {this.props.currentData.low}</span>
        </p>
      </section>
    );
  }
}

export default Card;
