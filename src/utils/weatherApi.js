import { handleResponse } from "./api";

// const latitude = 32.81;
// const longitude = 34.99;
const APIkey = "f2829c3c313227659f4adbec810a229f";

const defaultLocation = "New York";

export const getForecastWeather = (city = defaultLocation) => {
  const encodedCity = encodeURIComponent(city);
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=imperial&appid=${APIkey}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
};

// export const getCoordinates = (city) => {
//   return fetch(
//     `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${APIkey}`
//   )
//     .then(handleResponse)
//     .then((data) => {
//       if (data.length === 0) {
//         throw new Error("City not found");
//       }
//       const { lat, lon } = data[0];
//       return { lat, lon };
//     });
// };

// export const getForecastWeather = (city) => {
//   return getCoordinates(city)
//     .then(({ lat, lon }) => {
//       return fetch(
//         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIkey}`
//       );
//     })
//     .then(handleResponse);
// };

// export const getForecastWeather = () => {
//   const weatherApi = fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
//   ).then(handleResponse);
//   return weatherApi;
// };

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

// export const parseLocation = (data) => {
//   const location = data.name;
//   return location;
// };

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
