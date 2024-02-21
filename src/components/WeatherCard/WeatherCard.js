import "./WeatherCard.css";

const WeatherOptions = [
  {
    url: require("../../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  {
    url: require("../../images/day/rain.svg").default,
    day: true,
    type: "rain",
  },
  { url: require("../../images/day/fog.svg").default, day: true, type: "fog" },
  {
    url: require("../../images/day/snow.svg").default,
    day: true,
    type: "snow",
  },
  {
    url: require("../../images/day/storm.svg").default,
    day: true,
    type: "storm",
  },
  {
    url: require("../../images/day/clear.svg").default,
    day: true,
    type: "clear",
  },
  {
    url: require("../../images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  {
    url: require("../../images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../../images/night/fog.svg").default,
    day: false,
    type: "fog",
  },
  {
    url: require("../../images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../../images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../../images/night/clear.svg").default,
    day: false,
    type: "clear",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const ImageSrc = WeatherOptions.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });
  // console.log(ImageSrc);
  // console.log(ImageSrc[0].url);

  const ImageSrcUrl = ImageSrc[0].url || "";

  return (
    <section className="weather__card" id="weather">
      <div className="weather__temp">{weatherTemp}°F</div>
      <img src={ImageSrcUrl} alt="weather type" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
