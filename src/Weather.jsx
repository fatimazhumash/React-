import React, { useState } from "react";
import "./WeatherApp.css";

const API_KEY = "ТВОЙ_API_КЛЮЧ"; // OpenWeatherMap-тен өз кілтіңді қой

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`
      );
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert("Қала табылмады!");
    }
  };

  return (
    <div className="weather-app">
      <h2>Ауа райы</h2>
      <input
        type="text"
        placeholder="Қаланы енгізіңіз"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Іздеу</button>

      {weather && weather.main && (
        <div className="weather-info">
          <h3>{weather.name}</h3>
          <p>Температура: {weather.main.temp}°C</p>
          <p>Сипаттама: {weather.weather[0].description}</p>
          <p>Жел жылдамдығы: {weather.wind.speed} м/с</p>
        </div>
      )}
    </div>
  );
}
