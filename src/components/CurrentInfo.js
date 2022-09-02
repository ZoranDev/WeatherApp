import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CurrentInfo = () => {
  const {
    searchedCityWeatherInfo: { currentWeather },
  } = useContext(WeatherContext);

  // Getting today's date, info.dt is unix value, to have date we need to multiple it by 1000
  const today = new Date(currentWeather.dt * 1000).toString().slice(0, 15);

  return (
    <div className="flex flex-col  w-[300px] md:w-auto lg:flex-row items-center justify-center overflow-hidden">
      {/* Current temperature */}
      <div className="text-[80px] sm:text-[120px]  text-neutral-100 mr-3 flex items-end">
        {Math.round(currentWeather.main.temp)}°
      </div>
      {/* City name and date */}
      <div className="h-full text-neutral-100 flex flex-col items-center justify-center mr-3">
        <h1 className="text-3xl sm:text-5xl md:h-[60px]">
          {currentWeather.name}
        </h1>
        <p className="text-md sm:text-xl text-center">{today}</p>
      </div>
      <div className="h-full flex items-center justify-center flex-col">
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          height="60px"
          width="60px"
          alt="Weather icon"
        />
        <p className="text-neutral-100 text-md sm:text-xl capitalize text-center">
          {currentWeather.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default CurrentInfo;
