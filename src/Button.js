import React from 'react';
import "./App.css";

function Button(props) {

      let controlClass = props.value + "-control";

      let audioSource='/audio/';
      switch (props.value) {
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

  return (
    <button className={`drum-pad ${controlClass}`}
            id={audioSource}
            value={props.value}
            name={props.value}
            onClick={props.drumButtonClick}>
              {props.value}
        <audio className="clip"
               id={props.value}
               src={audioSource}
               type="audio/wav">
               Your browser does not support the <code>audio</code>element.
        </audio>
    </button>
  )
}

export default Button;
