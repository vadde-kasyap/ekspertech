import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  ShieldCheck, 
  Database, 
  FileCheck, 
  Users, 
  Lock, 
  Landmark, 
  FileText, 
  Check 
} from 'lucide-react';
import './EnterprisePlatformsPage.css';

const DEPLOYMENT_TYPES = [
  {
    num: '01',
    image: '/images/enterprise/enterprise-card-01-students.png',
    alt: 'Students on campus with holographic governance badges',
    icon: <GraduationCap size={24} strokeWidth={2.2} />,
    color: '#1D4ED8',
    bg: '#EFF6FF',
    border: '#BFDBFE',
    title: 'Institutional Governance & Examination Security Platforms',
    desc: 'End-to-end digital platforms for large public institutions handling tens of thousands of candidates, multi-faculty departments, and confidential evaluations.',
    capabilities: [
      'Statewide online admissions and automated multi-channel merit list generation',
      'Choice Based Credit System (CBCS) supporting core, elective, and interdisciplinary tracks',
      'Confidential examination management with barcode-based dummy number masking',
      'Double-blind evaluation workflows and automated tabulator score reconciliation',
      'Student lifecycle management, fee collection gateways, and digital credentialing (NAD / DigiLocker)',
      'Ph.D. scholar lifecycle tracking, research guide allocation, and thesis defense milestones',
    ],
    deployments: [
      'University of Mysore (70+ PG departments, 100+ affiliated centres)',
      'Kadi Sarva Vishwavidyalaya (KSV) & constituent institutions',
      'GNITS Hyderabad & autonomous institutions',
    ],
  },
  {
    num: '02',
    image: '/images/enterprise/enterprise-card-02-governance.png',
    alt: 'State secretariat with national flag and digital administration overlays',
    icon: <Building2 size={24} strokeWidth={2.2} />,
    color: '#0D9488',
    bg: '#F0FDFA',
    border: '#99F6E4',
    title: 'State e-Governance & Public Administration Systems',
    desc: 'Directorate-level high-throughput admissions and statutory administrative engines.',
    capabilities: [
      'High-throughput web counseling engine handling simultaneous statewide seat allocations',
      'Statutory reservation quota validation (caste, merit, regional, and special categories)',
      'Central Records Branch (CRB) barcode file management guaranteeing rapid physical retrieval',
      'Real-time verification center dashboards and candidate document authentication',
      'Audit-ready audit trails compliant with CAG and State Vigilance guidelines',
    ],
    deployments: [
      'State Technical Education & Polytechnic Directorate (DET)',
      'State Secretariat Central Records Branch (GAD)',
    ],
  },
  {
    num: '03',
    image: '/images/enterprise/enterprise-card-03-datacenter.png',
    alt: 'Systems architect reviewing institutional financial and governance dashboards',
    icon: <ShieldCheck size={24} strokeWidth={2.2} />,
    color: '#D97706',
    bg: '#FFFBEB',
    border: '#FDE68A',
    title: 'Enterprise Operational & Financial Backbones',
    desc: 'Single-database architectures unifying accounting, payroll, and asset management.',
    capabilities: [
      'CAG-compliant double-entry fund accounting and multi-budget head tracking',
      'Pay commission salary automation with biometric attendance hardware integration',
      'Multi-department procurement, vendor management, and store inventory ledgering',
      'Role-based granular access control (RBAC) with complete cryptographic logging',
    ],
    deployments: [
      'State institutional administrative finance wings',
      'Multi-branch organizational networks',
    ],
  },
];

