import React from 'react';

import Search from './Search.js';

const Welcome = (props) => {
  return(
    <div className="Welcome-page">
      <h1 className="App-title">WEATHERLY</h1>
      <Search setLocation={this.setLocation} />
    </div>
  )
}

export default Welcome;

