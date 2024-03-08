import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ id, weatherTemp = "", currentTemperatureUnit = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.id.includes(id);
  });

  const defaultImageUrl = "../images/day/cloudy.svg";
  const imageSrcUrl = imageSrc.length > 0 ? imageSrc[0].url : defaultImageUrl;

  return (
    <section className="weather__card" id="weather">
      <div className="weather__temp">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} alt="weather type" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