export default function EnterprisePlatformsPage() {
  return (
    <div className="enterprise-page">
      {/* 1. HERO SECTION */}
      <section className="enterprise-hero">
        <div className="container enterprise-hero__container">
          {/* Left Hero Content */}
          <div className="enterprise-hero__left">
            <div className="enterprise-hero__eyebrow">
              <span className="enterprise-hero__eyebrow-dash"></span>
              Enterprise Platforms
            </div>
            
            <h1 className="enterprise-hero__title">
              High-concurrency institutional and governance platforms.
            </h1>
            
            <p className="enterprise-hero__desc">
              25+ years engineering unified administrative, examination, and state-level workflow platforms for public directorates and large institutions.
            </p>
            
            <div className="enterprise-hero__cta-row">
              <Link to="/contact" className="enterprise-hero__btn">
                Talk to us <ArrowRight size={15} />
              </Link>
              
              <div className="enterprise-hero__tagline-wrap">
                <div className="enterprise-hero__tagline-bar"></div>
                <div className="enterprise-hero__tagline-text">
                  <span>PEOPLE.</span>
                  <span>SYSTEMS.</span>
                  <span>STRONGER INSTITUTIONS.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="enterprise-hero__right">
            <div className="enterprise-hero__editorial-tag">
              <p className="enterprise-hero__editorial-text">
                DIGITAL<br />
                GOVERNANCE<br />
                FOR A STRONGER<br />
                TOMORROW.
              </p>
              <div className="enterprise-hero__editorial-line"></div>
            </div>

            <div className="enterprise-hero__visual-wrap">
              <img 
                src="/images/enterprise/enterprise-hero-capitol.png" 
                alt="Institutional governance neoclassical architectural dome"
                className="enterprise-hero__image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSTITUTION CATEGORIES STRIP */}
      <section className="enterprise-trust-strip">
        <div className="container">
          <div className="enterprise-trust-strip__items">
            <div className="enterprise-trust-strip__item">
              <span className="enterprise-trust-strip__item-icon">
                <Landmark size={18} strokeWidth={2} />
              </span>
              <span>State Governments</span>
            </div>

            <div className="enterprise-trust-strip__item">
              <span className="enterprise-trust-strip__item-icon">
                <GraduationCap size={18} strokeWidth={2} />
              </span>
              <span>Universities</span>
            </div>

            <div className="enterprise-trust-strip__item">
              <span className="enterprise-trust-strip__item-icon">
                <FileText size={18} strokeWidth={2} />
              </span>
              <span>Examination Bodies</span>
            </div>

            <div className="enterprise-trust-strip__item">
              <span className="enterprise-trust-strip__item-icon">
                <Users size={18} strokeWidth={2} />
              </span>
              <span>Public Institutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEPLOYMENT ARCHITECTURES */}
      <section className="enterprise-deployments">
        <div className="container">
          <div className="enterprise-deployments__header">
            <div className="enterprise-deployments__eyebrow">
              <span className="enterprise-deployments__eyebrow-dash"></span>
              Deployment Architectures
            </div>
            <h2 className="enterprise-deployments__title">
              Engineered for complex institutional scale.
            </h2>
            <p className="enterprise-deployments__desc">
              Three specialized platform architectures battle-tested across state directorates and large public institutions.
            </p>
          </div>

          <div className="enterprise-deployments__cards-list">
            {DEPLOYMENT_TYPES.map((type, idx) => (
              <div key={idx} className="enterprise-card">
                {/* Left Visual Column */}
                <div className="enterprise-card__visual-side">
                  <span className="enterprise-card__num-badge">{type.num}</span>
                  <img 
                    src={type.image} 
                    alt={type.alt} 
                    className="enterprise-card__image"
                  />
                </div>

                {/* Right Content Column */}
                <div className="enterprise-card__content-side">
                  <div>
                    <div className="enterprise-card__header-row">
                      <div 
                        className="enterprise-card__icon-box"
                        style={{ background: type.bg, color: type.color, border: `1px solid ${type.border}` }}
                      >
                        {type.icon}
                      </div>
                      <div className="enterprise-card__header-titles">
                        <h3 className="enterprise-card__title">{type.title}</h3>
                        <p className="enterprise-card__desc">{type.desc}</p>
                      </div>
                    </div>

                    <div className="enterprise-card__sub-grid">
                      {/* Left: Key Capabilities */}
                      <div className="enterprise-card__sub-panel">
                        <div className="enterprise-card__sub-title" style={{ color: '#0F172A' }}>
                          Key Capabilities
                        </div>
                        <ul className="enterprise-card__cap-list">
                          {type.capabilities.map((cap, i) => (
                            <li key={i} className="enterprise-card__cap-item">
                              <span className="enterprise-card__cap-bullet">•</span>
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Proven Deployments & Scale */}
                      <div className="enterprise-card__sub-panel">
                        <div className="enterprise-card__sub-title" style={{ color: '#0284C7' }}>
                          Proven Deployments & Scale
                        </div>
                        <ul className="enterprise-card__deploy-list">
                          {type.deployments.map((dep, i) => (
                            <li key={i} className="enterprise-card__deploy-item">
                              <span className="enterprise-card__deploy-check">
                                <Check size={14} strokeWidth={2.8} />
                              </span>
                              <span>{dep}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE SECTION */}
      <section className="enterprise-architecture">
        <div className="container">
          <div className="enterprise-architecture__header">
            <div className="enterprise-architecture__eyebrow">
              <span className="enterprise-architecture__eyebrow-dash"></span>
              Architecture
            </div>
            <h2 className="enterprise-architecture__title">
              Built for institutional resilience.
            </h2>
            <p className="enterprise-architecture__subtitle">
              Scalable. Secure. Compliant. Always on.
            </p>
          </div>

          <div className="enterprise-architecture__layout">
            {/* Left Column (2 Cards) */}
            <div className="enterprise-architecture__side-col">
              <div className="enterprise-arch-card">
                <div 
                  className="enterprise-arch-card__icon-box"
                  style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}
                >
                  <Database size={22} strokeWidth={2.2} />
                </div>
                <div className="enterprise-arch-card__content">
                  <h4 className="enterprise-arch-card__title">Single-Database Architecture</h4>
                  <p className="enterprise-arch-card__desc">
                    Eliminates data silos across admissions, academic records, finance, and exams. A unified institutional ledger ensures absolute consistency.
                  </p>
                </div>
              </div>

              <div className="enterprise-arch-card">
                <div 
                  className="enterprise-arch-card__icon-box"
                  style={{ background: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0' }}
                >
                  <FileCheck size={22} strokeWidth={2.2} />
                </div>
                <div className="enterprise-arch-card__content">
                  <h4 className="enterprise-arch-card__title">Statutory & Audit Compliance</h4>
                  <p className="enterprise-arch-card__desc">
                    Built ground-up around state regulations, public governance councils, and CAG double-entry standards. Ready for statutory review.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Graphic */}
            <div className="enterprise-architecture__center">
              <img 
                src="/images/enterprise/enterprise-arch-center.png" 
                alt="Institutional architecture platform layers" 
                className="enterprise-architecture__center-visual"
              />
            </div>

            {/* Right Column (2 Cards) */}
            <div className="enterprise-architecture__side-col">
              <div className="enterprise-arch-card">
                <div 
                  className="enterprise-arch-card__icon-box"
                  style={{ background: '#F5F3FF', color: '#7C3AED', border: '1px solid #DDD6FE' }}
                >
                  <Users size={22} strokeWidth={2.2} />
                </div>
                <div className="enterprise-arch-card__content">
                  <h4 className="enterprise-arch-card__title">High-Concurrency Scaling</h4>
                  <p className="enterprise-arch-card__desc">
                    Tested to sustain extreme traffic surges during state admission counselling rounds and statewide result publications without downtime.
                  </p>
                </div>
              </div>

              <div className="enterprise-arch-card">
                <div 
                  className="enterprise-arch-card__icon-box"
                  style={{ background: '#FFF1F2', color: '#E11D48', border: '1px solid #FECDD3' }}
                >
                  <Lock size={22} strokeWidth={2.2} />
                </div>
                <div className="enterprise-arch-card__content">
                  <h4 className="enterprise-arch-card__title">Confidential Exam Security</h4>
                  <p className="enterprise-arch-card__desc">
                    Barcode dummy indexing and masked evaluation workflows guarantee complete integrity from evaluation centers to degree conferral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="enterprise-cta">
        <div className="container enterprise-cta__container">
          {/* Left CTA Info */}
          <div className="enterprise-cta__left">
            <h2 className="enterprise-cta__title">
              Modernize your institutional infrastructure.
            </h2>
            <p className="enterprise-cta__desc">
              Speak with our systems architects about deploying scalable governance, examination security, or administrative solutions.
            </p>
            <div className="enterprise-cta__btn-row">
              <Link to="/contact" className="enterprise-cta__btn-primary">
                Talk to us <ArrowRight size={15} />
              </Link>
              <Link to="/case-studies" className="enterprise-cta__btn-outline">
                Explore Track Record
              </Link>
            </div>
          </div>

          {/* Right CTA Visual */}
          <div className="enterprise-cta__right">
            <div className="enterprise-cta__editorial-tag">
              <p className="enterprise-cta__editorial-text">
                TRUSTED<br />
                PLATFORMS<br />
                FOR LASTING<br />
                IMPACT.
              </p>
              <div className="enterprise-cta__editorial-line"></div>
            </div>
            <div className="enterprise-cta__visual-wrap">
              <img 
                src="/images/enterprise/enterprise-cta-columns.png" 
                alt="Neoclassical institution pillars overlooking sunset skyline" 
                className="enterprise-cta__image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
