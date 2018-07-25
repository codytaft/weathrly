import React, { Component } from 'react';

class Card extends Component {
  
  render() {
    let time =  this.props.currentData.day || (this.props.currentData.hour + ':00');
    let temp = this.props.currentData.temp || this.props.currentData.high;
    return (
      <section className="weather__card">
        <p className="card_time">{time}</p>
        <img className="card_icon" src={require(`./icons/white/svg/${this.props.currentData.icon}.svg`)} alt="weather icon"/>
        <p className="card_temp">{temp}<span className="card_temp--lo">  {this.props.currentData.low}</span></p>
      </section>  
    )
  }
}

export default Card;
