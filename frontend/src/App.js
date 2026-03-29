import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import AdvisoryCard from "./components/AdvisoryCard";
import LearningCard from "./components/LearningCard";
import CommunityReports from "./components/CommunityReports";
import ReportModal from "./components/ReportModal";
import GovernmentPolicies from "./components/GovernmentPolicies";
import NgoResources from "./components/NgoResources";
import LearningHome from "./pages/LearningHome";
import CropResilience from "./pages/CropResilience";
import YouthClimateAction from "./pages/YouthClimateAction";
import WaterDrought from "./pages/WaterDrought";
import ClimateScience from "./pages/ClimateScience";
import { getAdvisory } from "./services/api";

const s = {
  page: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "1.5rem 1.75rem 3rem",
  },
  topRow: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1.1fr 1fr",
    gap: "1.25rem",
    marginBottom: "1.25rem",
  },
  bottomRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "1.25rem",
  },
};

function Dashboard({
  onSubmitClick,
  reports,
  onSubmit,
  modalOpen,
  setModalOpen,
}) {
  const [city, setCity] = useState("Kigali");
  const [weatherData, setWeather] = useState(null);
  const [advisory, setAdvisory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (selectedCity) => {
    setLoading(true);
    setError(null);
    try {
      const res = await getAdvisory(selectedCity);
      const data = res.data;
      if (!data.weather.success) {
        setError(data.weather.error);
        setWeather(null);
        setAdvisory([]);
      } else {
        setWeather(data.weather);
        setAdvisory(data.advisory);
      }
    } catch (err) {
      setError(
        "Cannot connect to backend. Make sure Flask is running on port 5000.",
      );
      setWeather(null);
      setAdvisory([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(city);
  }, []);

  const handleCityChange = (newCity) => {
    setCity(newCity);
    fetchData(newCity);
  };

  return (
    <div style={s.page}>
      <div style={s.topRow}>
        <WeatherCard
          onCityChange={handleCityChange}
          weatherData={weatherData}
          loading={loading}
          error={error}
        />
        <AdvisoryCard advisory={advisory} loading={loading} error={error} />
        <LearningCard />
      </div>
      <CommunityReports
        onSubmitClick={() => setModalOpen(true)}
        reports={reports}
      />
      <div style={s.bottomRow}>
        <GovernmentPolicies />
        <NgoResources />
      </div>
      {modalOpen && (
        <ReportModal onClose={() => setModalOpen(false)} onSubmit={onSubmit} />
      )}
    </div>
  );
}

export default function App() {
  const [reports, setReports] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = (newReport) => {
    setReports([newReport, ...reports]);
  };

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              reports={reports}
              onSubmit={handleSubmit}
              modalOpen={modalOpen}
              setModalOpen={setModalOpen}
            />
          }
        />
        <Route path="/learning" element={<LearningHome />} />
        <Route path="/learning/crop" element={<CropResilience />} />
        <Route path="/learning/youth" element={<YouthClimateAction />} />
        <Route path="/learning/water" element={<WaterDrought />} />
        <Route path="/learning/climate" element={<ClimateScience />} />
      </Routes>
    </>
  );
}
