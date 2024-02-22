import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });
  // console.log(imageSrc);
  // console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather__card" id="weather">
      <div className="weather__temp">{weatherTemp}°F</div>
      <img src={imageSrcUrl} alt="weather type" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
