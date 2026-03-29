import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-line"></div>

      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="url(#footer-grad)"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="6"
                    stroke="url(#footer-grad)"
                    strokeWidth="1.5"
                  />
                  <circle cx="16" cy="16" r="2" fill="url(#footer-grad)" />
                  <defs>
                    <linearGradient
                      id="footer-grad"
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
              <span>
                Rural<span className="highlight">Web</span>
              </span>
            </a>
            <p className="footer-description">
              Conectividade via satélite de alta performance para todo o Brasil.
            </p>
            <div className="footer-badges">
              <span className="badge">SCM</span>
              <span className="badge">SLE</span>
              <span className="badge">ANATEL</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li>
                <a href="#hero">Início</a>
              </li>
              <li>
                <a href="#about">Quem Somos</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Serviços</h4>
            <ul>
              <li>
                <a href="#services">Internet Satelital</a>
              </li>
              <li>
                <a href="#services">Redes Privativas</a>
              </li>
              <li>
                <a href="#services">IP Fixo</a>
              </li>
              <li>
                <a href="#services">Backhaul</a>
              </li>
              <li>
                <a href="#services">NOC 24/7</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <div className="contact-item">
              <span className="contact-label">Comercial:</span>
              <a href="mailto:comercial@ruralwebtelecom.com.br">
                comercial@ruralwebtelecom.com.br
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Suporte:</span>
              <a href="mailto:suporte@ruralwebtelecom.com.br">
                suporte@ruralwebtelecom.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} RuralWeb Telecomunicações. Todos os direitos
            reservados.
          </p>
          <div className="footer-status">
            <span className="status-dot"></span>
            Sistemas Operacionais
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
