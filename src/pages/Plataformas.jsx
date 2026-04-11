import React from "react";
import "../styles/Plataformas.css";

const plataformas = [
  {
    nome: "iDirect",
    tipo: "TDMA/SCPC",
    status: "ATIVO",
    descricao:
      "Plataforma líder mundial em comunicações via satélite, oferecendo soluções DVB-S2X e TDMA de alta eficiência.",
    features: ["DVB-S2X", "Mobility", "Hub Virtual", "Multi-Banda"],
    logo: "iDirect",
  },
  {
    nome: "Comtech",
    tipo: "SCPC/MCPC",
    status: "ATIVO",
    descricao:
      "Soluções robustas para comunicações críticas, otimizadas para carrier-grade e aplicações de defesa.",
    features: ["DoD Certified", "Heights™", "Troposcatter", "SCPC"],
    logo: "Comtech",
  },
  {
    nome: "Hughes",
    tipo: "Jupiter System",
    status: "ATIVO",
    descricao:
      "Sistema Jupiter de alta capacidade para banda larga via satélite, com tecnologia de acesso de última geração.",
    features: ["HT2000", "Jupiter Ka", "Managed Services", "VSAT"],
    logo: "Hughes",
  },
  {
    nome: "Newtec",
    tipo: "DVB-S2X",
    status: "ATIVO",
    descricao:
      "Tecnologia de ponta em modulação e codificação, maximizando a eficiência espectral.",
    features: ["Dialog®", "Mx-DMA®", "Clean Channel", "DVB-S2X"],
    logo: "Newtec",
  },
  {
    nome: "Gilat",
    tipo: "Multi-Application",
    status: "ATIVO",
    descricao:
      "Plataforma versátil para aplicações fixas e móveis, incluindo IoT e comunicações marítimas.",
    features: ["SkyEdge II-c", "Mesh", "IoT Ready", "Maritime"],
    logo: "Gilat",
  },
  {
    nome: "Advantech",
    tipo: "SCPC/MF-TDMA",
    status: "ATIVO",
    descricao:
      "Equipamentos de alta confiabilidade para operadoras e integradores de sistemas.",
    features: ["Solid State", "Block Up", "Redundancy", "Remote I/O"],
    logo: "Advantech",
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
              <span className="stat-number">6+</span>
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
