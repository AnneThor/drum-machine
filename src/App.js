import React from 'react';
import './App.css';
import Button from './Button.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentButton: '',
      currentDrum: {
        "Q": "CHINA",
        "W": "HIGHHAT",
        "E": "RIDE",
        "A": "SNARE",
        "S": "SIDESTICK",
        "D": "TOM 1",
        "Z": "TOM 2",
        "X": "TOM 3",
        "C": "TOM 4",
      }
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDrumClick = this.handleDrumClick.bind(this);
  }

  handleKeyDown(event) {
    if (event.key.length > 1) { return };
    let key = event.key.toUpperCase();
    let regExp = /[ACDEQSWXZ]{1}/;
    if (regExp.test(key)) {
      document.getElementById(key).play();
      this.setState({currentButton: key});
    }
  }

  handleDrumClick(event) {
    this.setState( {currentButton: event.target.value });
    document.getElementById(event.target.value).play();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }


  render() {

    let buttonMap = Object.keys(this.state.currentDrum);

    return (
      <div className="App"
           id="drum-machine">
        <h1 className="App-header">Drum Machine</h1>

        <div id="display">

          <section className="drum-buttons">
            { buttonMap.map( button => <Button key={button} value={button} drumButtonClick={this.handleDrumClick} />) }
          </section>

          <section className="fine-tuners">
            <label htmlFor="power"
                   className="power-switch">POWER
              <input type="checkbox" />
              <span className="power-slider"></span>
            </label>
            <button className="display-button">{this.state.currentDrum[`${this.state.currentButton}`]}</button>
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
