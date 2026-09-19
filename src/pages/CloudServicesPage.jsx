import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Server, 
  ShieldCheck, 
  Zap, 
  RefreshCcw, 
  Cloud, 
  Cpu, 
  Lock, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './CloudServicesPage.css';

export default function CloudServicesPage() {
  useDocumentTitle('Cloud & High-Concurrency Infrastructure | Eksper Technologies');

  return (
    <div className="cloud-page">
      {/* 1. HERO SECTION */}
      <section className="cloud-hero">
        <div className="container cloud-hero__container">
          {/* Left Hero Content */}
          <div className="cloud-hero__left">
            <div className="cloud-hero__eyebrow">
              <span className="cloud-hero__eyebrow-dash"></span>
              Cloud Infrastructure
            </div>
            
            <h1 className="cloud-hero__title">
              Built for high concurrency and zero downtime.
            </h1>
            
            <p className="cloud-hero__desc">
              High-concurrency autoscaling infrastructure engineered for extreme traffic surges, real-time telemetry, and 24/7 mission-critical availability.
            </p>
            
            <div>
              <Link to="/contact" className="cloud-hero__btn">
                Talk to us <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="cloud-hero__right">
            <div className="cloud-hero__visual-wrap">
              <img 
                src="/images/cloud/cloud-hero-panorama.png" 
                alt="Cloud infrastructure network and server datacenter with live telemetry"
                className="cloud-hero__image"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLOUD STACK STRIP */}
      <section className="cloud-stack-strip">
        <div className="container">
          <div className="cloud-stack-strip__items">
            <div className="cloud-stack-strip__item">
              <span className="cloud-stack-strip__item-icon" style={{ color: '#FF9900' }}>
                <Cloud size={16} strokeWidth={2.2} />
              </span>
              <span>Amazon Web Services</span>
            </div>

            <div className="cloud-stack-strip__item">
              <span className="cloud-stack-strip__item-icon" style={{ color: '#0078D4' }}>
                <Server size={16} strokeWidth={2.2} />
              </span>
              <span>Microsoft Azure</span>
            </div>

            <div className="cloud-stack-strip__item">
              <span className="cloud-stack-strip__item-icon" style={{ color: '#326CE5' }}>
                <Cpu size={16} strokeWidth={2.2} />
              </span>
              <span>Kubernetes & Containers</span>
            </div>

            <div className="cloud-stack-strip__item">
              <span className="cloud-stack-strip__item-icon" style={{ color: '#E11D48' }}>
                <Lock size={16} strokeWidth={2.2} />
              </span>
              <span>Air-Gapped Private Cloud</span>
            </div>

            <div className="cloud-stack-strip__item">
              <span className="cloud-stack-strip__item-icon" style={{ color: '#16A34A' }}>
                <CheckCircle2 size={16} strokeWidth={2.2} />
              </span>
              <span>99.99% Uptime SLAs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES SECTION */}
      <section className="cloud-capabilities">
        <div className="container">
          <div className="cloud-capabilities__header">
            <div className="cloud-capabilities__eyebrow">
              <span className="cloud-capabilities__eyebrow-dash"></span>
              Our Capabilities
            </div>
            <h2 className="cloud-capabilities__title">
              Cloud infrastructure for real-world scale.
            </h2>
            <p className="cloud-capabilities__desc">
              Secure. Scalable. Resilient. Built for what's next.
            </p>
          </div>

          <div className="cloud-capabilities__grid">
            {/* Card 1: AWS & Azure Multi-Region */}
            <div className="cloud-cap-split-card">
              <div className="cloud-cap-split-card__visual">
                <img 
                  src="/images/cloud/cloud-card-01-multiregion.png" 
                  alt="AWS and Azure Multi-Region global connectivity map" 
                  className="cloud-cap-split-card__image"
                />
              </div>
              <div className="cloud-cap-split-card__content">
                <div>
                  <div 
                    className="cloud-cap-split-card__icon-box"
                    style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}
                  >
                    <Server size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="cloud-cap-split-card__title">AWS &amp; Azure Multi-Region</h3>
                  <p className="cloud-cap-split-card__desc">
                    Resilient cloud topologies with auto-scaling groups, global load balancing, and edge caching for sub-second latency.
                  </p>
                </div>
                <Link to="/contact" className="cloud-cap-split-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 2: Extreme Concurrency */}
            <div className="cloud-cap-split-card">
              <div className="cloud-cap-split-card__visual">
                <img 
                  src="/images/cloud/cloud-card-02-concurrency.png" 
                  alt="Extreme concurrency handling 50,000+ concurrent requests" 
                  className="cloud-cap-split-card__image"
                />
              </div>
              <div className="cloud-cap-split-card__content">
                <div>
                  <div 
                    className="cloud-cap-split-card__icon-box"
                    style={{ background: '#FFF7ED', color: '#EA580C', border: '1px solid #FED7AA' }}
                  >
                    <Zap size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="cloud-cap-split-card__title">Extreme Concurrency</h3>
                  <p className="cloud-cap-split-card__desc">
                    Proven handling of 50,000+ simultaneous concurrent requests during mission-critical reporting and transaction windows.
                  </p>
                </div>
                <Link to="/contact" className="cloud-cap-split-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 3: Private & Hybrid Cloud */}
            <div className="cloud-cap-split-card">
              <div className="cloud-cap-split-card__visual">
                <img 
                  src="/images/cloud/cloud-card-03-privatehybrid.png" 
                  alt="Private and hybrid cloud secure infrastructure" 
                  className="cloud-cap-split-card__image"
                />
              </div>
              <div className="cloud-cap-split-card__content">
                <div>
                  <div 
                    className="cloud-cap-split-card__icon-box"
                    style={{ background: '#F0FDFA', color: '#0D9488', border: '1px solid #99F6E4' }}
                  >
                    <ShieldCheck size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="cloud-cap-split-card__title">Private &amp; Hybrid Cloud</h3>
                  <p className="cloud-cap-split-card__desc">
                    Dedicated private datacenter setups and air-gapped options for institutions and government bodies requiring strict data residency.
                  </p>
                </div>
                <Link to="/contact" className="cloud-cap-split-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Card 4: Disaster Recovery & Failover */}
            <div className="cloud-cap-split-card">
              <div className="cloud-cap-split-card__visual">
                <img 
                  src="/images/cloud/cloud-card-04-failover.png" 
                  alt="Disaster recovery and automated failover between primary and secondary regions" 
                  className="cloud-cap-split-card__image"
                />
              </div>
              <div className="cloud-cap-split-card__content">
                <div>
                  <div 
                    className="cloud-cap-split-card__icon-box"
                    style={{ background: '#FAF5FF', color: '#7C3AED', border: '1px solid #E9D5FF' }}
                  >
                    <RefreshCcw size={22} strokeWidth={2.2} />
                  </div>
                  <h3 className="cloud-cap-split-card__title">Disaster Recovery &amp; Failover</h3>
                  <p className="cloud-cap-split-card__desc">
                    Automated point-in-time backups, multi-zone replication, and zero-data-loss failover protocols.
                  </p>
                </div>
                <Link to="/contact" className="cloud-cap-split-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ARCHITECTURE SECTION */}
      <section className="cloud-architecture">
        <div className="container cloud-architecture__container">
          {/* Left Description Column */}
          <div className="cloud-architecture__left">
            <div className="cloud-architecture__eyebrow">
              <span className="cloud-architecture__eyebrow-dash"></span>
              Architecture
            </div>
            <h2 className="cloud-architecture__title">
              Engineered for continuous availability.
            </h2>
            <p className="cloud-architecture__desc">
              A resilient, globally distributed architecture that ensures high performance, security, and zero downtime for mission-critical systems.
            </p>
            <Link to="/contact" className="cloud-architecture__btn">
              Explore our architecture <ArrowRight size={14} />
            </Link>
          </div>

          {/* Center Topology Diagram */}
          <div className="cloud-architecture__center">
            <img 
              src="/images/cloud/cloud-arch-diagram.jpg" 
              onError={(e) => { e.currentTarget.src = '/images/cloud/cloud-arch-diagram.png'; }}
              alt="Globally distributed cloud architecture with multi-region load balancing" 
              className="cloud-architecture__diagram-img"
            />
          </div>

          {/* Right Performance Stats Card */}
          <div className="cloud-perf-card">
            <div className="cloud-perf-card__eyebrow">Trusted Performance</div>
            <div className="cloud-perf-card__grid">
              <div className="cloud-perf-metric">
                <span className="cloud-perf-metric__val">50,000+</span>
                <span className="cloud-perf-metric__label">Simultaneous Concurrent Requests</span>
              </div>

              <div className="cloud-perf-metric">
                <span className="cloud-perf-metric__val">99.99%</span>
                <span className="cloud-perf-metric__label">Uptime SLAs</span>
              </div>

              <div className="cloud-perf-feature">
                <Globe size={22} strokeWidth={2} className="cloud-perf-feature__icon" />
                <span className="cloud-perf-feature__label">Multi-region Resilience</span>
              </div>

              <div className="cloud-perf-feature">
                <ShieldCheck size={22} strokeWidth={2} className="cloud-perf-feature__icon" />
                <span className="cloud-perf-feature__label">Automated Failover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA BANNER */}
      <section className="cloud-cta">
        <div className="container cloud-cta__container">
          {/* Left CTA Info */}
          <div className="cloud-cta__left">
            <div className="cloud-cta__eyebrow">
              <span className="cloud-cta__eyebrow-dash"></span>
              Let's Build Together
            </div>
            <h2 className="cloud-cta__title">
              Infrastructure that doesn't become the bottleneck.
            </h2>
            <p className="cloud-cta__desc">
              Talk to our engineering team about high-concurrency, resilient, and secure cloud infrastructure for your mission-critical systems.
            </p>
            <Link to="/contact" className="cloud-cta__btn">
              Talk to us <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Earth Visual */}
          <div className="cloud-cta__right">
            <div className="cloud-cta__editorial-tag">
              <p className="cloud-cta__editorial-text">
                SCALABLE<br />
                SECURE<br />
                ALWAYS ON
              </p>
            </div>
            <div className="cloud-cta__visual-wrap">
              <img 
                src="/images/cloud/cloud-cta-earth.png" 
                alt="Interconnected global network spanning the globe" 
                className="cloud-cta__image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
