import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
// Components
import CurrentInfo from "./CurrentInfo";
// Icons
import { FaSearch } from "react-icons/fa";

const Weather = () => {
  // Context stuff
  const { initialState } = useContext(WeatherContext);

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
      <form className="h-full w-[300px] bg-[rgba(0,0,0,0.7)]">
        <div className="w-full flex items-center justify-between p-2 ">
          <input
            type="text"
            className="h-10 w-[230px] bg-transparent p-2 border-b-2 border-white focus:outline-none text-white text-xl capitalize"
          />
          <FaSearch className="bg-orange-400 text-neutral-100 h-10 w-10 p-3 cursor-pointer hover:bg-orange-500 hover:p-2" />
        </div>
      </form>
    </div>
  );
};

export default Weather;
