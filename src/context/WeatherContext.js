import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  return (
    <WeatherContext.Provider value={{}}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
