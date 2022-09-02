import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import PreviousCity from "./PreviousCity";

const PreviousSearches = () => {
  // Context
  const { previousSearches } = useContext(WeatherContext);

  return (
    <div className="text-neutral-400  mb-4">
      {previousSearches.length !== 0 &&
        previousSearches.map((city, index) => (
          <PreviousCity key={index} city={city.city} />
        ))}
    </div>
  );
};

export default PreviousSearches;
