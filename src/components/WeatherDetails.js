import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDetails = () => {
  // Context
  const { searchedCityWeatherInfo } = useContext(WeatherContext);

  return (
    <div className="w-full">
      <h3 className="text-xl text-neutral-100 mb-3">Weather details</h3>
      {/* Feels like */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400 mb-1">
        <h2>Feel like :</h2>
        <h2>{Math.round(searchedCityWeatherInfo.main.feels_like)} °C</h2>
      </div>
      {/* Max temp */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Max temp :</h2>
        <h2>{Math.round(searchedCityWeatherInfo.main.temp_max)} °C</h2>
      </div>
      {/* Min temp */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Min temp :</h2>
        <h2>{Math.round(searchedCityWeatherInfo.main.temp_min)} °C</h2>
      </div>
      {/* Humidity */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Humidity :</h2>
        <h2>{searchedCityWeatherInfo.main.humidity} %</h2>
      </div>
      {/* Pressure */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Pressure :</h2>
        <h2>{searchedCityWeatherInfo.main.pressure} hPa</h2>
      </div>
      {/* Wind speed */}
      <div className="w-full flex items-center justify-between text-md text-neutral-400  mb-1">
        <h2>Wind speed :</h2>
        <h2>{Math.round(searchedCityWeatherInfo.wind.speed * 3.6)} km/h</h2>
      </div>
    </div>
  );
};

export default WeatherDetails;

{
  /* 

        <div className="weather-details-item">
          <h3 className="weather-details-item-left">Humidity:</h3>
          <h3 className="weather-details-item-right"></h3>
        </div>
        <div className="weather-details-item">
          <h3 className="weather-details-item-left">Pressure:</h3>
          <h3 className="weather-details-item-right">{info.main.pressure} hPa</h3>
        </div>
        <div className="weather-details-item">
          <h3 className="weather-details-item-left">Wind:</h3>
          <h3 className="weather-details-item-right"></h3>
        </div>

 */
}
