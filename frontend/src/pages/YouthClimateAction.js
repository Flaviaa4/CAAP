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
  stepsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    marginTop: "0.75rem",
  },
  step: {
    display: "flex",
    gap: "1rem",
    alignItems: "flex-start",
    background: "rgba(26,78,138,0.05)",
    border: "1px solid rgba(26,78,138,0.10)",
    borderRadius: "10px",
    padding: "0.875rem",
  },
  stepNum: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    background: "#1A4E8A",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.8rem",
    fontWeight: 700,
    flexShrink: 0,
  },
  stepTitle: {
    fontSize: "0.88rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "0.2rem",
  },
  stepText: { fontSize: "0.8rem", color: "#9AA0AC", lineHeight: 1.5 },
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

const steps = [
  {
    title: "Educate Your Community",
    text: "Start by sharing what you know about climate change with your family, school, and local community through talks, social media, or community events.",
  },
  {
    title: "Start a Green Initiative",
    text: "Organize tree planting, clean-up drives, or community gardens in your neighborhood to make a visible impact.",
  },
  {
    title: "Advocate for Change",
    text: "Write to local leaders, participate in climate marches, or join youth climate networks like African Youth for Climate Action.",
  },
  {
    title: "Use Technology",
    text: "Use platforms like CAAP to monitor weather, share reports, and access resources that support climate action in your area.",
  },
];

export default function YouthClimateAction() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const correct = 2;
  const options = [
    "Ignore climate change — it only affects adults",
    "Wait for governments to solve the problem",
    "Educate, advocate, and lead local initiatives",
    "Only focus on recycling at home",
  ];

  return (
    <div style={s.page}>
      <button style={s.back} onClick={() => navigate("/learning")}>
        ← Back to Learning
      </button>

      <div style={s.hero}>
        <div style={s.heroIcon}>🧑‍🌾</div>
        <div>
          <div style={s.heroTitle}>Youth Climate Action</div>
          <div style={s.heroSub}>
            Discover how young Africans are leading climate change initiatives
            in their communities.
          </div>
          <div style={s.meta}>
            <span style={s.metaBadge}>⏱ 25 min</span>
            <span style={s.metaBadge}>🎓 Beginner</span>
            <span style={s.metaBadge}>🌍 Youth Action</span>
          </div>
        </div>
      </div>

      <div style={s.sections}>
        <div style={s.section}>
          <div style={s.sectionTitle}>📖 Why Youth Matter</div>
          <p style={s.text}>
            Young people are both the most affected by climate change and the
            most powerful agents of change. Africa has the youngest population
            in the world — over 60% are under 25. This generation will live with
            the long-term consequences of climate decisions made today. But
            youth are not just victims — they are innovators, activists, and
            community leaders driving climate solutions across the continent.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>🚀 How You Can Take Action</div>
          <div style={s.stepsGrid}>
            {steps.map((step, i) => (
              <div key={i} style={s.step}>
                <div style={s.stepNum}>{i + 1}</div>
                <div>
                  <div style={s.stepTitle}>{step.title}</div>
                  <div style={s.stepText}>{step.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>🌟 African Youth Leading the Way</div>
          <p style={s.text}>
            From Rwanda's Green Schools Initiative to Kenya's Youth for Climate
            Justice, young Africans are already making a difference. In Uganda,
            youth activists have pressured the government to plant millions of
            trees. In South Africa, student-led campaigns have pushed
            universities to commit to carbon neutrality. You too can be part of
            this movement — starting right in your own community.
          </p>
        </div>

        <div style={s.section}>
          <div style={s.sectionTitle}>✅ Quick Quiz</div>
          <div style={s.quiz}>
            <div style={s.quizQ}>
              What is the most effective way for youth to fight climate change?
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
                  ? "✅ Correct! Educating, advocating, and leading initiatives creates real change."
                  : "❌ Not quite. Think about how youth can create the most impact at scale."}
              </div>
            )}
          </div>
        </div>
      </div>

      <button style={s.btnNext} onClick={() => navigate("/learning/water")}>
        Next Module: Water & Drought →
      </button>
    </div>
  );
}
