import React from 'react';
import './App.css';
import Button from './Button.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentAction: '',
    };

  }

/*
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value; //display the default slider value

  //update the slider value when it is dragged
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  */


  render() {
    return (
      <div className="App"
           id="drum-machine">
        <h1 className="App-header">Drum Machine</h1>

        <div id="display">

          <section className="drum-buttons">
              <Button value="Q" />
              <Button value="W" />
              <Button value="E" />
              <Button value="A" />
              <Button value="S" />
              <Button value="D" />
              <Button value="Z" />
              <Button value="X" />
              <Button value="C" />
            </section>

          <section className="fine-tuners">
            <label htmlFor="power"
                   className="power-switch">POWER
              <input type="checkbox" />
              <span className="power-slider"></span>
            </label>
            <button className="display-button">KICK</button>
            <div className="slide-container">
              <input type="range" min="0" max="100" value="50" className="slider" id="myRange" />
            </div>
            <label htmlFor="bank"
                   className="bank-switch">BANK
              <input type="checkbox" />
              <span className="bank-slider"></span>
            </label>

          </section>


        </div>


      </div>
    );
  }
}

export default App;
