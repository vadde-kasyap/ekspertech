import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Brain, Layers, ShieldCheck, LifeBuoy, Pickaxe, CheckCircle2 } from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './ServicesPage.css';

const SERVICES = [
  {
    id: 'digital-transformation',
    icon: <Layers size={22} strokeWidth={2.2} />,
    color: '#EA580C',
    bg: '#FFF7ED',
    border: '#FFEDD5',
    image: '/images/services/card-digital-transformation.png',
    title: 'Digital Transformation',
    desc: 'Modernising legacy systems into platforms that work. Decoupling monolithic legacy code, deduplicating databases, and standing up robust modern APIs.',
    features: [
      'Legacy modernization without operational downtime',
      'Clean API architecture (REST, GraphQL, gRPC)',
      'Database cleansing and schema consolidation',
      'Statutory compliance & audit logging',
    ],
    link: '/contact',
    linkLabel: 'Discuss your transformation',
  },
  {
    id: 'data-ai',
    icon: <Brain size={22} strokeWidth={2.2} />,
    color: '#6366F1',
    bg: '#EEF2FF',
    border: '#E0E7FF',
    image: '/images/services/card-data-ai.png',
    title: 'Data & AI',
    desc: 'Data platforms, analytics and AI built into operations, not bolted on. From automated clinical data pipelines to operational anomaly detection.',
    features: [
      'FHIR & healthcare data integration',
      'Operational telemetry and automated alerting',
      'Embedded analytical dashboards',
      'Domain-specific machine learning models',
    ],
    link: '/ai-healthcare',
    linkLabel: 'Explore Data & AI solutions',
  },
  {
    id: 'enterprise-platforms',
    icon: <ShieldCheck size={22} strokeWidth={2.2} />,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#CCFBF1',
    image: '/images/services/card-enterprise-platforms.png',
    title: 'Enterprise Platforms',
    desc: 'Modern enterprise platforms, state e-Governance, and mission-critical administrative systems engineered for strict statutory mandates and large-scale public institutions.',
    features: [
      'High-throughput administrative workflows and stakeholder portals',
      'Role-based access control with cryptographic verification and audit logging',
      'CAG-compliant double-entry financial ledgers and statutory tracking',
      'Large-scale multi-department operational orchestration',
    ],
    link: '/enterprise-platforms',
    linkLabel: 'Explore Enterprise Platforms',
  },
  {
    id: 'run-support',
    icon: <LifeBuoy size={22} strokeWidth={2.2} />,
    color: '#0284C7',
    bg: '#F0F9FF',
    border: '#E0F2FE',
    image: '/images/services/card-run-support.png',
    title: 'Run & Support',
    desc: 'We stay on after go-live. Dedicated long-term engineering teams ensuring uptime, statutory upgrades, and continuous performance.',
    features: [
      '24/7 mission-critical uptime monitoring',
      'Dedicated post-go-live engineering teams',
      'Continuous security patching and audit readiness',
      'Preventative maintenance and SLAs',
    ],
    link: '/contact',
    linkLabel: 'Discuss operations & SLAs',
  },
  {
    id: 'cloud',
    icon: <Server size={22} strokeWidth={2.2} />,
    color: '#2563EB',
    bg: '#EFF6FF',
    border: '#DBEAFE',
    image: '/images/services/card-cloud.png',
    title: 'Cloud Infrastructure',
    desc: 'High-concurrency autoscaling infrastructure engineered for extreme traffic surges and high availability across AWS, Azure, and private cloud.',
    features: [
      'Multi-region resilient deployments',
      'Auto-scaling for massive concurrency spikes',
      'Disaster recovery and automated failover',
      'Private datacenter & hybrid architectures',
    ],
    link: '/cloud-services',
    linkLabel: 'Explore Cloud Infrastructure',
  },
  {
    id: 'mining-telemetry',
    icon: <Pickaxe size={22} strokeWidth={2.2} />,
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FEF3C7',
    image: '/images/services/card-mining.png',
    title: 'Industrial & Mining Telemetry',
    desc: 'Hardware-integrated weighbridge capture, digital dispatch tracking, and real-time statutory logistics across production sites.',
    features: [
      'Tamper-proof weighbridge hardware integration',
      'Real-time production & dispatch telemetry',
      'Electronic transport passes with QR verification',
      'Direct statutory compliance reporting',
    ],
    link: '/mining',
    linkLabel: 'Explore Mining Telemetry',
  },
];

export default function ServicesPage() {
  useDocumentTitle('Capabilities & Core Services | Eksper Technologies');

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="services-redesign">
      {/* 1. HERO SECTION */}
      <section className="services-hero">
        <div className="container services-hero__container">
          <div className="services-hero__left">
            <div className="services-hero__eyebrow">
              <span className="services-hero__eyebrow-dash" />
              <span>Capabilities</span>
            </div>
            <h1 className="services-hero__title">Capabilities We Bring</h1>
            <p className="services-hero__sub">
              Four core capabilities plus specialized infrastructure and industrial services backing every deployment.
            </p>
            <div className="services-hero__cta-row">
              <Link to="/contact" className="services-hero__btn">
                Talk to us <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          <div className="services-hero__right">
            <div className="services-hero__visual-wrap">
              <img
                src="/images/services/capabilities-hero-hd.png"
                alt="Capabilities We Bring - Scalable Solutions"
                className="services-hero__visual-img"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CAPABILITY CARDS GRID */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-cards-grid">
            {SERVICES.map((s) => (
              <article key={s.id} id={s.id} className="services-card">
                <div className="services-card__img-wrap">
                  <img
                    src={s.image}
                    alt={`${s.title} capability visual`}
                    className="services-card__img"
                    loading="lazy"
                  />
                  <div
                    className="services-card__badge"
                    style={{ color: s.color, backgroundColor: s.bg, borderColor: s.border }}
                  >
                    {s.icon}
                  </div>
                </div>
                <div className="services-card__body">
                  <h3 className="services-card__title">{s.title}</h3>
                  <p className="services-card__desc">{s.desc}</p>
                  <ul className="services-card__features">
                    {s.features.map((f, j) => (
                      <li key={j}>
                        <CheckCircle2 size={15} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={s.link} className="services-card__link" style={{ color: s.color }}>
                    <span>{s.linkLabel}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DISCUSS YOUR ARCHITECTURE CTA BANNER */}
      <section className="services-cta-section">
        <div className="container">
          <div className="services-cta-banner">
            <div className="services-cta-banner__left">
              <h2 className="services-cta-banner__title">Discuss your architecture</h2>
              <p className="services-cta-banner__sub">
                Speak directly with our engineering team about your systems, data, and infrastructure.
              </p>
              <Link to="/contact" className="services-cta-banner__btn">
                Talk to us <ArrowRight size={14} />
              </Link>
            </div>
            <div className="services-cta-banner__right">
              <div className="services-cta-banner__tagline">
                <span className="services-cta-banner__tagline-dash" />
                <div className="services-cta-banner__tagline-text">
                  <span>COMPLEX</span>
                  <span>CHALLENGES.</span>
                  <span>MEASURABLE</span>
                  <span>OUTCOMES.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
