const getWeatherCard = (icon, time, temp, loTemp = '') => {
  return (
      <section>
        <img className="card_icon" src={icon}/>
        <p className="card_temp">{temp}<span className="card_temp--lo">{loTemp}</span></p>
        <p className="card_time">{time}</p>
      </section>  
  )
}

// import App from './App.js' 

// import React, { Component } from 'react';

// class Card extends Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return(
//       <section>
//         <img className="card_icon" src={}/>
//         <p className="card_temp"><span className="card_temp--lo"></span></p>
//         <p className="card_time"></p>
//       </section>  
//     )
//   }
// }

export default Card;
