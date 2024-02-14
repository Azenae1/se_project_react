import "./WeatherCard.css";

const WeatherOptions = [
  { url: "/images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/day/rain.svg", day: true, type: "rain" },
  { url: "/images/day/fog.svg", day: true, type: "fog" },
  { url: "/images/day/snow.svg", day: true, type: "snow" },
  { url: "/images/day/storm.svg", day: true, type: "storm" },
  { url: "/images/day/clear.svg", day: true, type: "clear" },
  { url: "/images/night/cloudy.svg", day: false, type: "cloudy" },
  { url: "/images/night/rain.svg", day: false, type: "rain" },
  { url: "/images/night/fog.svg", day: false, type: "fog" },
  { url: "/images/night/snow.svg", day: false, type: "snow" },
  { url: "/images/night/storm.svg", day: false, type: "storm" },
  { url: "/images/night/clear.svg", day: false, type: "clear" },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");

  const ImageSrc = WeatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(ImageSrc);
  console.log(ImageSrc[0].url);

  const ImageSrcUrl = ImageSrc[0].url || "";

  return (
    <section className="weather__card" id="weather">
      <div className="weather__temp">65°F</div>
      <img src={ImageSrcUrl} alt="weather image" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
