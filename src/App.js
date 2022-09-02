import { WeatherProvider } from "./context/WeatherContext";
import Weather from "./components/Weather";

function App() {
  return (
    <WeatherProvider>
      <div className="w-full p-1 min-h-screen bg-[url('./assets/background.jpg')] bg-cover flex items-center justify-center">
        <Weather />
      </div>
    </WeatherProvider>
  );
}

export default App;
