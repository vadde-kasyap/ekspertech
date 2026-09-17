import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, ShieldCheck, Zap, RefreshCcw, Cloud, Cpu, Lock, CheckCircle2 } from 'lucide-react';

export default function CloudServicesPage() {
  return (
    <div>
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Cloud Infrastructure</div>
          <h1 className="page-hero__title">Built for high concurrency and zero downtime.</h1>
          <p className="page-hero__desc">
            High-concurrency autoscaling infrastructure engineered for extreme traffic surges, real-time telemetry, and 24/7 mission-critical availability.
          </p>
        </div>
      </section>

      {/* Cloud Stack Strip */}
      <section style={{ padding: '24px 0', borderTop: '1px solid var(--stone-200)', borderBottom: '1px solid var(--stone-200)', background: 'var(--stone-50)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(16px, 3vw, 32px)', flexWrap: 'wrap' }}>
            {[
              { label: 'Amazon Web Services', icon: <Cloud size={16} /> },
              { label: 'Microsoft Azure', icon: <Server size={16} /> },
              { label: 'Kubernetes & Containers', icon: <Cpu size={16} /> },
              { label: 'Air-Gapped Private Cloud', icon: <Lock size={16} /> },
              { label: '99.99% Uptime SLAs', icon: <CheckCircle2 size={16} /> },
            ].map((tech, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-secondary)', background: 'var(--white)', padding: '6px 14px', borderRadius: 'var(--r-full)', border: '1px solid var(--stone-200)' }}>
                <span style={{ color: 'var(--ember)' }}>{tech.icon}</span>
                <span>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginBottom: 56 }}>
            {[
              {
                icon: <Server size={24} strokeWidth={2.2} />,
                color: '#2563EB',
                bg: 'rgba(37, 99, 235, 0.08)',
                border: 'rgba(37, 99, 235, 0.22)',
                title: 'AWS & Azure Multi-Region',
                desc: 'Resilient cloud topologies with auto-scaling groups, global load balancing, and edge caching for sub-second latency.'
              },
              {
                icon: <Zap size={24} strokeWidth={2.2} />,
                color: '#EA580C',
                bg: 'rgba(234, 88, 12, 0.08)',
                border: 'rgba(234, 88, 12, 0.22)',
                title: 'Extreme Concurrency',
                desc: 'Proven handling of 50,000+ simultaneous concurrent requests during mission-critical reporting and transaction windows.'
              },
              {
                icon: <ShieldCheck size={24} strokeWidth={2.2} />,
                color: '#0D9488',
                bg: 'rgba(13, 148, 136, 0.08)',
                border: 'rgba(13, 148, 136, 0.22)',
                title: 'Private & Hybrid Cloud',
                desc: 'Dedicated private datacenter setups and air-gapped options for institutions and government bodies requiring strict data residency.'
              },
              {
                icon: <RefreshCcw size={24} strokeWidth={2.2} />,
                color: '#7C3AED',
                bg: 'rgba(124, 58, 237, 0.08)',
                border: 'rgba(124, 58, 237, 0.22)',
                title: 'Disaster Recovery & Failover',
                desc: 'Automated point-in-time backups, multi-zone replication, and zero-data-loss failover protocols.'
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
