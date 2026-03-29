import React, { useState } from "react";

const topics = [
  {
    icon: "🌾",
    label: "Soil Management Tips",
    content: [
      {
        title: "🌱 Test Your Soil",
        text: "Before planting, test your soil pH and nutrient levels. Most crops thrive in soil with a pH of 6.0–7.0.",
      },
      {
        title: "♻️ Add Organic Matter",
        text: "Mix compost, manure, or crop residues into the soil to improve structure, drainage, and fertility.",
      },
      {
        title: "🔄 Practice Crop Rotation",
        text: "Rotate crops each season to prevent nutrient depletion and reduce soil-borne diseases and pests.",
      },
      {
        title: "🌿 Avoid Overploughing",
        text: "Excessive tillage destroys soil structure. Use minimum tillage to preserve moisture and beneficial organisms.",
      },
    ],
  },
  {
    icon: "💧",
    label: "Water Conservation",
    content: [
      {
        title: "🏠 Harvest Rainwater",
        text: "Collect rainwater from rooftops into tanks or barrels to use during dry seasons for irrigation.",
      },
      {
        title: "🌾 Use Mulch",
        text: "Cover soil around plants with organic material to reduce water evaporation by up to 70%.",
      },
      {
        title: "💦 Drip Irrigation",
        text: "Deliver water directly to plant roots instead of flooding fields — saves up to 60% more water.",
      },
      {
        title: "⏰ Water at the Right Time",
        text: "Water crops early morning or late evening to minimize evaporation losses from the sun.",
      },
    ],
  },
];

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
  banner: {
    background: "#E05C00",
    color: "#fff",
    borderRadius: "12px",
    padding: "0.75rem 1rem",
    fontSize: "0.88rem",
    fontWeight: 600,
    marginBottom: "0.875rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    background: "rgba(26,78,138,0.05)",
    border: "1px solid rgba(26,78,138,0.10)",
    borderRadius: "8px",
    padding: "0.625rem 0.75rem",
    fontSize: "0.82rem",
    color: "#3D4452",
    lineHeight: 1.5,
  },
  topicsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.625rem",
  },
  topic: {
    background: "#1A4E8A",
    borderRadius: "12px",
    padding: "0.75rem",
    textAlign: "center",
    cursor: "pointer",
    border: "none",
    width: "100%",
    transition: "opacity 0.15s",
  },
  topicIcon: { fontSize: "1.5rem", marginBottom: "0.3rem" },
  topicLabel: { fontSize: "0.75rem", fontWeight: 600, color: "#fff" },
  loading: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "0.85rem",
    color: "#9AA0AC",
    padding: "1rem 0",
  },
  error: { fontSize: "0.82rem", color: "#E05C00", padding: "0.5rem 0" },

  // Modal
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    background: "#fff",
    borderRadius: "22px",
    padding: "2rem",
    width: "100%",
    maxWidth: "480px",
    margin: "1rem",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
    maxHeight: "85vh",
    overflowY: "auto",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.25rem",
  },
  modalTitle: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#1A4E8A",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#9AA0AC",
    lineHeight: 1,
  },
  tipItem: {
    background: "rgba(26,78,138,0.05)",
    border: "1px solid rgba(26,78,138,0.10)",
    borderRadius: "10px",
    padding: "0.875rem",
    marginBottom: "0.75rem",
  },
  tipTitle: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "0.3rem",
  },
  tipText: { fontSize: "0.82rem", color: "#3D4452", lineHeight: 1.6 },
};

export default function AdvisoryCard({ advisory, loading, error }) {
  const [activeTopic, setActiveTopic] = useState(null);

  return (
    <div style={s.card} id="advisory">
      <div style={s.title}>🌱 Climate Advice</div>

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
          Generating advisory...
        </div>
      )}

      {error && <div style={s.error}>❌ {error}</div>}

      {!loading && !error && advisory && advisory.length > 0 && (
        <>
          <div style={s.banner}>⚠️ {advisory[0]}</div>
          {advisory.length > 1 && (
            <div style={s.items}>
              {advisory.slice(1).map((a, i) => (
                <div key={i} style={s.item}>
                  {a}
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {!loading && !error && (!advisory || advisory.length === 0) && (
        <div style={s.item}>
          ✅ Weather conditions are normal. No urgent action needed.
        </div>
      )}

      <div style={s.topicsGrid}>
        {topics.map((t) => (
          <button
            key={t.label}
            style={s.topic}
            onClick={() => setActiveTopic(t)}
          >
            <div style={s.topicIcon}>{t.icon}</div>
            <div style={s.topicLabel}>{t.label}</div>
          </button>
        ))}
      </div>

      {/* TOPIC MODAL */}
      {activeTopic && (
        <div style={s.overlay} onClick={() => setActiveTopic(null)}>
          <div style={s.modal} onClick={(e) => e.stopPropagation()}>
            <div style={s.modalHeader}>
              <div style={s.modalTitle}>
                {activeTopic.icon} {activeTopic.label}
              </div>
              <button style={s.closeBtn} onClick={() => setActiveTopic(null)}>
                ✕
              </button>
            </div>
            {activeTopic.content.map((c, i) => (
              <div key={i} style={s.tipItem}>
                <div style={s.tipTitle}>{c.title}</div>
                <div style={s.tipText}>{c.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
