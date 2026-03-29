import React from "react";
import "../styles/Vsats.css";

const vsats = [
  {
    nome: "Gilat Gemini",
    tipo: "VSAT Platform",
    status: "DISPONÍVEL",
    specs: {
      plataforma: "SkyEdge II",
      throughput: "Até 200 Mbps",
      modulacao: "DVB-S2X",
      aplicacao: "Corporativo / Governo",
    },
    descricao:
      "Terminal VSAT de alta performance da Gilat, projetado para redes corporativas e governamentais com máxima confiabilidade.",
  },
  {
    nome: "Gilat Capricorn",
    tipo: "VSAT Platform",
    status: "DISPONÍVEL",
    specs: {
      plataforma: "SkyEdge II-c",
      throughput: "Até 150 Mbps",
      modulacao: "DVB-S2",
      aplicacao: "Enterprise / Rural",
    },
    descricao:
      "Terminal VSAT compacto e versátil da Gilat, ideal para conectividade em áreas remotas e aplicações empresariais.",
  },
  {
    nome: "Comtech UHP",
    tipo: "TDMA/SCPC",
    status: "DISPONÍVEL",
    specs: {
      throughput: "Até 450 Mbps",
      modulacao: "DVB-S2X",
      interfaces: "GigE, Serial, USB",
      aplicacao: "Carrier-Grade",
    },
    descricao:
      "Terminal VSAT de ultra alta performance da Comtech para redes de alta capacidade e baixa latência.",
  },
  {
    nome: "iDirect X3 e X5",
    tipo: "TDMA/SCPC",
    status: "DISPONÍVEL",
    specs: {
      throughput: "Até 100 Mbps (X5)",
      modulacao: "DVB-S2X",
      interfaces: "GigE, WiFi",
      alimentacao: "48 VDC",
    },
    descricao:
      "Modems VSAT da iDirect com suporte a DVB-S2X, aceleração WAN e gerenciamento remoto para redes corporativas.",
  },
  {
    nome: "Viasat Surf Beam 2 Plus",
    tipo: "Banda Ka",
    status: "DISPONÍVEL",
    specs: {
      throughput: "Até 100 Mbps",
      modulacao: "Proprietária Viasat",
      frequencia: "Ka Band",
      aplicacao: "Residencial / Empresarial",
    },
    descricao:
      "Terminal de banda larga via satélite em Banda Ka da Viasat, oferecendo alta velocidade para residências e empresas.",
  },
];

const Vsats = () => {
  return (
    <div className="page-vsats">
      <div className="page-hero">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <span className="pulse-dot"></span>
              EQUIPAMENTOS
            </span>
            <h1>VSATs</h1>
            <p>
              Equipamentos de última geração para garantir a melhor conexão via
              satélite para sua operação.
            </p>
          </div>
        </div>
      </div>

      <section className="vsats-section">
        <div className="container">
          <div className="section-label">
            <span className="line"></span>
            <span className="label-text">CATÁLOGO DE EQUIPAMENTOS</span>
            <span className="line"></span>
          </div>

          <div className="vsats-grid">
            {vsats.map((vsat, index) => (
              <div key={index} className="vsat-card">
                <div className="vsat-visual">
                  <div className="vsat-icon">
                    <svg viewBox="0 0 64 64" fill="none">
                      <circle
                        cx="32"
                        cy="32"
                        r="28"
                        stroke="currentColor"
                        strokeWidth="1"
                        opacity="0.3"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="18"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="32"
                        cy="32"
                        r="8"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle cx="32" cy="32" r="3" fill="currentColor" />
                      <path
                        d="M32 4 L32 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M32 50 L32 60"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4 32 L14 32"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M50 32 L60 32"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="vsat-type">{vsat.tipo}</div>
                </div>

                <div className="vsat-content">
                  <div className="vsat-header">
                    <h3>{vsat.nome}</h3>
                    <span className="vsat-status">
                      <span className="pulse-dot green"></span>
                      {vsat.status}
                    </span>
                  </div>

                  <p className="vsat-desc">{vsat.descricao}</p>

                  <div className="vsat-specs">
                    {Object.entries(vsat.specs).map(([key, value], i) => (
                      <div key={i} className="spec-row">
                        <span className="spec-key">{key}</span>
                        <span className="spec-val">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vsats-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-icon">
              <svg viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 4L28 12L40 14L30 24L34 40L24 34L14 40L18 24L8 14L20 12L24 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="rgba(0,212,255,0.2)"
                />
              </svg>
            </div>
            <div className="cta-content">
              <h3>Precisa de um orçamento personalizado?</h3>
              <p>
                Nossa equipe técnica pode ajudar a escolher o melhor equipamento
                para sua necessidade.
              </p>
            </div>
            <a href="/#contact" className="btn btn-primary">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vsats;
