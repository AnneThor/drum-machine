import React from 'react';
import './App.css';
import Popup from './components/Popup.js';
import Button from './components/Button.js';

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
      },
      power: "Off",
      showPopup: true,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDrumClick = this.handleDrumClick.bind(this);
    this.handlePowerClick = this.handlePowerClick.bind(this);
    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.setState({
      showPopup: false,
    })
  }

  handleKeyDown(event) {
    if (this.state.power === "Off" | event.key.length > 1) { return };
    let key = event.key.toUpperCase();
    let regExp = /[ACDEQSWXZ]{1}/;
    if (regExp.test(key)) {
      var playPromise = document.getElementById(key).play();
      if (playPromise !== undefined) {
        playPromise.then ( _=> {
          //means it is playing
        })
        .catch( error => {
          //autoplay was prevented
          console.log("playback prevented" + error);
        })
      }
      this.setState({currentButton: key});
    }
  }

  handleDrumClick(event) {
    if (this.state.power === "Off") { return };
    this.setState( {currentButton: event.target.value });
    let audioClip = document.getElementById(event.target.value);
    audioClip.volume = document.getElementById("myRange").value;
    audioClip.play();
  }

  handlePowerClick(event) {
    this.setState({power: (this.state.power === "On") ? "Off" : "On"});
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }


  render() {

    let buttonMap = Object.keys(this.state.currentDrum);
    let powerStatus = this.state.power.toLowerCase();
    let buttonClass = "display-button";
    if (powerStatus === "on") {
      buttonClass += " on";
    }

    return (
      <div className="App"
           id="drum-machine">
        {this.state.showPopup ? <Popup clicked={this.closePopup} /> : ""}
        <h1 className="App-header">Drum Machine</h1>

        <div id="display">

          <section className="drum-buttons">
            { buttonMap.map( button => <Button key={button}
                                               value={button}
                                               power={this.state.power}
                                               drumButtonClick={this.handleDrumClick}  />) }
          </section>

          <section className="fine-tuners">

            <div className="power">
              <label htmlFor="power">Power {this.state.power}</label>
              <label className="power-switch">
                <input type="checkbox"
                       id="on-off"
                       onClick={this.handlePowerClick}/>
                <span className="power-slider"></span>
              </label>
            </div>

            <button className={buttonClass}>{
              (this.state.power === "On") ? (this.state.currentDrum[`${this.state.currentButton}`]) : ""}
            </button>

            <div className="slide-container">
              <label htmlFor="volume-slider"
                     className="volume-slider-label">Volume:</label>
              <input type="range"
                     min="0" max="1"
                     step=".1"
                     className="slider"
                     id="myRange" />
            </div>

          </section>


        </div>


      </div>
    );
  }
}

export default App;
