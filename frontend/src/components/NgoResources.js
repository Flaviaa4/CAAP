import React from "react";

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
  item: {
    padding: "0.75rem 0",
    borderBottom: "1px solid #E2E5EC",
  },
  itemLast: {
    padding: "0.75rem 0",
  },
  itemTitle: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#1A4E8A",
    marginBottom: "0.25rem",
  },
  itemDesc: {
    fontSize: "0.78rem",
    color: "#9AA0AC",
    lineHeight: 1.5,
  },
  tag: {
    display: "inline-block",
    background: "rgba(26,78,138,0.08)",
    color: "#1A4E8A",
    fontSize: "0.68rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "0.15rem 0.5rem",
    borderRadius: "20px",
    marginBottom: "0.35rem",
  },
};

const resources = [
  {
    tag: "Funding",
    title: "Access Climate Funding",
    desc: "Climate management departments for communities seeking adaptation funding through international NGOs and the Green Climate Fund.",
  },
  {
    tag: "Training",
    title: "Free Training Programs",
    desc: "NGO-led workshops on climate-smart agriculture available for farmers in Rwanda, Kenya, and Uganda.",
  },
  {
    tag: "Research",
    title: "Climate Data & Reports",
    desc: "Access free climate research reports and adaptation toolkits from UNEP, FAO, and the African Development Bank.",
  },
];

export default function NgoResources() {
  return (
    <div style={s.card}>
      <div style={s.title}>🤝 NGO Resources</div>
      {resources.map((r, i) => (
        <div key={i} style={i === resources.length - 1 ? s.itemLast : s.item}>
          <div style={s.tag}>{r.tag}</div>
          <div style={s.itemTitle}>{r.title}</div>
          <div style={s.itemDesc}>{r.desc}</div>
        </div>
      ))}
    </div>
  );
}
