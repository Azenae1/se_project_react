import { handleResponse } from "./api";

const APIkey = "f2829c3c313227659f4adbec810a229f";
const defaultLocation = "New York";

export const getForecastWeather = (city = defaultLocation) => {
  const encodedCity = encodeURIComponent(city);
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=imperial&appid=${APIkey}`
  ).then(handleResponse);
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  const weather = {
    temperature: {
      F: `${Math.round(temperature)}`,
      C: `${Math.round(((temperature - 32) * 5) / 9)}`,
    },
  };
  // console.log(weather);
  return weather;
};

export const parseWeatherId = (data) => {
  if (data && data.weather && data.weather.length > 0) {
    return data.weather[0].icon;
  } else {
    return null;
  }
};

// weather.temperature.F = `${Math.round(data.main.temp)}°F`;
// weather.temperature.C = `${Math.round((data.main.temp - 32) * 5/9)}°C`;

// const response = {
//   coord: {
//     lon: 10.99,
//     lat: 44.34,
//   },
//   weather: [
//     {
//       id: 803,
//       main: "Clouds",
//       description: "broken clouds",
//       icon: "04n",
//     },
//   ],
//   base: "stations",
//   main: {
//     temp: 47.84,
//     feels_like: 47.84,
//     temp_min: 45.27,
//     temp_max: 50.88,
//     pressure: 1022,
//     humidity: 66,
//     sea_level: 1022,
//     grnd_level: 934,
//   },
//   visibility: 10000,
//   wind: {
//     speed: 2.08,
//     deg: 132,
//     gust: 2.8,
//   },
//   clouds: {
//     all: 84,
//   },
//   dt: 1708536310,
//   sys: {
//     type: 2,
//     id: 2004688,
//     country: "IT",
//     sunrise: 1708495678,
//     sunset: 1708534311,
//   },
//   timezone: 3600,
//   id: 3163858,
//   name: "Zocca",
//   cod: 200,
// };
//smt
