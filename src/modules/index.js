import API_KEY from './api';

// get relevant dom elements
const input = document.getElementById('input');
const errorHolder = document.getElementById('error');
const searchBtn = document.getElementById('searchButton');
const main = document.getElementById('main');

function createWeatherCard(data) {
  main.innerHTML = '';
  errorHolder.innerHTML = '';
  const card = document.createElement('div');
  card.classList.add('weather-card');
  card.innerHTML = `<p>City: ${data.name}</p>
                      <p>Description: ${data.weather[0].main}</p>
                      <p>Temp: ${data.main.temp} &degreeF</p>
                      <p>Humidity: ${data.main.humidity}</p>
                      <p>Windspeed: ${data.wind.speed}</p>`;
  main.appendChild(card);
}

async function getWeatherData(location) {
  const loc = location;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        errorHolder.innerText = 'Please enter a valid city name';
        throw new Error('Invalid city name');
      }
      return response.json();
    })
    .then((data) => {
      createWeatherCard(data);
    })
    .catch((err) => { console.error(err); });
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getWeatherData(input.value);
});
