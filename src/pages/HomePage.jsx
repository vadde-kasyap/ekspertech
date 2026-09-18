import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Landmark, Activity, GraduationCap, Leaf, Check, Copy, Laptop, BarChart3, Layers, Headphones, Zap } from 'lucide-react';
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

        {/* Layer 4: Hero headline, supporting text, CTA and Desktop Composition Visual */}
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

          {/* Desktop Pre-merged Composition Visual (Anchored inside container to prevent drifting on zoom) */}
          <div className="hero-desktop-merged" aria-hidden="true">
            <img
              src="/images/domains/desktop-merged.jpg"
              alt="Government, Healthcare, Education, Energy & Mining digital transformation"
              className="hero-desktop-merged__img"
              loading="eager"
            />
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
                name: 'National Mineral Enterprise',
                content: (
                  <svg className="client-logo" viewBox="0 0 165 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                    <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                    <text x="38" y="24" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="13" fontWeight="800" fill="currentColor" letterSpacing="0.05em">MINING PSU</text>
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
                  name: 'National Mineral Enterprise',
                  content: (
                    <svg className="client-logo" viewBox="0 0 165 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="24" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="13" fontWeight="800" fill="currentColor" letterSpacing="0.05em">MINING PSU</text>
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
                  name: 'National Mineral Enterprise',
                  content: (
                    <svg className="client-logo" viewBox="0 0 165 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="24" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="13" fontWeight="800" fill="currentColor" letterSpacing="0.05em">MINING PSU</text>
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
                  name: 'National Mineral Enterprise',
                  content: (
                    <svg className="client-logo" viewBox="0 0 165 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="24" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="13" fontWeight="800" fill="currentColor" letterSpacing="0.05em">MINING PSU</text>
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
          <div className="capabilities-panel">
            <div className="capabilities-header">
              <div className="capabilities-header__left">
                <span className="capabilities-header__eyebrow">CAPABILITIES</span>
                <h2 className="capabilities-header__title">Capabilities We Bring</h2>
                <p className="capabilities-header__sub">
                  From strategy to scale &mdash; end-to-end capabilities for real-world impact.
                </p>
              </div>
              <div className="capabilities-header__right">
                <div className="capabilities-header__tag-wrap">
                  <span className="capabilities-header__tag-line" aria-hidden="true"></span>
                  <span className="capabilities-header__tag-text">
                    TECHNOLOGY THAT TURNS<br />POSSIBILITY INTO PROGRESS.
                  </span>
                </div>
              </div>
            </div>

            <div className="capabilities-grid">
              {/* Card 1: Digital Transformation */}
              <div className="capability-card capability-card--digital-transformation">
                <div className="capability-card__image-wrap">
                  <img
                    src="/images/capabilities/card-visual-1@2x.png"
                    alt="Digital Transformation - Modernising legacy systems into platforms that work"
                    className="capability-card__img"
                    loading="lazy"
                  />
                  <div className="capability-card__image-fade"></div>
                </div>
                <div className="capability-card__badge" title="Digital Transformation">
                  <Laptop size={22} strokeWidth={2.2} />
                </div>
                <div className="capability-card__body">
                  <h3 className="capability-card__title">Digital Transformation</h3>
                  <p className="capability-card__desc">
                    Modernising legacy systems into platforms that work.
                  </p>
                </div>
              </div>

              {/* Card 2: Data & AI */}
              <div className="capability-card capability-card--data-ai">
                <div className="capability-card__image-wrap">
                  <img
                    src="/images/capabilities/card-visual-2@2x.png"
                    alt="Data & AI - Built into operations, not bolted on"
                    className="capability-card__img"
                    loading="lazy"
                  />
                  <div className="capability-card__image-fade"></div>
                </div>
                <div className="capability-card__badge" title="Data & AI">
                  <BarChart3 size={22} strokeWidth={2.2} />
                </div>
                <div className="capability-card__body">
                  <h3 className="capability-card__title">Data &amp; AI</h3>
                  <p className="capability-card__desc">
                    Data platforms, analytics and AI built into operations, not bolted on.
                  </p>
                </div>
              </div>

              {/* Card 3: Enterprise Platforms */}
              <div className="capability-card capability-card--enterprise-platforms">
                <div className="capability-card__image-wrap">
                  <img
                    src="/images/capabilities/card-visual-3@2x.png"
                    alt="Enterprise Platforms - ERP, e-Governance, LMS & Campus Management"
                    className="capability-card__img"
                    loading="lazy"
                  />
                  <div className="capability-card__image-fade"></div>
                </div>
                <div className="capability-card__badge" title="Enterprise Platforms">
                  <Layers size={22} strokeWidth={2.2} />
                </div>
                <div className="capability-card__body">
                  <h3 className="capability-card__title">Enterprise Platforms</h3>
                  <p className="capability-card__desc">
                    ERP, e-Governance and campus management at institutional scale.
                  </p>
                </div>
              </div>

              {/* Card 4: Run & Support */}
              <div className="capability-card capability-card--run-support">
                <div className="capability-card__image-wrap">
                  <img
                    src="/images/capabilities/card-visual-4@2x.png"
                    alt="Run & Support - 24/7 Operations and Observability"
                    className="capability-card__img"
                    loading="lazy"
                  />
                  <div className="capability-card__image-fade"></div>
                </div>
                <div className="capability-card__badge" title="Run & Support">
                  <Headphones size={22} strokeWidth={2.2} />
                </div>
                <div className="capability-card__body">
                  <h3 className="capability-card__title">Run &amp; Support</h3>
                  <p className="capability-card__desc">
                    We stay on after go-live, ensuring stability, security and continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE TRANSFORM */}
      <section className="industries-section" id="where-we-work">
        {/* Luminous flowing background waves */}
        <div className="industries-bg-ribbons" aria-hidden="true">
          <svg viewBox="0 0 1440 450" fill="none" preserveAspectRatio="none" className="industries-bg-svg">
            <path d="M650 0 C900 80, 1180 60, 1440 200 L1440 0 Z" fill="url(#ind-ribbon-1)" />
            <path d="M520 0 C820 130, 1140 80, 1440 280" stroke="url(#ind-ribbon-2)" strokeWidth="1.5" fill="none" />
            <path d="M720 0 C960 160, 1260 110, 1440 200" stroke="url(#ind-ribbon-2)" strokeWidth="1.5" fill="none" />
            <defs>
              <linearGradient id="ind-ribbon-1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#bae6fd" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="ind-ribbon-2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container industries-container">
          <div className="industries-header">
            <div className="industries-header__left">
              <span className="industries-header__eyebrow">INDUSTRIES</span>
              <h2 className="industries-header__title">Industries We Transform</h2>
              <p className="industries-header__sub">Domain expertise. Real-world impact.</p>
            </div>
            <div className="industries-header__right">
              <div className="industries-header__tag-wrap">
                <span className="industries-header__tag-line" aria-hidden="true"></span>
                <span className="industries-header__tag-text">
                  TECHNOLOGY FOR A SMARTER,<br />MORE INCLUSIVE FUTURE.
                </span>
              </div>
            </div>
          </div>

          <div className="industries-grid">
            {/* 1. Government & e-Governance */}
            <div className="industry-card industry-card--government">
              <div className="industry-card__image-wrap">
                <img
                  src="/images/industries/government@2x.png"
                  alt="Government & e-Governance"
                  className="industry-card__img"
                  loading="lazy"
                />
                <div className="industry-card__image-fade"></div>
              </div>
              <div className="industry-card__badge" title="Government & e-Governance">
                <Landmark size={22} strokeWidth={2.2} />
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">Government &amp; e-Governance</h3>
                <p className="industry-card__desc">State departments and public institutions.</p>
              </div>
            </div>

            {/* 2. Education */}
            <div className="industry-card industry-card--education">
              <div className="industry-card__image-wrap">
                <img
                  src="/images/industries/education@2x.png"
                  alt="Education"
                  className="industry-card__img"
                  loading="lazy"
                />
                <div className="industry-card__image-fade"></div>
              </div>
              <div className="industry-card__badge" title="Education">
                <GraduationCap size={22} strokeWidth={2.2} />
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">Education</h3>
                <p className="industry-card__desc">
                  ERP and campus management for schools, colleges and institutions.
                </p>
              </div>
            </div>

            {/* 3. Mining */}
            <div className="industry-card industry-card--mining">
              <div className="industry-card__image-wrap">
                <img
                  src="/images/industries/mining@2x.png"
                  alt="Mining"
                  className="industry-card__img"
                  loading="lazy"
                />
                <div className="industry-card__image-fade"></div>
              </div>
              <div className="industry-card__badge" title="Mining">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="16" width="14" height="4" rx="2" />
                  <line x1="10" y1="18" x2="18" y2="18" />
                  <path d="M10 16V10a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
                  <path d="M15 12h4a1 1 0 0 1 1 1v3" />
                  <line x1="13" y1="10" x2="13" y2="13" />
                  <line x1="10" y1="13" x2="15" y2="13" />
                  <path d="M10 10L6 5L3 9" />
                  <path d="M3 9c-.5 1.5.5 2.5 2 2.5l1-1.5" />
                </svg>
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">Mining</h3>
                <p className="industry-card__desc">
                  Tier-1 public-sector mining enterprises and mineral complexes.
                </p>
              </div>
            </div>

            {/* 4. Energy */}
            <div className="industry-card industry-card--energy">
              <div className="industry-card__image-wrap">
                <img
                  src="/images/industries/energy@2x.png"
                  alt="Energy"
                  className="industry-card__img"
                  loading="lazy"
                />
                <div className="industry-card__image-fade"></div>
              </div>
              <div className="industry-card__badge" title="Energy">
                <Zap size={22} strokeWidth={2.4} fill="currentColor" fillOpacity="0.15" />
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">Energy</h3>
                <p className="industry-card__desc">
                  Technology platforms and infrastructure for energy operations.
                </p>
              </div>
            </div>

            {/* 5. Healthcare */}
            <div className="industry-card industry-card--healthcare">
              <div className="industry-card__image-wrap">
                <img
                  src="/images/industries/healthcare@2x.png"
                  alt="Healthcare"
                  className="industry-card__img"
                  loading="lazy"
                />
                <div className="industry-card__image-fade"></div>
              </div>
              <div className="industry-card__badge" title="Healthcare">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 3a2 2 0 0 0-2 2v4H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4V5a2 2 0 0 0-2-2H9z" />
                </svg>
              </div>
              <div className="industry-card__content">
                <h3 className="industry-card__title">Healthcare</h3>
                <p className="industry-card__desc">
                  Data and AI for US payers and provider organisations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="selected-work-section section--stone" id="selected-work">
        <div className="container">
          <div className="selected-work-header">
            <div className="selected-work-header__left">
              <div className="selected-work-header__eyebrow">
                <span className="selected-work-header__dot" />
                <span>SELECTED WORK</span>
              </div>
              <h2 className="selected-work-header__title">Real partners. Real progress.</h2>
              <p className="selected-work-header__sub">
                Solving complex challenges with technology, at scale.
              </p>
            </div>
            <div className="selected-work-header__right">
              <div className="selected-work-header__tagline">
                <span>INDUSTRY EXPERTISE.</span>
                <span>TANGIBLE OUTCOMES.</span>
              </div>
            </div>
          </div>

          <div className="case-studies-list">
            {/* Case Study 01: National Mineral Enterprise */}
            <article className="case-study-row">
              <div className="case-study__content">
                <div className="case-study__header">
                  <span className="case-study__num">01</span>
                  <span className="case-study__divider" />
                  <strong className="case-study__client-name">National Mineral Enterprise</strong>
                  <div className="work-logo-badge" title="National Mineral Enterprise">
                    <svg viewBox="0 0 165 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                      <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                      <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                      <text x="38" y="24" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="13" fontWeight="800" fill="currentColor" letterSpacing="0.05em">MINING PSU</text>
                    </svg>
                  </div>
                  <span className="case-study__sector">Mining &amp; Public Sector</span>
                </div>

                <div className="case-study__narrative">
                  <p>
                    <b className="case-study__label">Problem</b> — Production dispatch, weighbridge capture, and statutory filings operated through disconnected spreadsheets and manual logs.
                  </p>
                  <p>
                    <b className="case-study__label case-study__label--accent">What changed</b> — Centralized telemetry, automated weighbridge data acquisition, and real-time statutory reporting across production units.
                  </p>
                </div>

                <div className="case-study__cta-wrap">
                  <a href="#contact" onClick={scrollToContact} className="case-study__cta-btn">
                    View case study <ArrowRight size={14} className="case-study__cta-arrow" />
                  </a>
                </div>

                <div className="case-study__metrics">
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">100%</span>
                    <span className="case-study__metric-lbl">Digital logs</span>
                  </div>
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">Real-time</span>
                    <span className="case-study__metric-lbl">Compliance</span>
                  </div>
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">Higher</span>
                    <span className="case-study__metric-lbl">Throughput</span>
                  </div>
                </div>
              </div>

              <div className="case-study__visual">
                <div className="case-study__visual-inner">
                  <img
                    src="/images/work/mining-case-study.png"
                    srcSet="/images/work/mining-case-study@2x.png 2x"
                    alt="Production Telemetry and Statutory Reporting Case Study"
                    className="case-study__visual-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>

            {/* Case Study 02: Greenko (Reversed layout) */}
            <article className="case-study-row case-study-row--reversed">
              <div className="case-study__content">
                <div className="case-study__header">
                  <span className="case-study__num">02</span>
                  <span className="case-study__divider" />
                  <strong className="case-study__client-name">Greenko</strong>
                  <div className="work-logo-badge" title="Greenko">
                    <svg viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="work-svg-logo">
                      <circle cx="16" cy="19" r="12" fill="#059669" fillOpacity="0.15" />
                      <path d="M12 24C12 18 16 13 22 13C22 19 18 24 12 24Z" fill="#059669" />
                      <path d="M14 20C17 18 19 16 20 14" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
                      <text x="36" y="24" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.02em">greenko</text>
                    </svg>
                  </div>
                  <span className="case-study__sector">Energy &amp; Utilities</span>
                </div>

                <div className="case-study__narrative">
                  <p>
                    <b className="case-study__label">Problem</b> — Operational data from distributed renewable generation assets was fragmented across disparate plant-level systems.
                  </p>
                  <p>
                    <b className="case-study__label case-study__label--accent">What changed</b> — Unified generation telemetry and asset performance data into a single real-time operational platform.
                  </p>
                </div>

                <div className="case-study__cta-wrap">
                  <a href="#contact" onClick={scrollToContact} className="case-study__cta-btn">
                    View case study <ArrowRight size={14} className="case-study__cta-arrow" />
                  </a>
                </div>

                <div className="case-study__metrics">
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">1,000+ MW</span>
                    <span className="case-study__metric-lbl">Monitored</span>
                  </div>
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">Real-time</span>
                    <span className="case-study__metric-lbl">Telemetry</span>
                  </div>
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">Higher</span>
                    <span className="case-study__metric-lbl">Availability</span>
                  </div>
                </div>
              </div>

              <div className="case-study__visual">
                <div className="case-study__visual-inner">
                  <img
                    src="/images/work/greenko-case-study.png"
                    srcSet="/images/work/greenko-case-study@2x.png 2x"
                    alt="Greenko Renewable Generation Asset Intelligence Case Study"
                    className="case-study__visual-img"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>

            {/* Case Study 03: US Healthcare */}
            <article className="case-study-row">
              <div className="case-study__content">
                <div className="case-study__header">
                  <span className="case-study__num">03</span>
                  <span className="case-study__divider" />
                  <strong className="case-study__client-name">US Healthcare</strong>
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
                  <span className="case-study__sector">Healthcare &amp; Clinical AI</span>
                </div>

                <div className="case-study__narrative">
                  <p>
                    <b className="case-study__label">Problem</b> — Clinical, EHR, and claims data resided in disconnected systems, delaying risk stratification and care team workflows.
                  </p>
                  <p>
                    <b className="case-study__label case-study__label--accent">What changed</b> — Built FHIR-compliant ingestion pipelines and automated cohort analytics integrated directly into care management operations.
                  </p>
                </div>

                <div className="case-study__cta-wrap">
                  <a href="#contact" onClick={scrollToContact} className="case-study__cta-btn">
                    View case study <ArrowRight size={14} className="case-study__cta-arrow" />
                  </a>
                </div>

                <div className="case-study__metrics">
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">3+</span>
                    <span className="case-study__metric-lbl">Enterprise partners</span>
                  </div>
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">Faster</span>
                    <span className="case-study__metric-lbl">Stratification</span>
                  </div>
                  <div className="case-study__metric">
                    <span className="case-study__metric-val">Improved</span>
                    <span className="case-study__metric-lbl">Intervention</span>
                  </div>
                </div>
              </div>

              <div className="case-study__visual">
                <div className="case-study__visual-inner">
                  <img
                    src="/images/work/healthcare-case-study.png"
                    srcSet="/images/work/healthcare-case-study@2x.png 2x"
                    alt="US Healthcare Clinical AI & Data Pipelines Case Study"
                    className="case-study__visual-img"
                    loading="lazy"
                  />
                </div>
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
