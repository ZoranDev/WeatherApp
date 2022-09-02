import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // State for searched city current weather
  const [searchedCityWeatherInfo, setSearchedCityWeatherInfo] = useState({
    currentWeather: null,
    forecastWeather: null,
  });

  //fetchTodayForecast function
  const fetchTodayForecast = async (searchCity) => {
    try {
      const currentResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=de7464f284cc4ed086a1d281fcc56045&units=metric`
      );

      if (currentResponse.status === 200) {
        const currentData = await currentResponse.json();

        // Fetch forecast weather but only if we have info for current weather - if city is found
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lon=${currentData.coord.lon}&lat=${currentData.coord.lat}&exclude=hourly,minutely,alerts&appid=de7464f284cc4ed086a1d281fcc56045&units=metric`
        );

        const forecastData = await forecastResponse.json();

        setSearchedCityWeatherInfo({
          currentWeather: currentData,
          forecastWeather: forecastData,
        });
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
