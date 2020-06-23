(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),l=(a(14),a(5)),i=a(6),s=a(1),u=a(8),m=a(7);a(3);var d=function(e){var t="/audio/";switch(e.value){case"A":t="https://raw.githubusercontent.com/AnneThor/drum-machine/master/public/audio/a-snare.wav";break;case"C":t+="c-tom4.wav";break;case"D":t+="d-tom1.wav";break;case"E":t+="e-ride.wav";break;case"Q":t+="q-china.wav";break;case"S":t+="s-sidestick.wav";break;case"W":t+="w-highhat.wav";break;case"X":t+="x-tom3.wav";break;case"Z":t+="z-tom2.wav";break;default:return}var a="drum-pad";return"On"===e.power&&(a+=" on"),r.a.createElement("button",{className:a,id:t,value:e.value,name:e.value,onClick:e.drumButtonClick},"On"===e.power?e.value:"",r.a.createElement("audio",{className:"clip",id:e.value,src:t,type:"audio/wav"},"Your browser does not support the ",r.a.createElement("code",null,"audio"),"element."))},h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={currentButton:"",currentDrum:{Q:"CHINA",W:"HIGHHAT",E:"RIDE",A:"SNARE",S:"SIDESTICK",D:"TOM 1",Z:"TOM 2",X:"TOM 3",C:"TOM 4"},power:"Off"},n.handleKeyDown=n.handleKeyDown.bind(Object(s.a)(n)),n.handleDrumClick=n.handleDrumClick.bind(Object(s.a)(n)),n.handlePowerClick=n.handlePowerClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleKeyDown",value:function(e){if(!("Off"===this.state.power|e.key.length>1)){var t=e.key.toUpperCase();if(/[ACDEQSWXZ]{1}/.test(t)){var a=document.getElementById(t).play();void 0!==a&&a.then((function(e){})).catch((function(e){console.log("playback prevented"+e)})),this.setState({currentButton:t})}}}},{key:"handleDrumClick",value:function(e){if("Off"!==this.state.power){this.setState({currentButton:e.target.value});var t=document.getElementById(e.target.value);t.volume=document.getElementById("myRange").value,t.play()}}},{key:"handlePowerClick",value:function(e){this.setState({power:"On"===this.state.power?"Off":"On"})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.currentDrum),a="display-button";return"on"===this.state.power.toLowerCase()&&(a+=" on"),r.a.createElement("div",{className:"App",id:"drum-machine"},r.a.createElement("h1",{className:"App-header"},"Drum Machine"),r.a.createElement("div",{id:"display"},r.a.createElement("section",{className:"drum-buttons"},t.map((function(t){return r.a.createElement(d,{key:t,value:t,power:e.state.power,drumButtonClick:e.handleDrumClick})}))),r.a.createElement("section",{className:"fine-tuners"},r.a.createElement("div",{className:"power"},r.a.createElement("label",{htmlFor:"power"},"Power ",this.state.power),r.a.createElement("label",{className:"power-switch"},r.a.createElement("input",{type:"checkbox",id:"on-off",onClick:this.handlePowerClick}),r.a.createElement("span",{className:"power-slider"}))),r.a.createElement("button",{className:a},"On"===this.state.power?this.state.currentDrum["".concat(this.state.currentButton)]:""),r.a.createElement("div",{className:"slide-container"},r.a.createElement("label",{htmlFor:"volume-slider",className:"volume-slider-label"},"Volume:"),r.a.createElement("input",{type:"range",min:"0",max:"1",step:".1",className:"slider",id:"myRange"})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.65ea49c7.chunk.js.map