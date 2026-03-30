import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const s = {
  nav: {
    background: "#fff",
    borderBottom: "1px solid #E2E5EC",
    padding: "0 2rem",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
  },
  left: { display: "flex", alignItems: "center", gap: "12px" },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
  },
  logoIcon: {
    width: "36px",
    height: "36px",
    background: "#1A4E8A",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.1rem",
  },
  brand: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.3rem",
    fontWeight: 600,
    color: "#1A4E8A",
    letterSpacing: "-0.01em",
  },
  divider: { width: "1px", height: "28px", background: "#E2E5EC" },
  subtitle: { fontSize: "0.8rem", color: "#9AA0AC", fontWeight: 500 },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    listStyle: "none",
  },
  link: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0.4rem 0.875rem",
    borderRadius: "8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "#9AA0AC",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.15s",
    background: "none",
    border: "none",
    fontFamily: "DM Sans, sans-serif",
  },
  linkActive: { background: "rgba(26,78,138,0.05)", color: "#1A4E8A" },
};

const navItems = [
  { icon: "🌤️", label: "Weather", section: "weather" },
  { icon: "🌱", label: "Advisory", section: "advisory" },
  { icon: "📚", label: "Learning", section: "learning" },
  { icon: "📋", label: "Reports", section: "reports" },
];

export default function Navbar() {
  const [active, setActive] = useState("Weather");
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item) => {
    setActive(item.label);

    if (item.label === "Learning") {
      navigate("/learning");
      return;
    }

    // If not on dashboard, go back first then scroll
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(item.section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(item.section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav style={s.nav}>
      <div style={s.left}>
        <div style={s.logoWrap} onClick={() => navigate("/")}>
          <div style={s.logoIcon}>🌍</div>
          <span style={s.brand}>CAAP</span>
        </div>
        <div style={s.divider} />
        <span style={s.subtitle}>Climate Action & Advisory Platform</span>
      </div>
      <ul style={s.links}>
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              style={{
                ...s.link,
                ...(active === item.label ? s.linkActive : {}),
              }}
              onClick={() => handleClick(item)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
