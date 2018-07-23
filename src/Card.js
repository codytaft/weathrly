import React, { Component } from 'react';

class Card extends Component {
  
  render() {
    let time =  this.props.currentData.day || (this.props.currentData.hour + ':00');
    let temp = this.props.currentData.temp || this.props.currentData.high;
    return (
      <section>
        <img className="card__icon" src={this.props.currentData.icon}/>
        <p className="card__temp">{temp}<span className="card_temp--lo">{this.props.currentData.low}</span></p>
        <p className="card__time">{time}</p>
      </section>  
    )
  }
}

export default Card;
