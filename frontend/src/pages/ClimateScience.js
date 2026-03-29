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
  factGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "0.75rem",
    marginTop: "0.75rem",
  },
  fact: {
    background: "rgba(26,78,138,0.05)",
    border: "1px solid rgba(26,78,138,0.10)",
    borderRadius: "10px",
    padding: "0.875rem",
  },
  factTitle: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "0.25rem",
  },
  factText: { fontSize: "0.8rem", color: "#9AA0AC", lineHeight: 1.5 },
  timelineItem: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    paddingBottom: "1rem",
    borderBottom: "1px solid #E2E5EC",
    marginBottom: "0.75rem",
  },
  timelineYear: {
    background: "#1A4E8A",
    color: "#fff",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "0.25rem 0.6rem",
    borderRadius: "6px",
    whiteSpace: "nowrap",
    flexShrink: 0,
    marginTop: "2px",
  },
  timelineText: { fontSize: "0.85rem", color: "#3D4452", lineHeight: 1.5 },
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
  completedBanner: {
    background: "#1A4E8A",
    borderRadius: "12px",
    padding: "1.25rem",
    textAlign: "center",
    marginTop: "2rem",
  },
  completedTitle: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.2rem",
    color: "#fff",
    marginBottom: "0.4rem",
  },
  completedSub: { fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" },
  btnBack: {
    marginTop: "1rem",
    width: "100%",
    background: "rgba(255,255,255,0.15)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.3)",
    borderRadius: "8px",
    padding: "0.75rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
  },
};

const timeline = [
  {
    year: "1950s",
    text: "Scientists begin measuring rising CO₂ levels in the atmosphere for the first time.",
  },
  {
    year: "1988",
    text: "The Intergovernmental Panel on Climate Change (IPCC) is established to assess climate science.",
  },
  {
    year: "2009",
    text: "The Copenhagen Accord recognizes Africa as the most vulnerable continent to climate impacts.",
  },
  {
    year: "2015",
    text: "The Paris Agreement commits nations to limiting global warming to 1.5°C above pre-industrial levels.",
  },
  {
    year: "2023",
    text: "Africa experiences record-breaking droughts, floods, and heatwaves driven by climate change.",
  },
];

const facts = [
  {
    title: "🌡️ Temperature Rise",
    text: "Africa is warming 1.5x faster than the global average, threatening agriculture and water supplies.",
  },
  {
    title: "🌊 Sea Level Rise",
    text: "Coastal cities like Lagos, Dar es Salaam, and Maputo face flooding risks from rising seas.",
  },
  {
    title: "🌧️ Rainfall Shifts",
    text: "Climate change is making wet seasons shorter and dry seasons longer across sub-Saharan Africa.",
  },
  {
    title: "🌾 Food Security",
    text: "Crop yields in Africa could fall by up to 20% by 2050 if current warming trends continue.",
  },
];

export default function ClimateScience() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const correct = 0;
  const options = [
    "Africa warms faster than the global average",
    "Africa contributes the most to global emissions",
    "Climate change only affects coastal regions",
    "Warming has no effect on African agriculture",
  ];

  return (
    <div style={s.page}>
      <button style={s.back} onClick={() => navigate("/learning")}>
        ← Back to Learning
      </button>

      <div style={s.hero}>
        <div style={s.heroIcon}>🌍</div>
        <div>
          <div style={s.heroTitle}>Climate Science Basics</div>
          <div style={s.heroSub}>
            Why Africa faces the greatest climate risk and what the science
            tells us.
          </div>
          <div style={s.meta}>
            <span style={s.metaBadge}>⏱ 30 min</span>
            <span style={s.metaBadge}>🎓 Intermediate</span>
            <span style={s.metaBadge}>🌍 Climate Science</span>
          </div>
        </div>
      </div>

      <div style={s.sections}>
        <div style={s.section}>
          <div style={s.sectionTitle}>📖 What is Climate Change?</div>
          <p style={s.text}>
            Climate change refers to long-term shifts in global temperatures and
            weather patterns. While some of these changes are natural, since the
            Industrial Revolution human activities — especially burning fossil
            fuels — have become the main driver. Carbon dioxide and other
            greenhouse gases trap heat in the atmosphere, causing the planet to
            warm. This warming disrupts weather systems, melts ice caps, raises
            sea levels, and increases the frequency of extreme weather events
            like droughts, floods, and heatwaves.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>📊 How Climate Change Affects Africa</div>
          <div style={s.factGrid}>
            {facts.map((f, i) => (
              <div key={i} style={s.fact}>
                <div style={s.factTitle}>{f.title}</div>
                <div style={s.factText}>{f.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>🕐 Climate Timeline</div>
          {timeline.map((t, i) => (
            <div
              key={i}
              style={{
                ...s.timelineItem,
                ...(i === timeline.length - 1
                  ? { borderBottom: "none", marginBottom: 0, paddingBottom: 0 }
                  : {}),
              }}
            >
              <div style={s.timelineYear}>{t.year}</div>
              <div style={s.timelineText}>{t.text}</div>
            </div>
          ))}
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>✅ Quick Quiz</div>
          <div style={s.quiz}>
            <div style={s.quizQ}>
              Which statement about climate change in Africa is true?
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
                  ? "✅ Correct! Africa warms 1.5x faster than the global average despite contributing least to emissions."
                  : "❌ Not quite. Think about which continent is most affected despite contributing the least."}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={s.completedBanner}>
        <div style={s.completedTitle}>🎉 You have completed all modules!</div>
        <div style={s.completedSub}>
          Great work. Keep learning and taking action for climate change.
        </div>
        <button style={s.btnBack} onClick={() => navigate("/learning")}>
          Back to Learning Center
        </button>
      </div>
    </div>
  );
}
