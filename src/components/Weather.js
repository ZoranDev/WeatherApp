import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
// Components
import CurrentInfo from "./CurrentInfo";
import Form from "./Form";

const Weather = () => {
  // Context
  const {
    searchedCityWeatherInfo: { currentWeather },
  } = useContext(WeatherContext);

  return (
    // Odje vidjeti za ovu sirinu i visinu
    // w bilo 4/5
    <div className="w-full md:w-4/5 md:h-[600px] bg-[url('./assets/background.jpg')] bg-cover flex flex-col sm:flex-row items-center justify-between shadow-[0_0_200px_rgba(0,0,0)] rounded">
      {/* Left side */}
      <div className="sm:h-[600px]  w-[300px] sm:w-auto flex flex-col justify-between items-center sm:items-baseline p-5">
        {/* Logo */}
        <div className="text-2xl text-neutral-200">Weather APP</div>
        {currentWeather && <CurrentInfo />}
      </div>
      {/* Right side */}
      <Form />
    </div>
  );
};

export default Weather;
