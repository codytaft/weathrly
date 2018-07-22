import React, { Component } from 'react';

import Card from './Card.js';

const DailyForecast = (props) => {
  return (
      props.locationData.dailyWeather.map( (day, i) => {
        return <Card currentData={day} key={i} />;
      })
  )
}

export default DailyForecast;