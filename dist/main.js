(()=>{"use strict";const e={};!async function(t){fetch("https://api.openweathermap.org/data/2.5/weather?q=Cairo&APPID=86566ed62874b0000c32b9c0d45d9c29").then((e=>e.json())).then((t=>{return i=t,e.city=i.name,e.description=i.weather.description,e.temp=i.main.temp,e.humidity=i.main.humidity,void(e.windspeed=i.wind.speed);var i}))}(),console.log(e)})();