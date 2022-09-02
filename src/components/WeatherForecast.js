import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import NextDay from "./NextDay";

const WeatherForecast = () => {
  const {
    searchedCityWeatherInfo: { forecastWeather },
  } = useContext(WeatherContext);
  console.log(forecastWeather);

  return (
    <div className="w-full mb-4">
      <h3 className="text-xl text-neutral-100 mb-3">Next days</h3>
      {forecastWeather.daily.map((day, index) => (
        <NextDay key={index} weatherInfo={day} />
      ))}
    </div>
  );
};

export default WeatherForecast;
