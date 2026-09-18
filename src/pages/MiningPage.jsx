import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Scale, 
  Truck, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Cpu, 
  Leaf, 
  Layers, 
  Radio, 
  ChevronRight 
} from 'lucide-react';
import './MiningPage.css';

export default function MiningPage() {
  return (
    <div className="mining-page">
      {/* 1. HERO SECTION */}
      <section className="mining-hero">
        <div className="container">
          <div className="mining-hero__container">
            <div className="mining-hero__left">
              <div className="mining-hero__eyebrow">
                <span className="mining-hero__eyebrow-dash" />
                Energy & Mining Telemetry
              </div>
              <h1 className="mining-hero__title">
                Smarter operations for high-throughput extraction.
              </h1>
              <p className="mining-hero__desc">
                Automated weighbridge hardware integration, digital transit passes, and real-time mineral extraction telemetry for NMDC and public-sector mining enterprises.
              </p>
              <div className="mining-hero__cta-row">
                <Link to="/contact" className="mining-hero__btn">
                  Talk to us <ArrowRight size={16} />
                </Link>
                <a href="#solutions" className="mining-hero__link">
                  Explore solutions ↓
                </a>
              </div>
            </div>

            <div className="mining-hero__right">
              <div className="mining-hero__visual-wrap">
                <img 
                  src="/images/mining/mining-hero-pit.png" 
                  alt="Mining open pit operations with real-time telemetry overlays" 
                  className="mining-hero__image"
                />
                <div className="mining-hero__visual-fade" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / OUTCOME RIBBON */}
      <section className="mining-ribbon">
        <div className="container">
          <div className="mining-ribbon__items">
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><Activity size={16} /></span>
              <span>Operational Visibility</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><BarChart3 size={16} /></span>
              <span>Real-time Intelligence</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><Truck size={16} /></span>
              <span>Connected Assets</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><ShieldCheck size={16} /></span>
              <span>Safer Workplaces</span>
            </div>
            <div className="mining-ribbon__divider" />
            <div className="mining-ribbon__item">
              <span className="mining-ribbon__icon"><Leaf size={16} /></span>
              <span>Sustainable Mining</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VALUE CHAIN SECTION */}
      <section className="mining-chain" id="value-chain">
        <div className="container">
          <div className="mining-chain__header">
            <div className="mining-section-eyebrow">End-to-End Lifecycle</div>
            <h2 className="mining-section-title">Technology across the mining value chain.</h2>
            <p className="mining-section-desc">
              Seamless operational visibility, hardware integration, and telemetry from geological modeling to final weighbridge dispatch.
            </p>
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
                <span className="mining-chain__step-num">Step 01</span>
                <h3 className="mining-chain__step-title">Exploration & Planning</h3>
                <p className="mining-chain__step-desc">
                  Pit modeling, drill-rig status tracking, and blast perimeter monitoring integrated with mine safety systems.
                </p>
              </div>
              <div className="mining-chain__connector">
                <ChevronRight size={16} />
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
                <span className="mining-chain__step-num">Step 02</span>
                <h3 className="mining-chain__step-title">Extraction</h3>
                <p className="mining-chain__step-desc">
                  Excavator payload telemetry, cycle-time telemetry, and haul-truck queue optimization inside active open pits.
                </p>
              </div>
              <div className="mining-chain__connector">
                <ChevronRight size={16} />
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
                <span className="mining-chain__step-num">Step 03</span>
                <h3 className="mining-chain__step-title">Handling & Processing</h3>
                <p className="mining-chain__step-desc">
                  Crushing plant throughput, conveyor belt health monitoring, and real-time stockpile inventory tracking.
                </p>
              </div>
              <div className="mining-chain__connector">
                <ChevronRight size={16} />
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
                <span className="mining-chain__step-num">Step 04</span>
                <h3 className="mining-chain__step-title">Logistics & Dispatch</h3>
                <p className="mining-chain__step-desc">
                  Automated weighbridges, tamper-proof electronic transit passes (e-TP), and regulatory gate-out reconciliation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLAGSHIP CLIENT STRIP (NMDC) */}
      <section className="mining-flagship">
        <div className="container">
          <div className="mining-flagship__container">
            <div className="mining-flagship__left">
              <span className="mining-flagship__badge">
                Flagship Deployment
              </span>
              <div title="NMDC" className="mining-flagship__logo">
                <svg viewBox="0 0 140 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: 32, width: 'auto' }}>
                  <rect x="2" y="5" width="28" height="28" rx="4" fill="#003366" />
                  <path d="M7 25L14 11L18 20L22 14L25 25" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="21" cy="11" r="2" fill="#E05A2B" />
                  <text x="38" y="25" fontFamily="'Outfit', 'Inter', sans-serif" fontSize="19" fontWeight="800" fill="currentColor" letterSpacing="0.06em">NMDC</text>
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
            <div className="mining-section-eyebrow">Enterprise Mining Solutions</div>
            <h2 className="mining-section-title">Technology for every mining need.</h2>
            <p className="mining-section-desc">
              Hardware-integrated weighbridges, telemetry gateways, and operational intelligence engines engineered for harsh field operations.
            </p>
          </div>

          <div className="mining-solutions__grid">
            {/* Card 1: Mining Operations */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#FEF3C7', color: '#D97706' }}>
                    <Scale size={24} />
                  </span>
                  <h3 className="mining-card__title">Mining Operations</h3>
                  <p className="mining-card__desc">
                    Enable efficient extraction, material handling, processing and dispatch with integrated digital solutions.
                  </p>
                  <ul className="mining-card__features">
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Automated weighbridge capture & gross/tare logging
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Instant digital weight tickets with barcode verification
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Multi-site scale calibration & tamper alarms
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-01-operations.png" 
                  alt="Excavator and haul truck during mining operations" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>

            {/* Card 2: Mining Intelligence */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#E0F2FE', color: '#0284C7' }}>
                    <BarChart3 size={24} />
                  </span>
                  <h3 className="mining-card__title">Mining Intelligence</h3>
                  <p className="mining-card__desc">
                    Real-time operational visibility, KPI/LPI dashboards, production analytics and forecasting for smarter decisions.
                  </p>
                  <ul className="mining-card__features">
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Live production extraction vs. dispatch yield tracking
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Shift-level throughput analytics & bottleneck detection
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Executive reporting with multi-pit comparative metrics
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-02-intelligence.png" 
                  alt="Control room engineer monitoring live mining intelligence dashboards" 
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
                    <Cpu size={24} />
                  </span>
                  <h3 className="mining-card__title">Mine Automation & IIoT</h3>
                  <p className="mining-card__desc">
                    Connected equipment, telematics, GPS/GIS, geofencing and real-time data acquisition for safer and more efficient operations.
                  </p>
                  <ul className="mining-card__features">
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Rugged edge telemetry gateways for dust & vibration
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Tamper-resistant load cell serial communications
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Geofenced perimeter security & unauthorized transit alerts
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-03-iiot.png" 
                  alt="Connected haul truck with telemetry sensors and aerial drone network" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>

            {/* Card 4: Enterprise Mining Operations */}
            <div className="mining-card">
              <div className="mining-card__content">
                <div className="mining-card__top">
                  <span className="mining-card__icon-wrap" style={{ background: '#F3E8FF', color: '#7E22CE' }}>
                    <Layers size={24} />
                  </span>
                  <h3 className="mining-card__title">Enterprise Mining Operations</h3>
                  <p className="mining-card__desc">
                    Asset management, procurement & stores, workforce enablement, safety and ESG to drive operational excellence.
                  </p>
                  <ul className="mining-card__features">
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Electronic Transit Passes (e-TP) with QR code security
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> State mining directorate automated regulatory filings
                    </li>
                    <li className="mining-card__feature-item">
                      <span className="mining-card__feature-dot" /> Royalty frameworks, audit trails, and statutory compliance
                    </li>
                  </ul>
                </div>
                <Link to="/contact" className="mining-card__link">
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
              <div className="mining-card__visual">
                <img 
                  src="/images/mining/mining-sol-04-enterprise.png" 
                  alt="Site engineer reviewing enterprise mining metrics on tablet" 
                  className="mining-card__img"
                />
                <div className="mining-card__mask" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL IMPACT / PROVEN OUTCOMES */}
      <section className="mining-impact">
        <div className="container">
          <div className="mining-impact__header">
            <div className="mining-section-eyebrow">Proven Outcomes</div>
            <h2 className="mining-section-title">Delivering real impact for more sustainable mining.</h2>
            <p className="mining-section-desc">
              Measurable operational and regulatory improvements across institutional mineral extraction sites.
            </p>
          </div>

          <div className="mining-impact__grid">
            <div className="mining-impact__item">
              <div className="mining-impact__icon">
                <Scale size={22} />
              </div>
              <h3 className="mining-impact__title">Operational Efficiency</h3>
              <p className="mining-impact__desc">
                Sub-second automated weighbridge gross/tare logging, drastically cutting vehicle idle times during peak shift turnarounds.
              </p>
            </div>

            <div className="mining-impact__item">
              <div className="mining-impact__icon">
                <ShieldCheck size={22} />
              </div>
              <h3 className="mining-impact__title">Improved Safety Outcomes</h3>
              <p className="mining-impact__desc">
                Tamper-resistant load validation preventing hazardous vehicle overloading and automated pit geofence tracking.
              </p>
            </div>

            <div className="mining-impact__item">
              <div className="mining-impact__icon">
                <BarChart3 size={22} />
              </div>
              <h3 className="mining-impact__title">Better Resource Utilization</h3>
              <p className="mining-impact__desc">
                End-to-end extraction yield reconciliation between pit excavator production and gate-out weighbridge receipts.
              </p>
            </div>

            <div className="mining-impact__item">
              <div className="mining-impact__icon">
                <Leaf size={22} />
              </div>
              <h3 className="mining-impact__title">Sustainable Growth</h3>
              <p className="mining-impact__desc">
                100% paperless e-TP issuance and full statutory compliance with state mining directorate royalty oversight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CINEMATIC BOTTOM CTA BANNER */}
      <section className="mining-cta">
        <div className="container">
          <div className="mining-cta__banner">
            <img 
              src="/images/mining/mining-cta-banner.png" 
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
