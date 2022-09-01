import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  // Initial state
  const [initialState, setInitialState] = useState("Initial state");

  return (
    <WeatherContext.Provider
      value={{
        initialState,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
