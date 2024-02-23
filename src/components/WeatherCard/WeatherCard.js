import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ id, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.id.includes(id);
  });

  const imageSrcUrl = imageSrc.length > 0 ? imageSrc[0].url : "";

  return (
    <section className="weather__card" id="weather">
      <div className="weather__temp">{weatherTemp}°F</div>
      <img src={imageSrcUrl} alt="weather type" className="weather__image" />
    </section>
  );
};
