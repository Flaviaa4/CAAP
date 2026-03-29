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
    transition: "all 0.15s",
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

export default function CropResilience() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const correct = 1;
  const options = [
    "Plant the same crop every season",
    "Use drought-tolerant seed varieties",
    "Avoid watering crops during dry spells",
    "Remove all trees near farmland",
  ];

  return (
    <div style={s.page}>
      <button style={s.back} onClick={() => navigate("/learning")}>
        ← Back to Learning
      </button>

      <div style={s.hero}>
        <div style={s.heroIcon}>🌾</div>
        <div>
          <div style={s.heroTitle}>Crop Resilience</div>
          <div style={s.heroSub}>
            Learn how to grow crops that survive drought, floods, and
            unpredictable weather.
          </div>
          <div style={s.meta}>
            <span style={s.metaBadge}>⏱ 20 min</span>
            <span style={s.metaBadge}>🎓 Beginner</span>
            <span style={s.metaBadge}>🌾 Agriculture</span>
          </div>
        </div>
      </div>

      <div style={s.sections}>
        <div style={s.section}>
          <div style={s.sectionTitle}>📖 What is Crop Resilience?</div>
          <p style={s.text}>
            Crop resilience refers to the ability of crops to withstand and
            recover from climate-related stresses such as drought, flooding,
            extreme heat, and pest outbreaks. In Africa, where smallholder
            farmers depend on rain-fed agriculture, building crop resilience is
            critical for food security. Climate change is making weather
            patterns more unpredictable, meaning farmers must adapt their
            practices to protect their harvests and livelihoods.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>💡 Key Strategies</div>
          <div style={s.tipGrid}>
            <div style={s.tip}>
              <div style={s.tipTitle}>🌱 Drought-Tolerant Seeds</div>
              <div style={s.tipText}>
                Use seed varieties that are bred to survive low rainfall and
                high temperatures without losing yield.
              </div>
            </div>
            <div style={s.tip}>
              <div style={s.tipTitle}>🔄 Crop Rotation</div>
              <div style={s.tipText}>
                Alternate crops each season to restore soil nutrients and reduce
                pest buildup that weakens plants.
              </div>
            </div>
            <div style={s.tip}>
              <div style={s.tipTitle}>🌳 Agroforestry</div>
              <div style={s.tipText}>
                Plant trees alongside crops to provide shade, reduce
                evaporation, and improve soil moisture retention.
              </div>
            </div>
            <div style={s.tip}>
              <div style={s.tipTitle}>💧 Rainwater Harvesting</div>
              <div style={s.tipText}>
                Collect and store rainwater during wet seasons to irrigate crops
                during dry spells and droughts.
              </div>
            </div>
          </div>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>🌍 Why It Matters in Africa</div>
          <p style={s.text}>
            Over 60% of Africa's population depends on agriculture for their
            livelihood. Yet the continent faces increasing droughts, irregular
            rainfall, and rising temperatures. Crops like maize, sorghum, and
            beans — staples for millions — are highly sensitive to these
            changes. By adopting resilient farming practices, smallholder
            farmers can protect their harvests, reduce food insecurity, and
            build long-term economic stability for their families and
            communities.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>✅ Quick Quiz</div>
          <div style={s.quiz}>
            <div style={s.quizQ}>
              Which practice best helps crops survive during a drought?
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
                  ? "✅ Correct! Drought-tolerant varieties are one of the most effective strategies."
                  : "❌ Not quite. Try thinking about what helps plants survive with less water."}
              </div>
            )}
          </div>
        </div>
      </div>

      <button style={s.btnNext} onClick={() => navigate("/learning/youth")}>
        Next Module: Youth Climate Action →
      </button>
    </div>
  );
}
