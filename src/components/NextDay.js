import { useState, useEffect } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const NextDay = ({ weatherInfo }) => {
  // State for date
  const [headline, setHeadline] = useState(null);

  // State for show next day forecast
  const [showNextDayForecast, setShowNextDayForecast] = useState(false);

  useEffect(() => {
    setHeadline(new Date(1000 * weatherInfo.dt).toString().slice(3, 15));
  }, []);

  //onClick
  const onClick = () => {
    setShowNextDayForecast(!showNextDayForecast);
  };

  return (
    <div
      className={
        showNextDayForecast
          ? "w-full text-neutral-100 p-2 bg-stone-800"
          : "w-full text-neutral-400 py-1"
      }
    >
      {/* Headline section */}
      <div className=" flex justify-between items-center">
        {headline}
        {showNextDayForecast ? (
          <FaAngleUp
            onClick={onClick}
            className="hover:scale-125 hover:cursor-pointer hover:text-white text-xl"
          />
        ) : (
          <FaAngleDown
            onClick={onClick}
            className="hover:scale-125 hover:cursor-pointer hover:text-white text-xl"
          />
        )}
      </div>

      {/* Show forecast info section */}
      {showNextDayForecast && (
        <div className="w-full text-neutral-100">
          {/* Image and description */}
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
              width="50px"
              height="50px"
              alt="Weather icon"
            />
            <p>{weatherInfo.weather[0].description}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <h3>Temperature: </h3>
            <h3>{Math.round(weatherInfo.temp.day)} °C</h3>
          </div>
          <div className="w-full flex items-center justify-between">
            <h3>Humidity: </h3>
            <h3>{weatherInfo.humidity} %</h3>
          </div>
          <div className="w-full flex items-center justify-between">
            <h3>Wind: </h3>
            <h3>{Math.round(weatherInfo.wind_speed * 3.6)} km/h</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default NextDay;
