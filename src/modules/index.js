import API_KEY from './api';

const usefulData = {};

function getUsefulData(weatherData) {
  usefulData.city = weatherData.name;
  usefulData.description = weatherData.weather[0].main;
  usefulData.temp = weatherData.main.temp;
  usefulData.humidity = weatherData.main.humidity;
  usefulData.windspeed = weatherData.wind.speed;
}

async function getWeatherData(location) {
  const loc = location;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => getUsefulData(data));
}

getWeatherData('accra');
console.log(usefulData);
