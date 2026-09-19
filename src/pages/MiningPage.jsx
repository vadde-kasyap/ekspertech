import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  BarChart3, 
  Link as LinkIcon, 
  ShieldCheck, 
  Leaf, 
  Zap, 
  Database, 
  Shield, 
  RefreshCw, 
  ChevronRight, 
  Cpu, 
  Truck, 
  Server, 
  LineChart, 
  FileCheck2, 
  Maximize2, 
  Users 
} from 'lucide-react';
import useDocumentTitle from '../hooks/useDocumentTitle';
import './MiningPage.css';

export default function MiningPage() {
  useDocumentTitle('Energy & Mining Telemetry Solutions | Eksper Technologies');

  return (
    <div className="mining-page">
      {/* 1. HERO SECTION */}
      <section className="mining-hero">
        <div className="container mining-hero__container">
          <div className="mining-hero__left">
            <div className="mining-eyebrow">
              <span className="mining-eyebrow-dash" />
              Industry &bull; Energy &amp; Mining
            </div>
            <h1 className="mining-hero__title">
              Smarter operations for a stronger tomorrow.
            </h1>
            <p className="mining-hero__desc">
              Integrated technology solutions for the entire mining value chain — from extraction to dispatch, enabling safer, more efficient and sustainable operations.
            </p>
            <div className="mining-hero__cta-row">
              <Link to="/contact" className="mining-hero__btn-primary">
                Talk to us <ArrowRight size={16} />
              </Link>
              <a href="#solutions" className="mining-hero__btn-secondary">
                Explore solutions ↓
              </a>
            </div>
          </div>

          <div className="mining-hero__right">
            <div className="mining-hero__visual-wrap">
              <img 
                src="/images/mining/mining-hero-panorama.jpg" 
                onError={(e) => { e.currentTarget.src = '/images/mining/mining-hero-panorama.png'; }}
                alt="Mining open pit operations with real-time telemetry HUD overlay" 
                className="mining-hero__image"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / CAPABILITIES RIBBON */}
      <section className="mining-ribbon">
        <div className="container">
          <div className="mining-ribbon__items">
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><Eye size={16} /></span>
              <span>Operational Visibility</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><BarChart3 size={16} /></span>
              <span>Real-time Intelligence</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><LinkIcon size={16} /></span>
              <span>Connected Assets</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><ShieldCheck size={16} /></span>
              <span>Safer Workplaces</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon mining-ribbon__icon--green"><Leaf size={16} /></span>
              <span>Sustainable Mining</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE CHAIN SECTION */}
      <section className="mining-chain" id="value-chain">
        <div className="container">
          <div className="mining-chain__header-split">
            <div className="mining-chain__header-left">
              <div className="mining-eyebrow">
                <span className="mining-eyebrow-dash" />
                The Mining Value Chain
              </div>
              <h2 className="mining-heading">
                End-to-end capabilities across the mining lifecycle.
              </h2>
            </div>
            <div className="mining-chain__header-right">
              <p className="mining-subheading">
                From exploration and planning to extraction, processing and dispatch, we enable connected, data-driven and resilient mining operations.
              </p>
            </div>
          </div>

          <div className="mining-chain__grid">
            {/* Step 1 */}
            <div className="mining-chain__card">
              <div className="mining-chain__img-wrap">
                <img 
                  src="/images/mining/mining-vc-01-exploration.png" 
                  alt="Exploration & Planning" 
                  className="mining-chain__img"
                />
              </div>
              <div className="mining-chain__body">
                <h3 className="mining-chain__step-title">Exploration & Planning</h3>
              </div>
              <div className="mining-chain__connector">
                <ChevronRight size={15} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="mining-chain__card">
              <div className="mining-chain__img-wrap">
                <img 
                  src="/images/mining/mining-vc-02-extraction.png" 
                  alt="Extraction" 
                  className="mining-chain__img"
                />
              </div>
              <div className="mining-chain__body">
                <h3 className="mining-chain__step-title">Extraction</h3>
              </div>
              <div className="mining-chain__connector">
                <ChevronRight size={15} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="mining-chain__card">
              <div className="mining-chain__img-wrap">
                <img 
                  src="/images/mining/mining-vc-03-processing.png" 
                  alt="Handling & Processing" 
                  className="mining-chain__img"
                />
              </div>
              <div className="mining-chain__body">
                <h3 className="mining-chain__step-title">Handling & Processing</h3>
              </div>
              <div className="mining-chain__connector">
                <ChevronRight size={15} />
              </div>
            </div>

            {/* Step 4 */}
            <div className="mining-chain__card">
              <div className="mining-chain__img-wrap">
                <img 
                  src="/images/mining/mining-vc-04-logistics.png" 
                  alt="Logistics & Dispatch" 
                  className="mining-chain__img"
                />
              </div>
              <div className="mining-chain__body">
                <h3 className="mining-chain__step-title">Logistics & Dispatch</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP CLIENT STRIP */}
      <section className="mining-flagship">
        <div className="container">
          <div className="mining-flagship__container">
            <div className="mining-flagship__left">
              <span className="mining-flagship__badge">
                Flagship Deployment
              </span>
              <div title="National Mineral Enterprise" className="mining-flagship__logo">
                <svg viewBox="0 0 165 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                  <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                  <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                  <text x="38" y="24" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="13" fontWeight="800" fill="currentColor" letterSpacing="0.05em">MINING PSU</text>
                </svg>
              </div>
            </div>
            
            <div className="mining-flagship__claims">
              <span className="mining-flagship__claim-item">
                <CheckCircle2 size={16} className="mining-flagship__check" /> Multi-mine complex deployment
              </span>
              <span className="mining-flagship__claim-item">
                <CheckCircle2 size={16} className="mining-flagship__check" /> Tamper-proof load-cell telemetry
              </span>
              <span className="mining-flagship__claim-item">
                <CheckCircle2 size={16} className="mining-flagship__check" /> State mining directorate integration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS SECTION (2x2 SPLIT CARDS) */}
      <section className="mining-solutions" id="solutions">
        <div className="container">
          <div className="mining-solutions__header">
            <div className="mining-eyebrow">
              <span className="mining-eyebrow-dash" />
              Our Solutions
            </div>
            <h2 className="mining-heading">
              Technology for every mining need.
            </h2>
          </div>

          <div className="mining-solutions__grid">
            {/* Card 1: Mining Operations */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#FFF7ED', color: '#EA580C' }}>
                    <Zap size={22} />
                  </span>
                  <h3 className="mining-card__title">Mining Operations</h3>
                  <p className="mining-card__desc">
                    Enable efficient extraction, material handling, processing and dispatch with integrated digital solutions.
                  </p>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-01-operations.png" 
                  alt="Mining Operations Excavator" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>

            {/* Card 2: Mining Intelligence */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#EFF6FF', color: '#2563EB' }}>
                    <Database size={22} />
                  </span>
                  <h3 className="mining-card__title">Mining Intelligence</h3>
                  <p className="mining-card__desc">
                    Real-time operational visibility, KPI/LPI dashboards, production analytics and forecasting for smarter decisions.
                  </p>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-02-intelligence.png" 
                  alt="Mining Intelligence Control Room" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>

            {/* Card 3: Mine Automation & IIoT */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#ECFDF5', color: '#059669' }}>
                    <Shield size={22} />
                  </span>
                  <h3 className="mining-card__title">Mine Automation & IIoT</h3>
                  <p className="mining-card__desc">
                    Connected equipment, telematics, GPS/GIS, geofencing and real-time data acquisition for safer and more efficient operations.
                  </p>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-03-iiot.png" 
                  alt="Mine Automation & IIoT Haul Truck" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>

            {/* Card 4: Enterprise Mining Operations */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#FAF5FF', color: '#9333EA' }}>
                    <RefreshCw size={22} />
                  </span>
                  <h3 className="mining-card__title">Enterprise Mining Operations</h3>
                  <p className="mining-card__desc">
                    Asset management, procurement & stores, workforce enablement, safety and ESG to drive operational excellence.
                  </p>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-04-enterprise.png" 
                  alt="Enterprise Mining Operations Tablet" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONNECTED MINING ARCHITECTURE PIPELINE */}
      <section className="mining-arch">
        <div className="container">
          <div className="mining-arch__header">
            <div className="mining-eyebrow">
              <span className="mining-eyebrow-dash" />
              Operational Architecture
            </div>
            <h2 className="mining-heading">
              Connected Mining: From Pit Sensor to Decision.
            </h2>
            <p className="mining-subheading">
              Enterprise architecture uniting heavy equipment, rugged edge telemetry, and regulatory compliance into one cohesive intelligence loop.
            </p>
          </div>

          <div className="mining-arch__pipeline">
            {/* Node 1 */}
            <div className="mining-arch__node">
              <div className="mining-arch__node-num">STAGE 01</div>
              <div className="mining-arch__node-icon"><Truck size={20} /></div>
              <h4 className="mining-arch__node-title">Pit Equipment</h4>
              <p className="mining-arch__node-desc">
                Excavators, haulers, static weighbridges & load cells operating in harsh field conditions.
              </p>
              <div className="mining-arch__arrow">→</div>
            </div>

            {/* Node 2 */}
            <div className="mining-arch__node">
              <div className="mining-arch__node-num">STAGE 02</div>
              <div className="mining-arch__node-icon"><Cpu size={20} /></div>
              <h4 className="mining-arch__node-title">Telemetry & Sensors</h4>
              <p className="mining-arch__node-desc">
                Rugged IIoT gateways, tamper-proof serial bus links, and GPS/GIS tracking units.
              </p>
              <div className="mining-arch__arrow">→</div>
            </div>

            {/* Node 3 */}
            <div className="mining-arch__node">
              <div className="mining-arch__node-num">STAGE 03</div>
              <div className="mining-arch__node-icon"><Server size={20} /></div>
              <h4 className="mining-arch__node-title">Data Acquisition</h4>
              <p className="mining-arch__node-desc">
                Edge gross/tare validation, encrypted stream ingestion, and real-time payload logging.
              </p>
              <div className="mining-arch__arrow">→</div>
            </div>

            {/* Node 4 */}
            <div className="mining-arch__node">
              <div className="mining-arch__node-num">STAGE 04</div>
              <div className="mining-arch__node-icon"><LineChart size={20} /></div>
              <h4 className="mining-arch__node-title">Production Analytics</h4>
              <p className="mining-arch__node-desc">
                Shift-level throughput metrics, weighbridge turnaround times, and extraction rate dashboards.
              </p>
              <div className="mining-arch__arrow">→</div>
            </div>

            {/* Node 5 */}
            <div className="mining-arch__node">
              <div className="mining-arch__node-num">STAGE 05</div>
              <div className="mining-arch__node-icon"><FileCheck2 size={20} /></div>
              <h4 className="mining-arch__node-title">Operational Decisions</h4>
              <p className="mining-arch__node-desc">
                Instant digital transit passes (e-TP), statutory state filings, and dispatch clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REAL IMPACT SECTION */}
      <section className="mining-impact">
        <div className="container">
          <div className="mining-impact__split">
            <div className="mining-impact__left">
              <div className="mining-eyebrow">
                <span className="mining-eyebrow-dash" />
                Real Impact
              </div>
              <h2 className="mining-heading" style={{ margin: 0 }}>
                Enabling safer, smarter and more sustainable mining.
              </h2>
            </div>

            <div className="mining-impact__columns">
              <div className="mining-impact__col">
                <div className="mining-impact__icon-circle">
                  <Maximize2 size={22} />
                </div>
                <h4 className="mining-impact__col-title">Operational Efficiency</h4>
              </div>

              <div className="mining-impact__col">
                <div className="mining-impact__icon-circle">
                  <ShieldCheck size={22} />
                </div>
                <h4 className="mining-impact__col-title">Improved Safety Outcomes</h4>
              </div>

              <div className="mining-impact__col">
                <div className="mining-impact__icon-circle mining-impact__icon-circle--green">
                  <Leaf size={22} />
                </div>
                <h4 className="mining-impact__col-title">Better Resource Utilization</h4>
              </div>

              <div className="mining-impact__col">
                <div className="mining-impact__icon-circle">
                  <Users size={22} />
                </div>
                <h4 className="mining-impact__col-title">Sustainable Growth</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CINEMATIC BOTTOM CTA BANNER */}
      <section className="mining-cta">
        <div className="container">
          <div className="mining-cta__banner">
            <img 
              src="/images/mining/mining-cta-banner.jpg" 
              onError={(e) => { e.currentTarget.src = '/images/mining/mining-cta-banner.png'; }}
              alt="Mountain open pit mine at dusk" 
              className="mining-cta__bg-img"
            />
            <div className="mining-cta__overlay" />
            
            <div className="mining-cta__content">
              <div className="mining-cta__left">
                <div className="mining-cta__eyebrow">
                  <span className="mining-cta__eyebrow-dash" />
                  Let's Build What's Next
                </div>
                <h2 className="mining-cta__title">
                  Partner with us to transform your mining operations.
                </h2>
                <p className="mining-cta__desc">
                  Talk to our team to explore how we can help you build smarter, safer and more sustainable mining operations.
                </p>
                <Link to="/contact" className="mining-cta__btn">
                  Talk to us <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mining-cta__editorial">
                <div>RESPONSIBLE MINING</div>
                <div>BRIGHTER TOMORROWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
