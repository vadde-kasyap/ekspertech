import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Landmark, Activity, GraduationCap, Leaf, Check, Copy } from 'lucide-react';
import './HomePage.css';

const DOMAIN_SECTORS = [
  {
    id: 'government',
    title: 'Government',
    desc: 'Digital public services for a better tomorrow.',
    icon: <Landmark size={18} strokeWidth={2.2} />,
    image: '/images/domains/government.jpg',
    accent: '#1D4ED8',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    desc: 'Smarter care. Healthier lives.',
    icon: <Activity size={18} strokeWidth={2.2} />,
    image: '/images/domains/healthcare.jpg',
    accent: '#0284C7',
  },
  {
    id: 'education',
    title: 'Education',
    desc: 'Enabling brighter futures.',
    icon: <GraduationCap size={18} strokeWidth={2.2} />,
    image: '/images/domains/education.jpg',
    accent: '#0D9488',
  },
  {
    id: 'energy-mining',
    title: 'Energy & Mining',
    desc: 'Sustainable progress through technology.',
    icon: <Leaf size={18} strokeWidth={2.2} />,
    image: '/images/domains/energy-mining.jpg',
    accent: '#D97706',
  },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);
  const clientStripRef = useRef(null);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('info@ekspertech.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-v2">
      {/* 1. HERO */}
      <section className="home-hero">
        {/* Layer 2: Existing Ripple Wave Field */}
        <div className="hero-ripple-field" aria-hidden="true">
          <div className="ripple-ring"></div>
          <div className="ripple-ring"></div>
          <div className="ripple-ring"></div>
          <div className="ripple-ring"></div>
        </div>

        {/* Layer 3A: Desktop Pre-merged Composition Visual */}
        <div className="hero-desktop-merged" aria-hidden="true">
          <img
            src="/images/domains/desktop-merged.jpg"
            alt="Government, Healthcare, Education, Energy & Mining digital transformation"
            className="hero-desktop-merged__img"
            loading="eager"
          />
        </div>

        {/* Layer 3B: Tablet & Mobile Responsive Domains (Tiles on Tablet, Compact on Mobile) */}
        <div className="hero-domains-container" aria-label="Core Industry Domains">
          <div className="hero-domains-grid">
            {DOMAIN_SECTORS.map((sector) => (
              <div key={sector.id} className={`hero-domain-card hero-domain-card--${sector.id}`}>
                <div className="hero-domain-card__image-box">
                  <img
                    src={sector.image}
                    alt={`${sector.title} domain technology`}
                    className="hero-domain-card__img"
                    loading="eager"
                  />
                  <div className="hero-domain-card__overlay"></div>
                </div>
                <div className="hero-domain-card__badge">
                  <span className="hero-domain-card__icon" style={{ color: sector.accent }}>
                    {sector.icon}
                  </span>
                  <div className="hero-domain-card__info">
                    <strong className="hero-domain-card__title">{sector.title}</strong>
                    <span className="hero-domain-card__desc">{sector.desc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Layer 4: Hero headline, supporting text and CTA */}
        <div className="container home-hero__container">
          <div className="home-hero__content">
            <span className="home-hero__eyebrow-pill">PEOPLE &bull; TECHNOLOGY &bull; A BETTER TOMORROW</span>
            <h1 className="home-hero__title">
              Digital transformation, powered by AI.
            </h1>
            <p className="home-hero__sub">
              25+ years building mission-critical systems for government, education, healthcare, mining and energy.
            </p>
            <div className="home-hero__cta">
              <a href="#contact" onClick={scrollToContact} className="btn btn--primary btn--lg">
                Talk to us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="hero-stats-bar">
          <div className="container hero-stats-bar__inner">
            <div className="hero-stat-box">
              <strong className="hero-stat-val">20+</strong>
              <span className="hero-stat-lbl">Years of enterprise technology</span>
            </div>
            <div className="hero-stat-box">
              <strong className="hero-stat-val">5,00,000+</strong>
              <span className="hero-stat-lbl">Users supported</span>
            </div>
            <div className="hero-stat-box">
              <strong className="hero-stat-val">03</strong>
              <span className="hero-stat-lbl">Core solution domains</span>
            </div>
            <div className="hero-stat-box hero-stat-box--global">
              <strong className="hero-stat-val">GLOBAL</strong>
              <span className="hero-stat-lbl">India • USA • UK • Germany</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT STRIP (Logos only, no heading, no caption - continuously scrolling) */}
      <section className="client-strip-section" aria-label="Clients">
        <div className="client-strip-wrapper">
          <div className="client-strip" ref={clientStripRef}>
            {[
              {
                name: 'NMDC',
                content: (
                  <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                    <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                    <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
                  </svg>
                )
              },
              {
                name: 'greenko',
                content: (
                  <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                    <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                    <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                    <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
                  </svg>
                )
              },
              {
                name: 'University of Mysore',
                content: (
                  <div className="client-logo-combo">
                    <img src="/images/Mysore_University_logo.png" alt="University of Mysore" className="client-logo-img" />
                    <span className="client-logo-text">University of Mysore</span>
                  </div>
                )
              },
              {
                name: 'interwell health',
                content: (
                  <svg className="client-logo" viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                    <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                    <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                      interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                    </text>
                  </svg>
                )
              },
              {
                name: 'Geisinger',
                content: (
                  <svg className="client-logo" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
                  </svg>
                )
              },
              {
                name: 'CVSHealth',
                content: (
                  <svg className="client-logo" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                    <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                      CVS<tspan fontWeight="400">Health</tspan>
                    </text>
                  </svg>
                )
              }
            ].concat(
              [
                {
                  name: 'NMDC',
                  content: (
                    <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
                    </svg>
                  )
                },
                {
                  name: 'greenko',
                  content: (
                    <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                      <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                      <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
                    </svg>
                  )
                },
                {
                  name: 'University of Mysore',
                  content: (
                    <div className="client-logo-combo">
                      <img src="/images/Mysore_University_logo.png" alt="University of Mysore" className="client-logo-img" />
                      <span className="client-logo-text">University of Mysore</span>
                    </div>
                  )
                },
                {
                  name: 'interwell health',
                  content: (
                    <svg className="client-logo" viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                      <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                        interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Geisinger',
                  content: (
                    <svg className="client-logo" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
                    </svg>
                  )
                },
                {
                  name: 'CVSHealth',
                  content: (
                    <svg className="client-logo" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                      <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                        CVS<tspan fontWeight="400">Health</tspan>
                      </text>
                    </svg>
                  )
                }
              ]
            ).concat(
              [
                {
                  name: 'NMDC',
                  content: (
                    <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
                    </svg>
                  )
                },
                {
                  name: 'greenko',
                  content: (
                    <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                      <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                      <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
                    </svg>
                  )
                },
                {
                  name: 'University of Mysore',
                  content: (
                    <div className="client-logo-combo">
                      <img src="/images/Mysore_University_logo.png" alt="University of Mysore" className="client-logo-img" />
                      <span className="client-logo-text">University of Mysore</span>
                    </div>
                  )
                },
                {
                  name: 'interwell health',
                  content: (
                    <svg className="client-logo" viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                      <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                        interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Geisinger',
                  content: (
                    <svg className="client-logo" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
                    </svg>
                  )
                },
                {
                  name: 'CVSHealth',
                  content: (
                    <svg className="client-logo" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                      <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                        CVS<tspan fontWeight="400">Health</tspan>
                      </text>
                    </svg>
                  )
                }
              ]
            ).concat(
              [
                {
                  name: 'NMDC',
                  content: (
                    <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
                    </svg>
                  )
                },
                {
                  name: 'greenko',
                  content: (
                    <svg className="client-logo" viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                      <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                      <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
                    </svg>
                  )
                },
                {
                  name: 'University of Mysore',
                  content: (
                    <div className="client-logo-combo">
                      <img src="/images/Mysore_University_logo.png" alt="University of Mysore" className="client-logo-img" />
                      <span className="client-logo-text">University of Mysore</span>
                    </div>
                  )
                },
                {
                  name: 'interwell health',
                  content: (
                    <svg className="client-logo" viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                      <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                        interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                      </text>
                    </svg>
                  )
                },
                {
                  name: 'Geisinger',
                  content: (
                    <svg className="client-logo" viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
                    </svg>
                  )
                },
                {
                  name: 'CVSHealth',
                  content: (
                    <svg className="client-logo" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                      <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                        CVS<tspan fontWeight="400">Health</tspan>
                      </text>
                    </svg>
                  )
                }
              ]
            ).map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="client-strip__item"
                title={client.name}
                aria-label={client.name}
              >
                {client.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES WE BRING */}
      <section className="capabilities-section" id="what-we-do">
        <div className="container">
          <div className="capabilities-header">
            <div className="capabilities-header__left">
              <span className="capabilities-header__accent" aria-hidden="true"></span>
              <h2 className="capabilities-header__title">Capabilities We Bring</h2>
            </div>
            <p className="capabilities-header__sub">
              From strategy to scale &mdash; end-to-end capabilities for real-world impact.
            </p>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-card__media">
                <img
                  src="/images/capabilities/card-visual-1@2x.png"
                  alt="Digital Transformation - Modernising legacy systems into platforms that work"
                  className="capability-card__img"
                  loading="lazy"
                />
              </div>
              <div className="capability-card__body">
                <h3 className="capability-card__title">Digital Transformation</h3>
                <p className="capability-card__desc">
                  Modernising legacy systems into platforms that work.
                </p>
              </div>
            </div>

            <div className="capability-card">
              <div className="capability-card__media">
                <img
                  src="/images/capabilities/card-visual-2@2x.png"
                  alt="Data & AI - Built into operations, not bolted on"
                  className="capability-card__img"
                  loading="lazy"
                />
              </div>
              <div className="capability-card__body">
                <h3 className="capability-card__title">Data & AI</h3>
                <p className="capability-card__desc">
                  Data platforms, analytics and AI built into operations, not bolted on.
                </p>
              </div>
            </div>

            <div className="capability-card">
              <div className="capability-card__media">
                <img
                  src="/images/capabilities/card-visual-3@2x.png"
                  alt="Enterprise Platforms - ERP, e-Governance, LMS & Campus Management"
                  className="capability-card__img"
                  loading="lazy"
                />
              </div>
              <div className="capability-card__body">
                <h3 className="capability-card__title">Enterprise Platforms</h3>
                <p className="capability-card__desc">
                  ERP, e-Governance and campus management at institutional scale.
                </p>
              </div>
            </div>

            <div className="capability-card">
              <div className="capability-card__media">
                <img
                  src="/images/capabilities/card-visual-4@2x.png"
                  alt="Run & Support - 24/7 Operations and Observability"
                  className="capability-card__img"
                  loading="lazy"
                />
              </div>
              <div className="capability-card__body">
                <h3 className="capability-card__title">Run & Support</h3>
                <p className="capability-card__desc">
                  We stay on after go-live.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE TRANSFORM */}
      <section className="section section--warm" id="where-we-work">
        <div className="container">
          <h2 className="section-title">Industries We Transform</h2>
          <div className="five-cards-grid">
            <div className="simple-card">
              <h3 className="simple-card__title">Government & e-Governance</h3>
              <p className="simple-card__line">State departments and public institutions.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Education</h3>
              <p className="simple-card__line">ERP and campus management for schools, colleges and institutions.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Mining</h3>
              <p className="simple-card__line">NMDC and the public-sector mining ecosystem.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Energy</h3>
              <p className="simple-card__line">Technology platforms and infrastructure for energy operations.</p>
            </div>

            <div className="simple-card">
              <h3 className="simple-card__title">Healthcare</h3>
              <p className="simple-card__line">Data and AI for US payers and provider organisations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="section section--stone" id="selected-work">
        <div className="container">
          <div className="section-intro">
            <h2 className="section-title">Selected work</h2>
          </div>

          <div className="work-list">
            <article className="work-row">
              <div className="work-client">
                <span className="work-index">01</span>
                <div>
                  <div className="work-name-wrap">
                    <strong className="work-name">NMDC</strong>
                    <div className="work-logo-badge" title="NMDC">
                      <svg viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                        <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                        <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                        <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
                      </svg>
                    </div>
                  </div>
                  <span className="work-sector">Mining & Public Sector</span>
                </div>
              </div>
              <div className="work-copy">
                <p>
                  <b className="work-label">Problem</b> — Production dispatch, weighbridge capture, and statutory filings operated through disconnected spreadsheets and manual logs.
                </p>
                <p>
                  <b className="work-label work-label--accent">What changed</b> — Centralized telemetry, automated weighbridge data acquisition, and real-time statutory reporting across production units.
                </p>
              </div>
            </article>

            <article className="work-row">
              <div className="work-client">
                <span className="work-index">02</span>
                <div>
                  <div className="work-name-wrap">
                    <strong className="work-name">Greenko</strong>
                    <div className="work-logo-badge" title="Greenko">
                      <svg viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                        <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                        <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                        <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                        <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
                      </svg>
                    </div>
                  </div>
                  <span className="work-sector">Energy & Utilities</span>
                </div>
              </div>
              <div className="work-copy">
                <p>
                  <b className="work-label">Problem</b> — Operational data from distributed renewable generation assets was fragmented across disparate plant-level systems.
                </p>
                <p>
                  <b className="work-label work-label--accent">What changed</b> — Unified generation telemetry and asset performance data into a single real-time operational platform.
                </p>
              </div>
            </article>

            <article className="work-row">
              <div className="work-client">
                <span className="work-index">03</span>
                <div>
                  <div className="work-name-wrap">
                    <strong className="work-name">US Healthcare</strong>
                    <div className="work-logo-badge-group">
                      <div className="work-logo-badge" title="interwell health">
                        <svg viewBox="0 0 170 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                          <circle cx="14" cy="19" r="11" stroke="#0284C7" strokeWidth="2.5" />
                          <circle cx="20" cy="19" r="7" stroke="#0D9488" strokeWidth="2" />
                          <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="16" fontWeight="600" fill="currentColor" letterSpacing="-0.01em">
                            interwell <tspan fontWeight="400" fill="#0284C7">health</tspan>
                          </text>
                        </svg>
                      </div>
                      <div className="work-logo-badge" title="Geisinger">
                        <svg viewBox="0 0 135 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                          <path d="M6 10H16M11 10V28M8 28H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <text x="24" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.03em">Geisinger</text>
                        </svg>
                      </div>
                      <div className="work-logo-badge" title="CVS Health">
                        <svg viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                          <path d="M4 14L10 20L16 14L12 10L10 12L8 10L4 14Z" fill="#CC0000" />
                          <text x="22" y="23" fontFamily="'Inter', sans-serif" fontSize="17" fontWeight="800" fill="currentColor" letterSpacing="-0.02em">
                            CVS<tspan fontWeight="400">Health</tspan>
                          </text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <span className="work-sector">Healthcare & Clinical AI</span>
                </div>
              </div>
              <div className="work-copy">
                <p>
                  <b className="work-label">Problem</b> — Clinical, EHR, and claims data resided in disconnected systems, delaying risk stratification and care team workflows.
                </p>
                <p>
                  <b className="work-label work-label--accent">What changed</b> — Built FHIR-compliant ingestion pipelines and automated cohort analytics integrated directly into care management operations.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. CONTACT */}
      <section className="contact-section" id="contact">
        <div className="container container--narrow">
          <div className="contact-center">
            <h2 className="contact-title">Talk to us.</h2>
            <div className="contact-action-group">
              <a
                href="mailto:info@ekspertech.com"
                className="contact-email-link"
                title="Send an email to info@ekspertech.com"
              >
                info@ekspertech.com
                <ArrowRight size={20} className="contact-email-arrow" />
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`contact-copy-btn ${copied ? 'contact-copy-btn--copied' : ''}`}
                aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
                title={copied ? 'Copied!' : 'Copy to clipboard'}
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span className="contact-copy-tooltip">
                  {copied ? 'Copied to clipboard!' : 'Copy email'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
