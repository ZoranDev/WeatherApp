import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDetails = () => {
  // Context
  const {
    searchedCityWeatherInfo: { currentWeather },
  } = useContext(WeatherContext);

  return (
    <div className="w-full mb-4">
      <h3 className="text-xl text-neutral-100 mb-3">Weather details</h3>
      {/* Feels like */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400 mb-1">
        <h2>Feel like :</h2>
        <h2>{Math.round(currentWeather.main.feels_like)} °C</h2>
      </div>
      {/* Max temp */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Max temp :</h2>
        <h2>{Math.round(currentWeather.main.temp_max)} °C</h2>
      </div>
      {/* Min temp */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Min temp :</h2>
        <h2>{Math.round(currentWeather.main.temp_min)} °C</h2>
      </div>
      {/* Humidity */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Humidity :</h2>
        <h2>{currentWeather.main.humidity} %</h2>
      </div>
      {/* Pressure */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Pressure :</h2>
        <h2>{currentWeather.main.pressure} hPa</h2>
      </div>
      {/* Wind speed */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Wind speed :</h2>
        <h2>{Math.round(currentWeather.wind.speed * 3.6)} km/h</h2>
      </div>
    </div>
  );
};

export default WeatherDetails;
