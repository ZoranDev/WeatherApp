import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const PreviousSearches = () => {
  // Context
  const { previousSearches } = useContext(WeatherContext);

  return (
    <div className="text-neutral-400  mb-4">
      {previousSearches.length !== 0 &&
        previousSearches.map((city, index) => (
          <div
            key={index}
            className="capitalize mb-1 cursor-pointer hover:text-white"
          >
            {city}
          </div>
        ))}
    </div>
  );
};

export default PreviousSearches;
