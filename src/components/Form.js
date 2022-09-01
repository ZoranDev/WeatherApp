import { useState, useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { FaSearch } from "react-icons/fa";

const Form = () => {
  // Context
  const { fetchTodayForecast } = useContext(WeatherContext);

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
    <form onSubmit={onSubmit} className="h-full w-[300px] bg-[rgba(0,0,0,0.7)]">
      <div className="w-full flex items-center justify-between p-2 ">
        <input
          type="text"
          value={searchCity}
          onChange={onChange}
          className="h-10 w-[230px] bg-transparent p-2 border-b-2 border-white focus:outline-none text-white text-xl capitalize"
        />
        <button
          type="submit"
          className="bg-orange-400 text-neutral-100 h-10 w-10 p-3 cursor-pointer hover:bg-orange-500"
        >
          <FaSearch className="w-full h-full" />
        </button>
      </div>
    </form>
  );
};

export default Form;
