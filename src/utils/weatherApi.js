const latitude = 44.34;
const longitude = 10.99;
const APIkey = "f2829c3c313227659f4adbec810a229f";
export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  console.log(temperature);
  return temperature;
};

/* prettier-ignore */
const response = {
    "coord": {
        "lon": 10.99,
        "lat": 44.34
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 50.13,
        "feels_like": 48.18,
        "temp_min": 47.57,
        "temp_max": 52.54,
        "pressure": 1022,
        "humidity": 71,
        "sea_level": 1022,
        "grnd_level": 934
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.08,
        "deg": 132,
        "gust": 2.8
    },
    "clouds": {
        "all": 84
    },
    "dt": 1708533348,
    "sys": {
        "type": 2,
        "id": 2044440,
        "country": "IT",
        "sunrise": 1708495678,
        "sunset": 1708534311
    },
    "timezone": 3600,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
};
