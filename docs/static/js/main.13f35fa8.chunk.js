(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),o=(a(14),a(5)),s=a(6),u=a(1),i=a(8),m=a(7);a(3);var d=function(e){var t=e.value+"-control",a="/audio/";switch(e.value){case"A":a+="a-snare.wav";break;case"C":a+="c-tom4.wav";break;case"D":a+="d-tom1.wav";break;case"E":a+="e-ride.wav";break;case"Q":a+="q-china.wav";break;case"S":a+="s-sidestick.wav";break;case"W":a+="w-highhat.wav";break;case"X":a+="x-tom3.wav";break;case"Z":a+="z-tom2.wav";break;default:return}return r.a.createElement("button",{className:"drum-pad ".concat(t),id:a,value:e.value,name:e.value,onClick:e.drumButtonClick},e.value,r.a.createElement("audio",{className:"clip",id:e.value,src:a,type:"audio/wav"},"Your browser does not support the ",r.a.createElement("code",null,"audio"),"element."))},h=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentButton:"",currentDrum:{Q:"CHINA",W:"HIGHHAT",E:"RIDE",A:"SNARE",S:"SIDESTICK",D:"TOM 1",Z:"TOM 2",X:"TOM 3",C:"TOM 4"},power:"Off"},n.handleKeyDown=n.handleKeyDown.bind(Object(u.a)(n)),n.handleDrumClick=n.handleDrumClick.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"handleKeyDown",value:function(e){if(!(e.key.length>1)){var t=e.key.toUpperCase();/[ACDEQSWXZ]{1}/.test(t)&&(document.getElementById(t).play(),this.setState({currentButton:t}))}}},{key:"handleDrumClick",value:function(e){this.setState({currentButton:e.target.value});var t=document.getElementById(e.target.value);t.volume=document.getElementById("myRange").value,t.play()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown,!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!1)}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.currentDrum);return r.a.createElement("div",{className:"App",id:"drum-machine"},r.a.createElement("h1",{className:"App-header"},"Drum Machine"),r.a.createElement("div",{id:"display"},r.a.createElement("section",{className:"drum-buttons"},t.map((function(t){return r.a.createElement(d,{key:t,value:t,drumButtonClick:e.handleDrumClick})}))),r.a.createElement("section",{className:"fine-tuners"},r.a.createElement("label",{htmlFor:"power",className:"power-switch"},this.state.power,r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"power-slider"})),r.a.createElement("button",{className:"display-button"},this.state.currentDrum["".concat(this.state.currentButton)]),r.a.createElement("div",{className:"slide-container"},r.a.createElement("label",{htmlFor:"volume-slider",className:"volume-slider-label"},"Volume:"),r.a.createElement("input",{type:"range",min:"0",max:"1",step:".1",className:"slider",id:"myRange"})),r.a.createElement("label",{htmlFor:"bank",className:"bank-switch"},"BANK",r.a.createElement("input",{type:"checkbox"}),r.a.createElement("span",{className:"bank-slider"})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.13f35fa8.chunk.js.map