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
};

const policies = [
  {
    title: "New Climate Subsidies for Farmers",
    desc: "The government has announced new subsidies to support smallholder farmers affected by drought and flooding across East Africa.",
  },
  {
    title: "Renewable Energy Initiative 2026",
    desc: "A new policy to expand solar energy access in rural communities, reducing reliance on fossil fuels.",
  },
  {
    title: "National Climate Adaptation Plan",
    desc: "A 5-year roadmap for climate resilience across agriculture, water, and infrastructure sectors.",
  },
];

export default function GovernmentPolicies() {
  return (
    <div style={s.card}>
      <div style={s.title}>🏛️ Government Policies</div>
      {policies.map((p, i) => (
        <div key={i} style={i === policies.length - 1 ? s.itemLast : s.item}>
          <div style={s.itemTitle}>{p.title}</div>
          <div style={s.itemDesc}>{p.desc}</div>
        </div>
      ))}
    </div>
  );
}
