import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <svg viewBox="0 0 32 32" fill="none">
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="url(#logo-grad)"
                strokeWidth="1.5"
              />
              <circle
                cx="16"
                cy="16"
                r="6"
                stroke="url(#logo-grad)"
                strokeWidth="1.5"
              />
              <circle cx="16" cy="16" r="2" fill="url(#logo-grad)" />
              <defs>
                <linearGradient
                  id="logo-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00d4ff" />
                  <stop offset="100%" stopColor="#00ff88" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">
            Rural<span className="logo-highlight">Web</span>
          </span>
        </Link>

        <button
          className={`mobile-menu-btn ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={closeMenu}
          >
            Início
          </Link>
          <Link
            to="/satelites"
            className={isActive("/satelites") ? "active" : ""}
            onClick={closeMenu}
          >
            Satélites
          </Link>
          <Link
            to="/plataformas"
            className={isActive("/plataformas") ? "active" : ""}
            onClick={closeMenu}
          >
            Plataformas
          </Link>
          <Link
            to="/vsats"
            className={isActive("/vsats") ? "active" : ""}
            onClick={closeMenu}
          >
            Vsats
          </Link>
          <Link
            to="/segmentos"
            className={isActive("/segmentos") ? "active" : ""}
            onClick={closeMenu}
          >
            Segmentos
          </Link>
          <Link
            to="/clientes"
            className={isActive("/clientes") ? "active" : ""}
            onClick={closeMenu}
          >
            Clientes
          </Link>
          <Link
            to="/fotos"
            className={isActive("/fotos") ? "active" : ""}
            onClick={closeMenu}
          >
            Fotos
          </Link>
          <a
            href="/#contact"
            className="btn btn-outline nav-cta"
            onClick={closeMenu}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
