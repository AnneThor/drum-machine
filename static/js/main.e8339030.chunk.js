(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),c=a.n(r),s=(a(14),a(5)),l=a(6),i=a(1),u=a(8),m=a(7);a(2);var d=function(e){return o.a.createElement("div",{className:"popup"},o.a.createElement("div",{className:"popup\\_inner"},o.a.createElement("h1",null,'When using the Free Code Camp test suite, note that the drum machine must be in the "On" mode for the tests to pass.  So fire it up first!'),o.a.createElement("button",{onClick:e.clicked},"Exit Message")))};var h=function(e){var t="https://raw.githubusercontent.com/AnneThor/drum-machine/master/public/audio/";switch(e.value){case"A":t+="a-snare.wav";break;case"C":t+="c-tom4.wav";break;case"D":t+="d-tom1.wav";break;case"E":t+="e-ride.wav";break;case"Q":t+="q-china.wav";break;case"S":t+="s-sidestick.wav";break;case"W":t+="w-highhat.wav";break;case"X":t+="x-tom3.wav";break;case"Z":t+="z-tom2.wav";break;default:return}var a="drum-pad";return"On"===e.power&&(a+=" on"),o.a.createElement("button",{className:a,id:t,value:e.value,name:e.value,onClick:e.drumButtonClick},"On"===e.power?e.value:"",o.a.createElement("audio",{className:"clip",id:e.value,src:t,type:"audio/wav"},"Your browser does not support the ",o.a.createElement("code",null,"audio"),"element."))},p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentButton:"",currentDrum:{Q:"CHINA",W:"HIGHHAT",E:"RIDE",A:"SNARE",S:"SIDESTICK",D:"TOM 1",Z:"TOM 2",X:"TOM 3",C:"TOM 4"},power:"Off",showPopup:!0},n.handleKeyDown=n.handleKeyDown.bind(Object(i.a)(n)),n.handleDrumClick=n.handleDrumClick.bind(Object(i.a)(n)),n.handlePowerClick=n.handlePowerClick.bind(Object(i.a)(n)),n.closePopup=n.closePopup.bind(Object(i.a)(n)),n}return Object(l.a)(a,[{key:"closePopup",value:function(){this.setState({showPopup:!1})}},{key:"handleKeyDown",value:function(e){if(!("Off"===this.state.power|e.key.length>1)){var t=e.key.toUpperCase();if(/[ACDEQSWXZ]{1}/.test(t)){var a=document.getElementById(t).play();void 0!==a&&a.then((function(e){})).catch((function(e){console.log("playback prevented"+e)})),this.setState({currentButton:t})}}}},{key:"handleDrumClick",value:function(e){if("Off"!==this.state.power){this.setState({currentButton:e.target.value});var t=document.getElementById(e.target.value);t.volume=document.getElementById("myRange").value,t.play()}}},{key:"handlePowerClick",value:function(e){this.setState({power:"On"===this.state.power?"Off":"On"})}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.currentDrum),a="display-button";return"on"===this.state.power.toLowerCase()&&(a+=" on"),o.a.createElement("div",{className:"App",id:"drum-machine"},this.state.showPopup?o.a.createElement(d,{clicked:this.closePopup}):"",o.a.createElement("h1",{className:"App-header"},"Drum Machine"),o.a.createElement("div",{id:"display"},o.a.createElement("section",{className:"drum-buttons"},t.map((function(t){return o.a.createElement(h,{key:t,value:t,power:e.state.power,drumButtonClick:e.handleDrumClick})}))),o.a.createElement("section",{className:"fine-tuners"},o.a.createElement("div",{className:"power"},o.a.createElement("label",{htmlFor:"power"},"Power ",this.state.power),o.a.createElement("label",{className:"power-switch"},o.a.createElement("input",{type:"checkbox",id:"on-off",onClick:this.handlePowerClick}),o.a.createElement("span",{className:"power-slider"}))),o.a.createElement("button",{className:a},"On"===this.state.power?this.state.currentDrum["".concat(this.state.currentButton)]:""),o.a.createElement("div",{className:"slide-container"},o.a.createElement("label",{htmlFor:"volume-slider",className:"volume-slider-label"},"Volume:"),o.a.createElement("input",{type:"range",min:"0",max:"1",step:".1",className:"slider",id:"myRange"})))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.e8339030.chunk.js.map