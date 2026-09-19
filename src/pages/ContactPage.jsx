import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const email = 'info@ekspertech.com';
  const phone = '040 2355 4455';
  const phoneTel = '+914023554455';

  const handleCopy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero__eyebrow">Get In Touch</div>
          <h1 className="page-hero__title">Contact</h1>
          <p className="page-hero__desc">
            Talk directly with our engineering and leadership team.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="contact-email-card">
            <div className="contact-email-icon">
              <Mail size={30} />
            </div>

            <div className="contact-email-label">Email us directly</div>
            <a href={`mailto:${email}`} className="contact-email-address">
              {email}
            </a>

            <div className="contact-email-actions">
              <a href={`mailto:${email}`} className="btn btn--primary btn--lg">
                <span>Send Email</span>
                <ArrowUpRight size={18} />
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="btn btn--outline btn--lg"
              >
                {copied ? (
                  <>
                    <Check size={18} style={{ color: '#10b981' }} />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="contact-alt-call">
              <span className="contact-alt-call__label">Prefer to speak directly?</span>
              <a href={`tel:${phoneTel}`} className="contact-alt-call__link">
                <Phone size={16} />
                <span>Call {phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
