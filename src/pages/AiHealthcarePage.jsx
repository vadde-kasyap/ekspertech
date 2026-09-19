import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Scan, 
  Database, 
  Activity, 
  Folder, 
  ShieldCheck, 
  Users, 
  BarChart3 
} from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './AiHealthcarePage.css';

export default function AiHealthcarePage() {
  useDocumentTitle('Healthcare Data Platforms & Clinical AI | Eksper Technologies');

  return (
    <div className="healthcare-page">
      {/* 1. HERO SECTION */}
      <section className="healthcare-hero">
        <div className="container healthcare-hero__container">
          {/* Left Hero Content */}
          <div className="healthcare-hero__left">
            <div className="healthcare-hero__eyebrow">
              <span className="healthcare-hero__eyebrow-dash"></span>
              Industry &bull; Healthcare &amp; Life Sciences
            </div>
            
            <h1 className="healthcare-hero__title">
              Data pipelines & clinical AI for payers and providers.
            </h1>
            
            <p className="healthcare-hero__desc">
              FHIR data integration, electronic health record extraction, and machine learning models for risk stratification and precision clinical diagnostics.
            </p>
            
            <div className="healthcare-hero__cta-wrap">
              <Link to="/contact" className="healthcare-hero__btn">
                Talk to our team <ArrowRight size={15} />
              </Link>
            </div>

            <div className="healthcare-hero__metrics">
              <div className="healthcare-hero__metric-item">
                <span className="healthcare-hero__metric-title">Interoperable</span>
                <span className="healthcare-hero__metric-sub">systems</span>
              </div>
              <div className="healthcare-hero__metric-divider"></div>
              <div className="healthcare-hero__metric-item">
                <span className="healthcare-hero__metric-title">Clinical data</span>
                <span className="healthcare-hero__metric-sub">expertise</span>
              </div>
              <div className="healthcare-hero__metric-divider"></div>
              <div className="healthcare-hero__metric-item">
                <span className="healthcare-hero__metric-title">Real-world</span>
                <span className="healthcare-hero__metric-sub">outcomes</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="healthcare-hero__right">
            <div className="healthcare-hero__visual-wrap">
              <img 
                src="/images/healthcare/healthcare-hero-radiologist.png" 
                alt="Clinician using multi-screen clinical AI diagnostic workstation"
                className="healthcare-hero__image"
                loading="eager"
                fetchPriority="high"
              />

              {/* Floating Pill Badges */}
              <div className="healthcare-hero__badges-col">
                <div className="healthcare-badge-pill">
                  <span className="healthcare-badge-pill__icon">
                    <Folder size={16} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-badge-pill__text">EHR Integration</span>
                </div>

                <div className="healthcare-badge-pill">
                  <span className="healthcare-badge-pill__icon">
                    <Activity size={16} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-badge-pill__text">Clinical Insights</span>
                </div>

                <div className="healthcare-badge-pill">
                  <span className="healthcare-badge-pill__icon">
                    <ShieldCheck size={16} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-badge-pill__text">Improved Outcomes</span>
                </div>

                <div className="healthcare-badge-pill">
                  <span className="healthcare-badge-pill__icon">
                    <Users size={16} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-badge-pill__text">Payers & Providers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HEALTHCARE CLIENT TRUST STRIP */}
      <section className="healthcare-trust-strip">
        <div className="container">
          <div className="healthcare-trust-strip__eyebrow">
            <span className="healthcare-trust-strip__eyebrow-text">
              Platforms &amp; Engineering Delivered For Leading Healthcare Organisations
            </span>
          </div>
          <div className="healthcare-trust-strip__logos">
            {/* Interwell Health */}
            <div className="healthcare-trust-strip__logo" title="interwell health">
              <svg viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                  interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                </text>
              </svg>
            </div>

            {/* Geisinger */}
            <div className="healthcare-trust-strip__logo" title="Geisinger">
              <svg viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
              </svg>
            </div>

            {/* CVS Health */}
            <div className="healthcare-trust-strip__logo" title="CVSHealth">
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

      {/* 3. CAPABILITIES SECTION */}
      <section className="healthcare-capabilities">
        <div className="container">
          <div className="healthcare-capabilities__header">
            <div className="healthcare-capabilities__eyebrow">
              <span className="healthcare-capabilities__eyebrow-dash"></span>
              Capabilities
            </div>
            <h2 className="healthcare-capabilities__title">
              Data and AI built into healthcare operations
            </h2>
            <p className="healthcare-capabilities__desc">
              We engineer FHIR-compliant pipelines, EHR data extraction, and machine learning models that integrate directly into provider care management and payer claims workflows.
            </p>
          </div>

          <div className="healthcare-capabilities__grid">
            {/* Left Column: Capability Cards */}
            <div className="healthcare-capabilities__cards-col">
              {[
                {
                  icon: <Database size={22} strokeWidth={2.2} />,
                  color: '#0284C7',
                  bg: '#E0F2FE',
                  border: '#BAE6FD',
                  title: 'FHIR Pipelines & EHR Ingestion',
                  desc: 'Normalized clinical and claims ingestion pipelines compliant with HL7 and FHIR standards.'
                },
                {
                  icon: <Activity size={22} strokeWidth={2.2} />,
                  color: '#E11D48',
                  bg: '#FFE4E6',
                  border: '#FECDD3',
                  title: 'Risk Stratification & Cohort Analytics',
                  desc: 'Predictive cohort scoring and automated risk identification embedded into care team workflows.'
                },
                {
                  icon: <Scan size={22} strokeWidth={2.2} />,
                  color: '#059669',
                  bg: '#D1FAE5',
                  border: '#A7F3D0',
                  title: 'Clinical Imaging & Diagnostic AI',
                  desc: 'Computer vision algorithms for radiology and pathology anomaly detection.'
                },
                {
                  icon: <Brain size={22} strokeWidth={2.2} />,
                  color: '#7C3AED',
                  bg: '#EDE9FE',
                  border: '#DDD6FE',
                  title: 'NLP for Unstructured Clinical Records',
                  desc: 'Natural language extraction for medical notes, pathology summaries, and discharge documentation.'
                },
              ].map((item, i) => (
                <div key={i} className="healthcare-cap-card">
                  <div 
                    className="healthcare-cap-card__icon-box"
                    style={{ background: item.bg, color: item.color, border: `1px solid ${item.border}` }}
                  >
                    {item.icon}
                  </div>
                  <div className="healthcare-cap-card__content">
                    <strong className="healthcare-cap-card__title">{item.title}</strong>
                    <span className="healthcare-cap-card__desc">{item.desc}</span>
                  </div>
                  <div className="healthcare-cap-card__arrow">
                    <ArrowRight size={15} strokeWidth={2.2} />
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Hospital Atrium Visual Card */}
            <div className="healthcare-atrium-card">
              <div className="healthcare-atrium-card__image-wrap">
                <img 
                  src="/images/healthcare/healthcare-atrium-doctors.png" 
                  alt="Modern clinical facility with healthcare professionals" 
                  className="healthcare-atrium-card__image"
                />
                <div className="healthcare-atrium-card__typo">
                  <span>PEOPLE</span>
                  <span>TECHNOLOGY</span>
                  <span>HEALTHIER</span>
                  <span>COMMUNITIES</span>
                </div>
              </div>

              <div className="healthcare-atrium-card__footer">
                <div className="healthcare-atrium-card__stat-col">
                  <span className="healthcare-atrium-card__stat-icon">
                    <Users size={20} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-atrium-card__stat-label">
                    Connected care ecosystems
                  </span>
                </div>

                <div className="healthcare-atrium-card__stat-col">
                  <span className="healthcare-atrium-card__stat-icon">
                    <BarChart3 size={20} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-atrium-card__stat-label">
                    Data-driven clinical decisions
                  </span>
                </div>

                <div className="healthcare-atrium-card__stat-col">
                  <span className="healthcare-atrium-card__stat-icon">
                    <ShieldCheck size={20} strokeWidth={2.2} />
                  </span>
                  <span className="healthcare-atrium-card__stat-label">
                    More efficient payer operations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA SECTION */}
      <section className="healthcare-cta">
        <div className="healthcare-cta__arc-line"></div>
        <div className="container healthcare-cta__container">
          {/* Left CTA Info */}
          <div className="healthcare-cta__left">
            <div className="healthcare-cta__eyebrow">
              <span className="healthcare-cta__eyebrow-dash"></span>
              Let's Work Together
            </div>
            <h2 className="healthcare-cta__title">
              Discuss healthcare data & AI solutions
            </h2>
            <p className="healthcare-cta__desc">
              Connect with our engineering team to discuss FHIR integration, clinical AI models, and data pipelines.
            </p>
            <Link to="/contact" className="healthcare-cta__btn">
              Talk to us <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right CTA Holographic Visual */}
          <div className="healthcare-cta__right">
            <div className="healthcare-cta__editorial-tag">
              <p className="healthcare-cta__editorial-text">
                DATA.<br />
                PEOPLE.<br />
                PROGRESS.
              </p>
            </div>
            <div className="healthcare-cta__visual-wrap">
              <img 
                src="/images/healthcare/healthcare-cta-hologram.png" 
                alt="Doctor interfacing with healthcare data hologram" 
                className="healthcare-cta__image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
