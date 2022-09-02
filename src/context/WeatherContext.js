import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // State for searched city current weather
  const [searchedCityWeatherInfo, setSearchedCityWeatherInfo] = useState({
    currentWeather: null,
    forecastWeather: null,
  });

  // Previos searches state
  const [previousSearches, setPreviousSearches] = useState([]);

  //fetchTodayForecast function
  const fetchTodayForecast = async (searchCity) => {
    if (previousSearches.includes(searchCity.toLowerCase())) {
      alert("Vec trazen!");
    } else {
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

          // Set previous
          setPreviousSearches([
            ...previousSearches,
            {
              city: searchCity.toLowerCase(),
              cityCurrentWeather: currentData,
              cityForecastWeather: forecastData,
            },
          ]);
        } else {
          alert("City not found");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  //searchAgain
  const searchAgain = (city) => {
    previousSearches.forEach(
      (previousCity) =>
        previousCity.city === city &&
        setSearchedCityWeatherInfo({
          currentWeather: previousCity.cityCurrentWeather,
          forecastWeather: previousCity.cityForecastWeather,
        })
    );
  };

  //removeThisCity
  const removeThisCity = (city) => {
    if (previousSearches.length === 1) {
      setPreviousSearches([]);
      setSearchedCityWeatherInfo({
        currentWeather: null,
        forecastWeather: null,
      });
    } else {
      setPreviousSearches(
        previousSearches.filter((previousCity) => city !== previousCity.city)
      );
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        searchedCityWeatherInfo,
        previousSearches,
        fetchTodayForecast,
        searchAgain,
        removeThisCity,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
