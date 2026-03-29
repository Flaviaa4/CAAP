import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const alertIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const s = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 1.4fr",
    gap: "1.25rem",
    marginBottom: "1.25rem",
  },
  mapCard: {
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 12px rgba(26,78,138,0.08)',
    height: '320px',
    border: '1px solid #E2E5EC',
    position: 'relative',
    zIndex: 0,
  },
  card: {
    background: "#fff",
    border: "1px solid #E2E5EC",
    borderRadius: "16px",
    padding: "1.4rem",
    boxShadow: "0 2px 12px rgba(26,78,138,0.08)",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.875rem",
  },
  title: {
    fontFamily: "Fraunces, serif",
    fontSize: "1rem",
    fontWeight: 600,
    color: "#1A4E8A",
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },
  btnSubmit: {
    background: "#1A4E8A",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "0.55rem 1.25rem",
    fontFamily: "DM Sans, sans-serif",
    fontSize: "0.85rem",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  reportItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    padding: "0.75rem 0",
    borderBottom: "1px solid #E2E5EC",
  },
  pinIcon: { fontSize: "1.3rem", flexShrink: 0, marginTop: "2px" },
  reportText: { fontSize: "0.85rem", color: "#3D4452", lineHeight: 1.4 },
  reportMeta: { fontSize: "0.75rem", color: "#9AA0AC", marginTop: "2px" },
  empty: {
    textAlign: "center",
    padding: "2rem 0",
    color: "#9AA0AC",
    fontSize: "0.88rem",
  },
};

// Default pins on map (African cities)
const defaultPins = [
  { lat: -1.9441, lng: 30.0619, label: "Kigali, Rwanda", type: "normal" },
  { lat: -1.2921, lng: 36.8219, label: "Nairobi, Kenya", type: "alert" },
  { lat: 6.5244, lng: 3.3792, label: "Lagos, Nigeria", type: "alert" },
  { lat: 14.6928, lng: -17.4467, label: "Dakar, Senegal", type: "normal" },
  { lat: -11.7022, lng: 43.2551, label: "Moroni, Comoros", type: "normal" },
  { lat: 9.0579, lng: 7.4951, label: "Abuja, Nigeria", type: "alert" },
  { lat: -25.9655, lng: 32.5832, label: "Maputo, Mozambique", type: "alert" },
  { lat: 15.5517, lng: 32.5324, label: "Khartoum, Sudan", type: "normal" },
];

function getIcon(impact) {
  if (impact === "High Impact") return "🔴";
  if (impact === "Moderate") return "🟠";
  if (impact === "Watch / Monitor") return "🟡";
  if (impact === "Positive / Solution") return "🟢";
  return "🔵";
}

export default function CommunityReports({ onSubmitClick, reports }) {
  return (
    <div style={s.wrapper} id="reports">
      {/* REAL MAP */}
      <div style={s.mapCard}>
        <MapContainer
          center={[0, 20]}
          zoom={3}
          style={{ height: "100%", width: "100%" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* Default city pins */}
          {defaultPins.map((pin, i) => (
            <Marker
              key={i}
              position={[pin.lat, pin.lng]}
              icon={pin.type === "alert" ? alertIcon : greenIcon}
            >
              <Popup>{pin.label}</Popup>
            </Marker>
          ))}

          {/* Submitted report pins */}
          {reports.map((r, i) => (
            <Marker
              key={`report-${i}`}
              position={[-1.9441, 30.0619]}
              icon={r.impact === "High Impact" ? alertIcon : greenIcon}
            >
              <Popup>
                <strong>{r.type}</strong>
                <br />
                {r.region} · {r.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* REPORTS LIST */}
      <div style={s.card}>
        <div style={s.header}>
          <div style={s.title}>📋 Community Reports</div>
          <button style={s.btnSubmit} onClick={onSubmitClick}>
            + Submit Report
          </button>
        </div>

        {reports.length === 0 ? (
          <div style={s.empty}>
            No reports yet. Be the first to submit one! 🌍
          </div>
        ) : (
          reports.map((r, i) => (
            <div
              key={i}
              style={{
                ...s.reportItem,
                ...(i === reports.length - 1 ? { borderBottom: "none" } : {}),
              }}
            >
              <div style={s.pinIcon}>{getIcon(r.impact)}</div>
              <div>
                <div style={s.reportText}>
                  <strong>{r.type}</strong> — {r.description}
                </div>
                <div style={s.reportMeta}>
                  📍 {r.region} · {r.name} · Just now
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
