import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <WeatherProvider>
      <div className="w-full min-h-screen bg-[url('./assets/background.jpg')] bg-cover"></div>
    </WeatherProvider>
  );
}

export default App;
