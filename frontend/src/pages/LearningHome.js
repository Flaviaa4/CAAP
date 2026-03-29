import React from 'react';
import { useNavigate } from 'react-router-dom';

const s = {
  page: { maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.75rem 3rem' },
  header: { marginBottom: '2rem' },
  back: {
    background: 'none', border: 'none',
    color: '#1A4E8A', fontSize: '0.88rem',
    fontWeight: 600, cursor: 'pointer',
    display: 'flex', alignItems: 'center', gap: '5px',
    marginBottom: '1rem', padding: 0,
    fontFamily: 'DM Sans, sans-serif',
  },
  title: {
    fontFamily: 'Fraunces, serif',
    fontSize: '2rem', fontWeight: 600,
    color: '#1A4E8A', marginBottom: '0.5rem',
  },
  sub: { fontSize: '0.95rem', color: '#9AA0AC', lineHeight: 1.7 },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
    gap: '1.25rem',
  },
  card: {
    background: '#fff',
    border: '1px solid #E2E5EC',
    borderRadius: '16px',
    overflow: 'hidden',
    cursor: 'pointer',
    boxShadow: '0 2px 12px rgba(26,78,138,0.08)',
    transition: 'transform 0.15s, box-shadow 0.2s',
  },
  thumb: {
    height: '120px',
    background: '#1A4E8A',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '3rem',
  },
  body: { padding: '1.2rem' },
  cat: {
    fontSize: '0.68rem', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.1em',
    color: '#1A4E8A', opacity: 0.55, marginBottom: '0.35rem',
  },
  moduleTitle: {
    fontFamily: 'Fraunces, serif',
    fontSize: '1rem', color: '#1A4E8A',
    marginBottom: '0.5rem', lineHeight: 1.35,
  },
  meta: {
    display: 'flex', gap: '1rem',
    fontSize: '0.74rem', color: '#9AA0AC',
    marginBottom: '0.875rem',
  },
  progressWrap: { height: '3px', background: '#EEEFF2', borderRadius: '3px', overflow: 'hidden' },
  progressFill: { height: '100%', background: '#1A4E8A', borderRadius: '3px' },
  progressNote: { fontSize: '0.7rem', color: '#9AA0AC', marginTop: '5px' },
  progressDone: { fontSize: '0.7rem', color: '#1A4E8A', marginTop: '5px', fontWeight: 600 },
};

const modules = [
  {
    icon: '🌾', cat: 'Agriculture',
    title: 'Crop Resilience',
    duration: '20 min', level: 'Beginner',
    progress: 65, path: '/learning/crop',
    desc: 'Learn how to grow resilient crops that withstand drought, floods, and changing weather patterns.',
  },
  {
    icon: '🧑‍🌾', cat: 'Youth Action',
    title: 'Youth Climate Action',
    duration: '25 min', level: 'Beginner',
    progress: 30, path: '/learning/youth',
    desc: 'Discover how young Africans are leading climate change initiatives in their communities.',
  },
  {
    icon: '💧', cat: 'Water',
    title: 'Water & Drought',
    duration: '20 min', level: 'Intermediate',
    progress: 0, path: '/learning/water',
    desc: 'Understand water scarcity, drought cycles, and practical conservation strategies.',
  },
  {
    icon: '🌍', cat: 'Climate Science',
    title: 'Climate Science Basics',
    duration: '30 min', level: 'Intermediate',
    progress: 100, path: '/learning/climate',
    desc: 'Why Africa faces the greatest climate risk and what the science tells us.',
  },
];

export default function LearningHome() {
  const navigate = useNavigate();

  return (
    <div style={s.page}>
      <div style={s.header}>
        <button style={s.back} onClick={() => navigate('/')}>← Back to Dashboard</button>
        <h1 style={s.title}>Learning Center</h1>
        <p style={s.sub}>Short, practical lessons on climate adaptation for rural communities and youth leaders.</p>
      </div>

      <div style={s.grid}>
        {modules.map(m => (
          <div key={m.title} style={s.card} onClick={() => navigate(m.path)}>
            <div style={s.thumb}>{m.icon}</div>
            <div style={s.body}>
              <div style={s.cat}>{m.cat}</div>
              <div style={s.moduleTitle}>{m.title}</div>
              <p style={{ fontSize: '0.8rem', color: '#9AA0AC', marginBottom: '0.75rem', lineHeight: 1.5 }}>{m.desc}</p>
              <div style={s.meta}>
                <span>⏱ {m.duration}</span>
                <span>🎓 {m.level}</span>
              </div>
              <div style={s.progressWrap}>
                <div style={{ ...s.progressFill, width: `${m.progress}%` }} />
              </div>
              <div style={m.progress === 100 ? s.progressDone : s.progressNote}>
                {m.progress === 100 ? 'Completed ✓' : m.progress === 0 ? 'Not started' : `${m.progress}% complete`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}