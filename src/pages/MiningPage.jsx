import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Truck, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function MiningPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Mining Telemetry</div>
          <h1 className="page-hero__title">Weighbridge automation & dispatch logistics.</h1>
          <p className="page-hero__desc">
            Automated weighbridge hardware integration, digital transit passes, and real-time mineral extraction telemetry for NMDC and public-sector operations.
          </p>
        </div>
      </section>

      {/* Flagship Mining Client Strip */}
      <section style={{ padding: '28px 0', borderTop: '1px solid var(--stone-200)', borderBottom: '1px solid var(--stone-200)', background: 'var(--stone-50)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(24px, 4vw, 48px)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                Flagship Deployment
              </span>
              {/* NMDC SVG Logo */}
              <div title="NMDC" style={{ display: 'inline-flex', alignItems: 'center' }}>
                <svg viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                  <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                  <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                  <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
                </svg>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, fontSize: '0.8125rem', color: 'var(--ink-secondary)', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} style={{ color: '#059669' }} /> Multi-mine complex deployment
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} style={{ color: '#059669' }} /> Tamper-proof load-cell telemetry
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={14} style={{ color: '#059669' }} /> State mining directorate integration
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 56 }}>
            {[
              {
                icon: <Scale size={24} strokeWidth={2.2} />,
                color: '#0284C7',
                bg: 'rgba(2, 132, 199, 0.08)',
                border: 'rgba(2, 132, 199, 0.22)',
                title: 'Automated Weighbridge Capture',
                desc: 'Hardware-integrated load cell measurement with tamper-proof gross/tare logging and instant digital weight tickets.'
              },
              {
                icon: <Truck size={24} strokeWidth={2.2} />,
                color: '#D97706',
                bg: 'rgba(217, 119, 6, 0.08)',
                border: 'rgba(217, 119, 6, 0.22)',
                title: 'Electronic Transit Passes (e-TP)',
                desc: 'Tamper-resistant digital dispatch passes with QR verification and automatic vehicle reconciliation.'
              },
              {
                icon: <BarChart3 size={24} strokeWidth={2.2} />,
                color: '#059669',
                bg: 'rgba(5, 150, 105, 0.08)',
                border: 'rgba(5, 150, 105, 0.22)',
                title: 'Production & Shift Analytics',
                desc: 'Real-time extraction rate dashboards, weighbridge throughput metrics, and dispatch bottlenecks tracking.'
              },
              {
                icon: <ShieldCheck size={24} strokeWidth={2.2} />,
                color: '#DC2626',
                bg: 'rgba(220, 38, 38, 0.08)',
                border: 'rgba(220, 38, 38, 0.22)',
                title: 'Statutory Mining Compliance',
                desc: 'Automated regulatory filings compliant with state mining directorates, royalty frameworks, and audit rules.'
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: 32,
                  background: 'var(--stone-50)',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--stone-200)',
                  transition: 'all var(--t-fast)',
                }}
              >
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 52,
                  height: 52,
                  borderRadius: 'var(--r-md)',
                  background: item.bg,
                  color: item.color,
                  border: `1px solid ${item.border}`,
                  marginBottom: 20
                }}>
                  {item.icon}
                </span>
                <h4 style={{ fontSize: '1.1rem', marginBottom: 10 }}>{item.title}</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Talk to us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
