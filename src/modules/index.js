import API_KEY from './api';

let weatherData;

async function getWeatherData(location) {
  const loc = location;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${API_KEY}`);

  if (response.ok) {
    weatherData = await response.json();
  } else {
    console.log(`HTTP Response Code: ${response.statusText}`);
  }
}

getWeatherData('Cairo');
