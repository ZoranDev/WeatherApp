import { useState, useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { FaSearch } from "react-icons/fa";
import Loader from "../assets/loader.jpg";
//Components
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import PreviousSearches from "./PreviousSearches";

const Form = () => {
  // Context
  const {
    fetchTodayForecast,
    searchedCityWeatherInfo: { currentWeather, forecastWeather },
    previousSearches,
    loading,
  } = useContext(WeatherContext);

  // State for search city
  const [searchCity, setSearchCity] = useState("");

  //onChange function
  const onChange = (e) => {
    setSearchCity(e.target.value);
  };

  //onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    searchCity === ""
      ? alert("No city for search")
      : fetchTodayForecast(searchCity);

    // Delete typed city from input
    setSearchCity("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="h-full w-[300px] bg-[rgba(0,0,0,0.7)] p-2 overflow-hidden"
    >
      {/* Input section */}
      <div className="w-full flex items-center justify-between mb-4">
        <input
          type="text"
          value={searchCity}
          onChange={onChange}
          className="h-10 w-[230px] bg-transparent p-2 border-b-2 border-white focus:outline-none text-white text-xl capitalize"
          placeholder={
            previousSearches.length !== 0 ? "Another city" : "Search city"
          }
        />
        <button
          type="submit"
          className="bg-orange-400 text-neutral-100 h-10 w-10 p-3 cursor-pointer hover:bg-orange-500"
        >
          <FaSearch className="w-full h-full" />
        </button>
      </div>

      {/* Loader section */}
      {loading && (
        <div className="w-full flex items-center justify-center">
          <img src={Loader} className="w-[50px] h-[50px]" />
        </div>
      )}

      {/* Weather details and next days */}
      <div className=" scroll-div">
        <PreviousSearches />
        {currentWeather && <WeatherDetails />}
        {forecastWeather && <WeatherForecast />}
      </div>
    </form>
  );
};

export default Form;
