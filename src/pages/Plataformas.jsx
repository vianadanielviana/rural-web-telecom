import React from "react";
import "../styles/Plataformas.css";

const plataformas = [
  {
    nome: "Gilat SkyEdge II C",
    tipo: "VSAT/TDMA",
    status: "ATIVO",
    descricao:
      "Plataforma VSAT de alta performance da Gilat para redes corporativas, com arquitetura hub centralizado e eficiência em Banda C.",
    features: ["Hub Central", "TDMA", "Banda C", "Multi-Serviço"],
    logo: "Gilat",
  },
  {
    nome: "Gilat SkyEdge II CX",
    tipo: "VSAT/DVB-S2X",
    status: "ATIVO",
    descricao:
      "Evolução da plataforma SkyEdge II com suporte a DVB-S2X, maior throughput e eficiência espectral avançada.",
    features: ["DVB-S2X", "Alta Capacidade", "Mesh", "IoT Ready"],
    logo: "Gilat",
  },
  {
    nome: "Comtech UHP",
    tipo: "TDMA/SCPC",
    status: "ATIVO",
    descricao:
      "Plataforma de comunicação via satélite de ultra alta performance, ideal para redes corporativas e governamentais.",
    features: ["Ultra High Performance", "TDMA", "SCPC", "Low Latency"],
    logo: "Comtech",
  },
  {
    nome: "iDirect",
    tipo: "TDMA/SCPC",
    status: "ATIVO",
    descricao:
      "Plataforma líder mundial em comunicações via satélite, oferecendo soluções DVB-S2X e TDMA de alta eficiência.",
    features: ["DVB-S2X", "Mobility", "Hub Virtual", "Multi-Banda"],
    logo: "iDirect",
  },
];

const Plataformas = () => {
  return (
    <div className="page-plataformas">
      <div className="page-hero">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <span className="pulse-dot"></span>
              INFRAESTRUTURA
            </span>
            <h1>Plataformas</h1>
            <p>
              Trabalhamos com as principais plataformas de comunicação via
              satélite do mercado mundial.
            </p>
          </div>
        </div>
      </div>

      <section className="plataformas-section">
        <div className="container">
          <div className="section-label">
            <span className="line"></span>
            <span className="label-text">TECNOLOGIAS PARCEIRAS</span>
            <span className="line"></span>
          </div>

          <div className="plataformas-grid">
            {plataformas.map((plat, index) => (
              <div key={index} className="plataforma-card">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="plat-header">
                    <div className="plat-logo">
                      <span className="logo-text">{plat.logo}</span>
                    </div>
                    <div className="plat-status">
                      <span className="pulse-dot green"></span>
                      {plat.status}
                    </div>
                  </div>

                  <div className="plat-tipo">{plat.tipo}</div>
                  <h3 className="plat-nome">{plat.nome}</h3>
                  <p className="plat-desc">{plat.descricao}</p>

                  <div className="plat-features">
                    {plat.features.map((feature, i) => (
                      <span key={i} className="feature-tag">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Plataformas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Monitoramento</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Multi</span>
              <span className="stat-label">Banda</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plataformas;
