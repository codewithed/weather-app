import API_KEY from './api';

function createWeatherCard(data) {
  const main = document.getElementById('main');
  const card = document.createElement('div');
  card.classList.add('weather-card');
  card.innerHTML = `<p>City: ${data.name}</p>
                      <p>Description: ${data.weather[0].main}</p>
                      <p>Temp: ${data.main.temp} F</p>
                      <p>Humidity: ${data.main.humidity}</p>
                      <p>Windspeed: ${data.wind.speed}</p>`;
  main.appendChild(card);
}

async function getWeatherData(location) {
  const loc = location;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      createWeatherCard(data);
    });
}

getWeatherData('accra');
