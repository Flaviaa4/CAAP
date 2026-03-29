import React from "react";
import { useNavigate } from "react-router-dom";

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
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.625rem",
  },
  item: {
    background: "#1A4E8A",
    borderRadius: "12px",
    padding: "0.875rem 0.75rem",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    minHeight: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    transition: "opacity 0.15s, transform 0.15s",
    border: "none",
    width: "100%",
  },
  itemBg: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "3.5rem",
    opacity: 0.18,
  },
  itemLabel: {
    position: "relative",
    fontSize: "0.8rem",
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.3,
  },
  progress: {
    position: "relative",
    marginTop: "0.4rem",
    height: "3px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "3px",
    overflow: "hidden",
  },
  progressFill: { height: "100%", background: "#fff", borderRadius: "3px" },
  viewAll: {
    marginTop: "0.875rem",
    width: "100%",
    background: "transparent",
    border: "1px solid #E2E5EC",
    borderRadius: "8px",
    padding: "0.5rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.82rem",
    fontWeight: 600,
    color: "#1A4E8A",
    cursor: "pointer",
    transition: "background 0.15s",
  },
};

const modules = [
  {
    icon: "🌾",
    label: "Crop Resilience",
    progress: 65,
    path: "/learning/crop",
  },
  {
    icon: "🧑‍🌾",
    label: "Youth Climate Action",
    progress: 30,
    path: "/learning/youth",
  },
  {
    icon: "💧",
    label: "Water & Drought",
    progress: 0,
    path: "/learning/water",
  },
  {
    icon: "🌍",
    label: "Climate Science",
    progress: 100,
    path: "/learning/climate",
  },
];

export default function LearningCard() {
  const navigate = useNavigate();

  return (
    <div style={s.card} id="learning">
      <div style={s.title}>📚 Learning Center</div>
      <div style={s.grid}>
        {modules.map((m) => (
          <button key={m.label} style={s.item} onClick={() => navigate(m.path)}>
            <div style={s.itemBg}>{m.icon}</div>
            <div style={s.itemLabel}>{m.label}</div>
            <div style={s.progress}>
              <div style={{ ...s.progressFill, width: `${m.progress}%` }} />
            </div>
          </button>
        ))}
      </div>
      <button style={s.viewAll} onClick={() => navigate("/learning")}>
        View all modules →
      </button>
    </div>
  );
}
