import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import { FaTrashAlt } from "react-icons/fa";

const PreviousCity = ({ city }) => {
  //Context
  const { searchAgain, removeThisCity } = useContext(WeatherContext);

  //onClick function
  const showForThisCity = () => {
    searchAgain(city);
  };

  //removeThis
  const removeThis = () => {
    removeThisCity(city);
  };

  return (
    <div className="mb-1 flex justify-between items-center">
      <p
        onClick={showForThisCity}
        className="capitalize hover:text-white cursor-pointer"
      >
        {city}
      </p>

      <FaTrashAlt
        onClick={removeThis}
        className="active:scale-90 hover:text-red-400 hover:cursor-pointer"
      />
    </div>
  );
};

export default PreviousCity;
