import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDetails = () => {
  // Context
  const {
    searchedCityWeatherInfo: {
      currentWeather,
      currentWeather: {
        main: { feels_like, temp_max, temp_min, humidity, pressure },
        wind: { speed },
      },
    },
  } = useContext(WeatherContext);

  console.log(feels_like);

  return (
    <div className="w-full mb-4">
      <h3 className="text-xl text-neutral-100 mb-3">Weather details</h3>
      {[
        "Feels like :",
        "Max temp :",
        "Min temp :",
        "Humidity :",
        "Pressure :",
        "Wind speed :",
      ].map((item, index) => (
        <div
          className="w-full flex items-center justify-between text-md text-neutral-400 mb-1"
          key={index}
        >
          <h2>{item}</h2>
          {item === "Feels like :" ? (
            <h2>{Math.round(feels_like)} °C</h2>
          ) : item === "Max temp :" ? (
            <h2>{Math.round(temp_max)} °C</h2>
          ) : item === "Min temp :" ? (
            <h2>{Math.round(temp_min)} °C</h2>
          ) : item === "Humidity :" ? (
            <h2>{humidity} %</h2>
          ) : item === "Pressure :" ? (
            <h2>{pressure} hPa</h2>
          ) : (
            <h2>{Math.round(speed * 3.6)} km/h</h2>
          )}
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
