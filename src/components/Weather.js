import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
// Components
import CurrentInfo from "./CurrentInfo";
import Form from "./Form";

const Weather = () => {
  return (
    // Odje vidjeti za ovu sirinu i visinu
    <div className="w-4/5 h-[600px] bg-[url('./assets/background.jpg')] bg-cover flex items-center justify-between shadow-[0_0_200px_rgba(0,0,0)] rounded">
      {/* Left side */}
      <div className="h-full flex flex-col justify-between p-5">
        {/* Logo */}
        <div className="text-2xl text-neutral-200">Weather APP</div>
        <CurrentInfo />
      </div>
      {/* Right side */}
      <Form />
    </div>
  );
};

export default Weather;
