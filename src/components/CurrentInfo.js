import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const CurrentInfo = () => {
  const { searchedCityWeatherInfo } = useContext(WeatherContext);

  // Getting today's date, info.dt is unix value, to have date we need to multiple it by 1000
  const today = new Date(searchedCityWeatherInfo.dt * 1000)
    .toString()
    .slice(0, 15);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      {/* Current temperature */}
      <div className="text-[80px]  text-neutral-100 mr-2 flex items-end">
        {Math.round(searchedCityWeatherInfo.main.temp)}°
      </div>
      {/* City name and date */}
      <div className="h-full text-neutral-100 flex flex-col items-center justify-center mr-2">
        <h1 className="text-4xl">{searchedCityWeatherInfo.name}</h1>
        <p className="text-xl">{today}</p>
      </div>
      <div className="h-full flex items-center justify-center flex-col">
        <img
          src={`http://openweathermap.org/img/wn/${searchedCityWeatherInfo.weather[0].icon}@2x.png`}
          height="50px"
          width="50px"
          alt="Weather icon"
        />
        <p className="text-neutral-100 text-xl capitalize">
          {searchedCityWeatherInfo.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default CurrentInfo;
