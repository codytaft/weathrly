import React from 'react';

const Error = (props) => {
  return(
    <div >
      <h1 className="error-msg">Uh Oh... Does your city exist?</h1>
      <h3 className="error-hint">make sure to use City, State format</h3>
    </div>
  )
}

export default Error;