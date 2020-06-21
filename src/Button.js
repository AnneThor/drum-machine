import React from 'react';
import './App.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentButton: '',
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(event) {
    if (event.key.length > 1) { return };
    let key = event.key.toUpperCase();
    let regExp = /[ACDEQSWXZ]{1}/;
    if (regExp.test(key)) {
      document.getElementById(key).play();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

render() {

  let controlClass = this.props.value + "-control";

  let audioSource='/audio/';
  switch (this.props.value) {
    case "A":
      audioSource +=  "a-snare.wav"
      break;
    case "C":
      audioSource += "c-tom4.wav"
      break;
    case "D":
      audioSource += "d-tom1.wav"
      break;
    case "E":
      audioSource += "e-ride.wav"
      break;
    case "Q":
      audioSource += "q-china.wav"
      break;
    case "S":
      audioSource += "s-sidestick.wav"
      break;
    case "W":
      audioSource += "w-highhat.wav"
      break;
    case "X":
      audioSource += "x-tom3.wav"
      break;
    case "Z":
      audioSource += "z-tom2.wav"
      break;
    default:
      return;
  }


  return(
    <button className={`drum-pad ${controlClass}`}
            id={audioSource}
            value={this.props.value}
            name={this.props.value}
            onClick={() => document.getElementById(`${this.props.value}`).play()}  >
              {this.props.value}
        <audio className="clip"
               id={this.props.value}
               src={audioSource}
               type="audio/wav">
               Your browser does not support the <code>audio</code>element.
        </audio>
    </button>
  )
}

}

export default Button;
