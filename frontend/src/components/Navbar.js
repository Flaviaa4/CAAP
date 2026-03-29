import React, { useState } from 'react';

const styles = {
  nav: {
    background: '#fff',
    borderBottom: '1px solid #E2E5EC',
    padding: '0 2rem',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
  },
  left: { display: 'flex', alignItems: 'center', gap: '12px' },
  logoWrap: { display: 'flex', alignItems: 'center', gap: '8px' },
  logoIcon: {
    width: '36px', height: '36px',
    background: '#1A4E8A',
    borderRadius: '8px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '1.1rem',
  },
  brand: {
    fontFamily: 'Fraunces, serif',
    fontSize: '1.3rem', fontWeight: 600,
    color: '#1A4E8A', letterSpacing: '-0.01em',
  },
  divider: { width: '1px', height: '28px', background: '#E2E5EC' },
  subtitle: { fontSize: '0.8rem', color: '#9AA0AC', fontWeight: 500 },
  links: { display: 'flex', alignItems: 'center', gap: '4px', listStyle: 'none' },
  link: {
    display: 'flex', alignItems: 'center', gap: '6px',
    padding: '0.4rem 0.875rem',
    borderRadius: '8px',
    fontSize: '0.875rem', fontWeight: 500,
    color: '#9AA0AC',
    textDecoration: 'none', cursor: 'pointer',
    transition: 'all 0.15s',
  },
  linkActive: { background: 'rgba(26,78,138,0.05)', color: '#1A4E8A' },
};

const navItems = [
  { icon: '🌤️', label: 'Weather',  href: '#weather'  },
  { icon: '🌱', label: 'Advisory', href: '#advisory' },
  { icon: '📚', label: 'Learning', href: '#learning' },
  { icon: '📋', label: 'Reports',  href: '#reports'  },
];

export default function Navbar() {
  const [active, setActive] = useState('Weather');

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <div style={styles.logoWrap}>
          <div style={styles.logoIcon}>🌍</div>
          <span style={styles.brand}>CAAP</span>
        </div>
        <div style={styles.divider} />
        <span style={styles.subtitle}>Climate Action & Advisory Platform</span>
      </div>
      <ul style={styles.links}>
        {navItems.map(item => (
          <li key={item.label}>
            <a
              href={item.href}
              style={{ ...styles.link, ...(active === item.label ? styles.linkActive : {}) }}
              onClick={() => setActive(item.label)}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}