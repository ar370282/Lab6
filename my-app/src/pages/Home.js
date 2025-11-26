import { useEffect, useState } from "react";

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://quiet-dodol-fd470a.netlify.app/.netlify/functions/weather")
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(() => {});
  }, []);

  return (
    <div className="text-center">
      <h1>Welcome to My Portfolio</h1>
      <p className="lead mt-3">
        I'm Arpit Jorelia — a Computer Science student exploring web development and real-world applications.
      </p>

      {weather && (
        <div className="alert alert-info mt-4">
          <h4>Weather in {weather.city}</h4>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Home;
