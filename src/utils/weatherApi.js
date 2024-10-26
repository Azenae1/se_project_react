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
