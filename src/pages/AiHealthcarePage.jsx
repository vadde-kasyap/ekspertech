import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Scan, Database, Activity } from 'lucide-react';

export default function AiHealthcarePage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Healthcare & Clinical AI</div>
          <h1 className="page-hero__title">Data pipelines & clinical AI for payers and providers.</h1>
          <p className="page-hero__desc">
            FHIR data integration, electronic health record extraction, and machine learning models for risk stratification and precision clinical diagnostics.
          </p>
        </div>
      </section>

      {/* Healthcare Client Trust Strip */}
      <section style={{ padding: '32px 0', borderTop: '1px solid var(--stone-200)', borderBottom: '1px solid var(--stone-200)', background: 'var(--stone-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 18 }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
              Healthcare Systems & Payers Built On Our Architecture
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 'clamp(32px, 6vw, 64px)', flexWrap: 'wrap' }}>
            {/* Interwell Health */}
            <div title="interwell health" style={{ display: 'flex', alignItems: 'center', opacity: 0.85 }}>
              <svg viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                  interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                </text>
              </svg>
            </div>

            {/* Geisinger */}
            <div title="Geisinger" style={{ display: 'flex', alignItems: 'center', opacity: 0.85 }}>
              <svg viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
              </svg>
            </div>

            {/* CVS Health */}
            <div title="CVSHealth" style={{ display: 'flex', alignItems: 'center', opacity: 0.85 }}>
              <svg viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                  CVS<tspan fontWeight="400">Health</tspan>
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 56, alignItems: 'center' }}>
            <div>
              <div className="section-eyebrow">Capabilities</div>
              <h2 className="section-title">Data and AI built into healthcare operations</h2>
              <p style={{ color: 'var(--ink-muted)', lineHeight: 1.7, marginBottom: 32 }}>
                We engineer FHIR-compliant pipelines, EHR data extraction, and machine learning models that integrate directly into provider care management and payer claims workflows.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  {
                    icon: <Database size={20} strokeWidth={2.2} />,
                    color: '#0284C7',
                    bg: 'rgba(2, 132, 199, 0.1)',
                    border: 'rgba(2, 132, 199, 0.25)',
                    title: 'FHIR Pipelines & EHR Ingestion',
                    desc: 'Normalized clinical and claims ingestion pipelines compliant with HL7 and FHIR standards.'
                  },
                  {
                    icon: <Activity size={20} strokeWidth={2.2} />,
                    color: '#E11D48',
                    bg: 'rgba(225, 29, 72, 0.1)',
                    border: 'rgba(225, 29, 72, 0.25)',
                    title: 'Risk Stratification & Cohort Analytics',
                    desc: 'Predictive cohort scoring and automated risk identification embedded into care team workflows.'
                  },
                  {
                    icon: <Scan size={20} strokeWidth={2.2} />,
                    color: '#059669',
                    bg: 'rgba(5, 150, 105, 0.1)',
                    border: 'rgba(5, 150, 105, 0.25)',
                    title: 'Clinical Imaging & Diagnostic AI',
                    desc: 'Computer vision algorithms for radiology and pathology anomaly detection.'
                  },
                  {
                    icon: <Brain size={20} strokeWidth={2.2} />,
                    color: '#7C3AED',
                    bg: 'rgba(124, 58, 237, 0.1)',
                    border: 'rgba(124, 58, 237, 0.25)',
                    title: 'NLP for Unstructured Clinical Records',
                    desc: 'Natural language extraction for medical notes, pathology summaries, and discharge documentation.'
                  },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '18px 20px', background: 'var(--stone-50)', borderRadius: 'var(--r-md)', border: '1px solid var(--stone-200)' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 'var(--r-md)',
                      background: item.bg,
                      color: item.color,
                      border: `1px solid ${item.border}`,
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </span>
                    <div>
                      <strong style={{ display: 'block', fontFamily: 'var(--font-display)', fontSize: '0.9375rem', color: 'var(--ink)', marginBottom: 4 }}>{item.title}</strong>
                      <span style={{ fontSize: '0.875rem', color: 'var(--ink-muted)', lineHeight: 1.55 }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: 'var(--r-xl)', overflow: 'hidden', boxShadow: '0 8px 30px -6px rgba(0, 0, 0, 0.08)' }}>
              <img src="/images/editorial/medical_institution.jpg" alt="Healthcare and AI" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--stone">
        <div className="container" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h2 className="section-title">Discuss healthcare data & AI solutions</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
            Connect with our engineering team to discuss FHIR integration, clinical AI models, and data pipelines.
          </p>
          <Link to="/contact" className="btn btn--primary btn--lg">
            Talk to us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
