import React, { useState } from "react";
import { getAdvisory } from "../services/api";

function getWeatherIcon(condition) {
  const c = condition.toLowerCase();
  if (c.includes("thunderstorm")) return "⛈️";
  if (c.includes("drizzle")) return "🌦️";
  if (c.includes("rain")) return "🌧️";
  if (c.includes("snow")) return "❄️";
  if (c.includes("mist") || c.includes("fog")) return "🌫️";
  if (c.includes("cloud")) return "⛅";
  if (c.includes("clear")) return "☀️";
  return "🌤️";
}

function getDayName(offset) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  d.setDate(d.getDate() + offset);
  return days[d.getDay()];
}

function getForecastIcon(i) {
  return ["⛅", "☀️", "🌧️"][i % 3];
}

const s = {
  card: {
    background: "#fff",
    border: "1px solid #E2E5EC",
    borderRadius: "16px",
    padding: "1.4rem",
    boxShadow: "0 2px 12px rgba(26,78,138,0.08)",
  },
  title: {
    fontFamily: "Fraunces, serif",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  main: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "0.75rem",
  },
  icon: { fontSize: "2.8rem", lineHeight: 1 },
  temp: {
    fontFamily: "Fraunces, serif",
    fontSize: "2.6rem",
    fontWeight: 600,
    color: "#1A4E8A",
    lineHeight: 1,
  },
  condition: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#3D4452",
    marginTop: "2px",
  },
  location: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "0.82rem",
    color: "#9AA0AC",
    marginBottom: "1rem",
    fontWeight: 500,
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#1A4E8A",
  },
  statsRow: {
    display: "flex",
    gap: "1.25rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  stat: { display: "flex", flexDirection: "column", gap: "2px" },
  statLabel: {
    fontSize: "0.68rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.07em",
    color: "#9AA0AC",
  },
  statVal: { fontSize: "0.88rem", fontWeight: 600, color: "#1A4E8A" },
  forecastRow: { display: "flex", gap: "8px" },
  fcItem: {
    flex: 1,
    background: "rgba(26,78,138,0.05)",
    border: "1px solid rgba(26,78,138,0.10)",
    borderRadius: "12px",
    padding: "0.6rem 0.4rem",
    textAlign: "center",
  },
  fcDay: {
    fontSize: "0.7rem",
    fontWeight: 700,
    color: "#9AA0AC",
    marginBottom: "4px",
    textTransform: "uppercase",
  },
  fcEmoji: { fontSize: "1.1rem", marginBottom: "3px" },
  fcTemp: { fontSize: "0.85rem", fontWeight: 600, color: "#1A4E8A" },
  loading: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.85rem",
    color: "#9AA0AC",
    padding: "1rem 0",
  },
  error: { fontSize: "0.82rem", color: "#E05C00", padding: "0.5rem 0" },
  search: { display: "flex", gap: "8px", marginBottom: "1rem" },
  input: {
    flex: 1,
    background: "#F7F8FA",
    border: "1px solid #E2E5EC",
    borderRadius: "8px",
    padding: "0.45rem 0.875rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.85rem",
    color: "#3D4452",
    outline: "none",
  },
  btnSearch: {
    background: "#1A4E8A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.45rem 1rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.82rem",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default function WeatherCard({
  onCityChange,
  weatherData,
  loading,
  error,
}) {
  const [city, setCity] = useState("Kigali");

  const handleSearch = () => {
    onCityChange(city);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div style={s.card} id="weather">
      <div style={s.title}>🌤️ Real-Time Weather</div>

      <div style={s.search}>
        <input
          style={s.input}
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Search city (e.g. Nairobi, Lagos...)"
        />
        <button style={s.btnSearch} onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading && (
        <div style={s.loading}>
          <div
            style={{
              width: "16px",
              height: "16px",
              border: "2px solid rgba(26,78,138,0.2)",
              borderTopColor: "#1A4E8A",
              borderRadius: "50%",
              animation: "spin 0.7s linear infinite",
            }}
          />
          Loading weather...
        </div>
      )}

      {error && <div style={s.error}>❌ {error}</div>}

      {!loading && !error && weatherData && (
        <>
          <div style={s.main}>
            <div style={s.icon}>{getWeatherIcon(weatherData.condition)}</div>
            <div>
              <div style={s.temp}>
                {Math.round(weatherData.temperature)}°
                <span style={{ fontSize: "1.1rem", opacity: 0.6 }}>C</span>
              </div>
              <div style={s.condition}>{weatherData.condition}</div>
            </div>
          </div>

          <div style={s.location}>
            <div style={s.dot} />
            {weatherData.city}, {weatherData.country}
          </div>

          <div style={s.statsRow}>
            <div style={s.stat}>
              <span style={s.statLabel}>Feels like</span>
              <span style={s.statVal}>
                {Math.round(weatherData.feels_like)}°C
              </span>
            </div>
            <div style={s.stat}>
              <span style={s.statLabel}>Humidity</span>
              <span style={s.statVal}>{weatherData.humidity}%</span>
            </div>
            <div style={s.stat}>
              <span style={s.statLabel}>Wind</span>
              <span style={s.statVal}>{weatherData.wind_speed} m/s</span>
            </div>
          </div>

          <div style={s.forecastRow}>
            {[1, 2, 3].map((i) => (
              <div key={i} style={s.fcItem}>
                <div style={s.fcDay}>{getDayName(i)}</div>
                <div style={s.fcEmoji}>{getForecastIcon(i)}</div>
                <div style={s.fcTemp}>
                  {Math.round(weatherData.temperature + [-2, 1, -1][i - 1])}°
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
