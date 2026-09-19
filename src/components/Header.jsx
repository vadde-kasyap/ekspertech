import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X, Phone } from 'lucide-react';
import './Header.css';

const NAV_ITEMS = [
  {
    label: 'Industries',
    path: '/#where-we-work',
    groups: [
      {
        title: 'Core Sectors',
        items: [
          { label: 'Government & Public Sector', desc: 'State directorates, citizen platforms & examination security', path: '/enterprise-platforms' },
          { label: 'Energy & Mining', desc: 'Rugged telemetry, weighbridge automation & logistics', path: '/mining' },
          { label: 'Healthcare & Life Sciences', desc: 'FHIR data integration, EHR pipelines & clinical AI', path: '/ai-healthcare' },
        ],
      },
      {
        title: 'Engineering Foundation',
        items: [
          { label: 'Cloud Infrastructure', desc: 'High-concurrency autoscaling & zero-downtime resilience', path: '/cloud-services' },
          { label: 'Digital Transformation', desc: 'Modernising legacy systems into platforms that work', path: '/services' },
        ],
      },
    ],
  },
  { label: 'Our Work', path: '/case-studies' },
  { label: 'About us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleMouseEnter = (label) => {
    clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const isActive = (item) => {
    if (item.path === '/') return location.pathname === '/';
    if (location.pathname === item.path) return true;
    if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
    if (item.groups) {
      return item.groups.some((g) =>
        g.items.some((child) => {
          const childBasePath = child.path.split('#')[0];
          return childBasePath && childBasePath !== '/' && location.pathname === childBasePath;
        })
      );
    }
    if (item.children) {
      return item.children.some((child) => {
        const childBasePath = child.path.split('#')[0];
        return childBasePath && childBasePath !== '/' && location.pathname === childBasePath;
      });
    }
    return false;
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo" aria-label="Eksper Technologies">
          <img src="/images/logo_text.png" alt="Eksper Technologies" />
        </Link>

        {/* Desktop Nav */}
        <nav className="header__nav" aria-label="Main Navigation">
          {NAV_ITEMS.map((item) => {
            const hasMenu = Boolean(item.groups || item.children);
            return (
              <div
                key={item.label}
                className={`nav-item ${hasMenu ? 'nav-item--has-children' : ''}`}
                onMouseEnter={() => hasMenu && handleMouseEnter(item.label)}
                onMouseLeave={hasMenu ? handleMouseLeave : undefined}
              >
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item) ? 'nav-link--active' : ''}`}
                  aria-current={isActive(item) ? 'page' : undefined}
                >
                  {item.label}
                  {hasMenu && <ChevronDown size={13} className="nav-caret" />}
                </Link>

                {item.groups && (
                  <div className={`dropdown dropdown--grouped ${openDropdown === item.label ? 'dropdown--open' : ''}`}>
                    <div className="dropdown__groups-container">
                      {item.groups.map((group) => (
                        <div key={group.title} className="dropdown__group">
                          <div className="dropdown__group-header">
                            <span className="dropdown__group-title">{group.title}</span>
                          </div>
                          <div className="dropdown__list">
                            {group.items.map((child) => {
                              const isChildActive = location.pathname === child.path.split('#')[0];
                              return (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className={`dropdown__item ${isChildActive ? 'dropdown__item--active' : ''}`}
                                  aria-current={isChildActive ? 'page' : undefined}
                                >
                                  <span className="dropdown__item-label">{child.label}</span>
                                  <span className="dropdown__item-desc">{child.desc}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {item.children && !item.groups && (
                  <div className={`dropdown ${openDropdown === item.label ? 'dropdown--open' : ''}`}>
                    <div className="dropdown__list">
                      {item.children.map((child) => {
                        const isChildActive = location.pathname === child.path.split('#')[0];
                        return (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`dropdown__item ${isChildActive ? 'dropdown__item--active' : ''}`}
                            aria-current={isChildActive ? 'page' : undefined}
                          >
                            <span className="dropdown__item-label">{child.label}</span>
                            <span className="dropdown__item-desc">{child.desc}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="header__actions">
          <a href="tel:04023554455" className="header__phone" title="Call us">
            <Phone size={14} />
            <span>040 2355 4455</span>
          </a>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Talk to us
            <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            className="header__burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'mobile-drawer--open' : ''}`}>
        <div className="mobile-drawer__head">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img src="/images/logo_text.png" alt="Eksper Technologies" className="mobile-drawer__logo" />
          </Link>
          <button type="button" className="mobile-drawer__close" onClick={() => setMobileOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer__body">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                to={item.path}
                className={`mobile-drawer__link ${isActive(item) ? 'mobile-drawer__link--active' : ''}`}
                aria-current={isActive(item) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.groups && (
                <div className="mobile-drawer__groups">
                  {item.groups.map((group) => (
                    <div key={group.title} className="mobile-drawer__group">
                      <div className="mobile-drawer__group-title">{group.title}</div>
                      <div className="mobile-drawer__sub">
                        {group.items.map((child) => {
                          const isChildActive = location.pathname === child.path.split('#')[0];
                          return (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`mobile-drawer__sub-link ${isChildActive ? 'mobile-drawer__sub-link--active' : ''}`}
                              aria-current={isChildActive ? 'page' : undefined}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {item.children && !item.groups && (
                <div className="mobile-drawer__sub">
                  {item.children.map((child) => {
                    const isChildActive = location.pathname === child.path.split('#')[0];
                    return (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`mobile-drawer__sub-link ${isChildActive ? 'mobile-drawer__sub-link--active' : ''}`}
                        aria-current={isChildActive ? 'page' : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mobile-drawer__foot">
          <Link to="/contact" className="btn btn--primary" style={{ width: '100%' }} onClick={() => setMobileOpen(false)}>
            Talk to us
            <ArrowRight size={14} />
          </Link>
          <p className="mobile-drawer__contact">
            <a href="tel:04023554455">040 2355 4455</a>
            <span> · </span>
            <a href="mailto:info@ekspertech.com">info@ekspertech.com</a>
          </p>
        </div>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />}
    </header>
  );
}
