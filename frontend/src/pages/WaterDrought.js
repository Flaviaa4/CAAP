import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const s = {
  page: { maxWidth: "860px", margin: "0 auto", padding: "2rem 1.75rem 4rem" },
  back: {
    background: "none",
    border: "none",
    color: "#1A4E8A",
    fontSize: "0.88rem",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "1.5rem",
    padding: 0,
    fontFamily: "DM Sans, sans-serif",
  },
  hero: {
    background: "#1A4E8A",
    borderRadius: "16px",
    padding: "2.5rem",
    marginBottom: "2rem",
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  heroIcon: { fontSize: "4rem", flexShrink: 0 },
  heroTitle: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.8rem",
    color: "#fff",
    marginBottom: "0.5rem",
  },
  heroSub: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.65)",
    lineHeight: 1.6,
  },
  meta: { display: "flex", gap: "1rem", marginTop: "0.75rem" },
  metaBadge: {
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    fontSize: "0.75rem",
    fontWeight: 600,
    padding: "0.25rem 0.75rem",
    borderRadius: "20px",
  },
  sections: { display: "flex", flexDirection: "column", gap: "1.5rem" },
  section: {
    background: "#fff",
    border: "1px solid #E2E5EC",
    borderRadius: "16px",
    padding: "1.5rem",
    boxShadow: "0 2px 12px rgba(26,78,138,0.06)",
  },
  sectionTitle: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.1rem",
    color: "#1A4E8A",
    marginBottom: "0.875rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  text: { fontSize: "0.9rem", color: "#3D4452", lineHeight: 1.75 },
  tipGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginTop: "0.75rem",
  },
  tip: {
    background: "rgba(26,78,138,0.05)",
    border: "1px solid rgba(26,78,138,0.10)",
    borderRadius: "10px",
    padding: "0.875rem",
  },
  tipTitle: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "0.25rem",
  },
  tipText: { fontSize: "0.8rem", color: "#9AA0AC", lineHeight: 1.5 },
  statRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "0.75rem",
    marginTop: "0.75rem",
  },
  stat: {
    background: "#1A4E8A",
    borderRadius: "12px",
    padding: "1rem",
    textAlign: "center",
  },
  statNum: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.6rem",
    fontWeight: 600,
    color: "#fff",
    marginBottom: "0.25rem",
  },
  statLabel: { fontSize: "0.75rem", color: "rgba(255,255,255,0.65)" },
  quiz: { marginTop: "0.75rem" },
  quizQ: {
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "0.75rem",
  },
  options: { display: "flex", flexDirection: "column", gap: "0.5rem" },
  option: {
    background: "#fff",
    border: "1px solid #E2E5EC",
    borderRadius: "8px",
    padding: "0.6rem 1rem",
    fontSize: "0.85rem",
    color: "#3D4452",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "DM Sans, sans-serif",
  },
  optionCorrect: {
    background: "rgba(26,78,138,0.08)",
    border: "1px solid #1A4E8A",
    color: "#1A4E8A",
    borderRadius: "8px",
    padding: "0.6rem 1rem",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "DM Sans, sans-serif",
  },
  optionWrong: {
    background: "rgba(224,92,0,0.08)",
    border: "1px solid #E05C00",
    color: "#E05C00",
    borderRadius: "8px",
    padding: "0.6rem 1rem",
    fontSize: "0.85rem",
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "DM Sans, sans-serif",
  },
  feedback: { fontSize: "0.85rem", marginTop: "0.75rem", fontWeight: 600 },
  btnNext: {
    marginTop: "2rem",
    width: "100%",
    background: "#1A4E8A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.875rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default function WaterDrought() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const correct = 1;
  const options = [
    "Use more water during the rainy season",
    "Harvest and store rainwater for dry periods",
    "Dig deeper wells and pump more groundwater",
    "Move to urban areas with piped water",
  ];

  return (
    <div style={s.page}>
      <button style={s.back} onClick={() => navigate("/learning")}>
        ← Back to Learning
      </button>

      <div style={s.hero}>
        <div style={s.heroIcon}>💧</div>
        <div>
          <div style={s.heroTitle}>Water & Drought</div>
          <div style={s.heroSub}>
            Understand water scarcity, drought cycles, and practical
            conservation strategies.
          </div>
          <div style={s.meta}>
            <span style={s.metaBadge}>⏱ 20 min</span>
            <span style={s.metaBadge}>🎓 Intermediate</span>
            <span style={s.metaBadge}>💧 Water</span>
          </div>
        </div>
      </div>

      <div style={s.sections}>
        <div style={s.section}>
          <div style={s.sectionTitle}>📊 Water Crisis in Numbers</div>
          <div style={s.statRow}>
            <div style={s.stat}>
              <div style={s.statNum}>400M+</div>
              <div style={s.statLabel}>Africans lack access to clean water</div>
            </div>
            <div style={s.stat}>
              <div style={s.statNum}>50%</div>
              <div style={s.statLabel}>
                Of Africa faces water stress by 2030
              </div>
            </div>
            <div style={s.stat}>
              <div style={s.statNum}>6hrs</div>
              <div style={s.statLabel}>
                Average time women spend fetching water daily
              </div>
            </div>
          </div>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>📖 Understanding Drought</div>
          <p style={s.text}>
            A drought occurs when a region receives significantly less rainfall
            than normal over an extended period. In Africa, droughts are
            becoming more frequent and severe due to climate change. They affect
            crop production, livestock, drinking water, and energy generation.
            The Horn of Africa, the Sahel, and Southern Africa are among the
            most drought-prone regions, but no part of the continent is immune
            to water stress.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>💡 Water Conservation Strategies</div>
          <div style={s.tipGrid}>
            <div style={s.tip}>
              <div style={s.tipTitle}>🏠 Rainwater Harvesting</div>
              <div style={s.tipText}>
                Collect rainwater from rooftops into tanks or underground
                cisterns for use during dry seasons.
              </div>
            </div>
            <div style={s.tip}>
              <div style={s.tipTitle}>🌱 Drip Irrigation</div>
              <div style={s.tipText}>
                Deliver water directly to plant roots, reducing waste by up to
                60% compared to flood irrigation.
              </div>
            </div>
            <div style={s.tip}>
              <div style={s.tipTitle}>🌾 Mulching</div>
              <div style={s.tipText}>
                Cover soil with organic material to reduce evaporation and keep
                moisture in the ground longer.
              </div>
            </div>
            <div style={s.tip}>
              <div style={s.tipTitle}>🔄 Greywater Reuse</div>
              <div style={s.tipText}>
                Reuse household wastewater from sinks and washing for garden
                irrigation after basic filtration.
              </div>
            </div>
          </div>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>✅ Quick Quiz</div>
          <div style={s.quiz}>
            <div style={s.quizQ}>
              What is the most sustainable way to manage water during a drought?
            </div>
            <div style={s.options}>
              {options.map((opt, i) => {
                let style = s.option;
                if (selected !== null) {
                  if (i === correct) style = s.optionCorrect;
                  else if (i === selected && selected !== correct)
                    style = s.optionWrong;
                }
                return (
                  <button key={i} style={style} onClick={() => setSelected(i)}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {selected !== null && (
              <div
                style={{
                  ...s.feedback,
                  color: selected === correct ? "#1A4E8A" : "#E05C00",
                }}
              >
                {selected === correct
                  ? "✅ Correct! Rainwater harvesting is one of the most effective and affordable solutions."
                  : "❌ Not quite. Think about storing water when it is available for when it is not."}
              </div>
            )}
          </div>
        </div>
      </div>

      <button style={s.btnNext} onClick={() => navigate("/learning/climate")}>
        Next Module: Climate Science →
      </button>
    </div>
  );
}
