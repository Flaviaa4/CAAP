import React, { useState } from "react";

const s = {
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
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1.25rem",
  },
  title: {
    fontFamily: "Fraunces, serif",
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "#1A4E8A",
  },
  closeBtn: {
    background: "none",
    border: "none",
    fontSize: "1.2rem",
    cursor: "pointer",
    color: "#9AA0AC",
    lineHeight: 1,
  },
  group: { marginBottom: "0.875rem" },
  label: {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    color: "#1A4E8A",
    opacity: 0.6,
    marginBottom: "0.35rem",
  },
  input: {
    width: "100%",
    background: "#fff",
    border: "1px solid #E2E5EC",
    borderRadius: "8px",
    padding: "0.6rem 0.875rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.9rem",
    color: "#3D4452",
    outline: "none",
  },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" },
  btnFull: {
    width: "100%",
    background: "#1A4E8A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.75rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    marginTop: "0.5rem",
  },
  success: {
    textAlign: "center",
    padding: "2rem 0",
    fontSize: "1rem",
    color: "#1A4E8A",
    fontWeight: 600,
  },
};

export default function ReportModal({ onClose, onSubmit }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    region: "",
    impact: "",
    type: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.region || !form.type || !form.description) {
      alert("Please fill in all fields.");
      return;
    }
    onSubmit(form);
    setSubmitted(true);
    setTimeout(() => onClose(), 1500);
  };

  return (
    <div style={s.overlay} onClick={onClose}>
      <div style={s.modal} onClick={(e) => e.stopPropagation()}>
        <div style={s.header}>
          <div style={s.title}>Submit a Climate Report</div>
          <button style={s.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {submitted ? (
          <div style={s.success}>
            ✅ Report submitted successfully!
            <br />
            <span
              style={{ fontSize: "0.85rem", fontWeight: 400, color: "#9AA0AC" }}
            >
              Thank you for contributing to CAAP.
            </span>
          </div>
        ) : (
          <>
            <div style={s.group}>
              <label style={s.label}>Your Name</label>
              <input
                style={s.input}
                name="name"
                placeholder="e.g. Everlyne"
                onChange={handleChange}
              />
            </div>
            <div style={s.row}>
              <div style={s.group}>
                <label style={s.label}>Region / District</label>
                <input
                  style={s.input}
                  name="region"
                  placeholder="e.g. Kigali"
                  onChange={handleChange}
                />
              </div>
              <div style={s.group}>
                <label style={s.label}>Impact Level</label>
                <select style={s.input} name="impact" onChange={handleChange}>
                  <option value="">Select level</option>
                  <option>High Impact</option>
                  <option>Moderate</option>
                  <option>Watch / Monitor</option>
                  <option>Positive / Solution</option>
                </select>
              </div>
            </div>
            <div style={s.group}>
              <label style={s.label}>Event Type</label>
              <select style={s.input} name="type" onChange={handleChange}>
                <option value="">Select event type</option>
                <option>Flooding</option>
                <option>Drought</option>
                <option>Locust / Pest</option>
                <option>Crop Damage</option>
                <option>Hailstorm</option>
                <option>Wildfire</option>
                <option>Landslide</option>
                <option>Climate Solution</option>
                <option>Other</option>
              </select>
            </div>
            <div style={s.group}>
              <label style={s.label}>Description</label>
              <textarea
                style={{ ...s.input, minHeight: "80px", resize: "vertical" }}
                name="description"
                placeholder="Describe what you observed..."
                onChange={handleChange}
              />
            </div>
            <button style={s.btnFull} onClick={handleSubmit}>
              Submit Report
            </button>
          </>
        )}
      </div>
    </div>
  );
}
