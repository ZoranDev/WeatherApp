import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // Satet for searched city info
  const [searchedCityWeatherInfo, setSearchedCityWeatherInfo] = useState(null);

  //fetchTodayForecast function
  const fetchTodayForecast = async (searchCity) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=de7464f284cc4ed086a1d281fcc56045&units=metric`
      );

      if (response.status === 200) {
        const data = await response.json();
        setSearchedCityWeatherInfo(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        searchedCityWeatherInfo,
        fetchTodayForecast,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
