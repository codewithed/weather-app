(()=>{"use strict";!async function(e){fetch("https://api.openweathermap.org/data/2.5/weather?q=accra&APPID=86566ed62874b0000c32b9c0d45d9c29").then((e=>e.json())).then((e=>{!function(e){const n=document.getElementById("main"),t=document.createElement("div");t.classList.add("weather-card"),t.innerHTML=`<p>City: ${e.name}</p>\n                      <p>Description: ${e.weather[0].main}</p>\n                      <p>Temp: ${e.main.temp} F</p>\n                      <p>Humidity: ${e.main.humidity}</p>\n                      <p>Windspeed: ${e.wind.speed}</p>`,n.appendChild(t)}(e)}))}()})();