import React from 'react';
import "../App.css";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup\_inner">
        <h1>When using the Free Code Camp test suite, note that the drum machine must be in the "On" mode for the tests to pass.  So fire it up first!</h1>
        <button onClick={props.clicked}>Exit Message</button>
      </div>
    </div>
  )
}

export default Popup;
