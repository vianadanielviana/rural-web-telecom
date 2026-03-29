import React from "react";
import "../styles/Vsats.css";

const vsats = [
  {
    nome: "Antena VSAT 1.2m",
    tipo: "Banda Ku",
    status: "DISPONÍVEL",
    specs: {
      diametro: "1.2 metros",
      frequencia: "Ku Band (10.7-12.75 GHz)",
      ganho: "42.5 dBi",
      material: "Alumínio Premium",
    },
    descricao:
      "Antena compacta ideal para locais remotos com espaço limitado. Alta performance em condições adversas.",
  },
  {
    nome: "Antena VSAT 1.8m",
    tipo: "Banda C/Ku",
    status: "DISPONÍVEL",
    specs: {
      diametro: "1.8 metros",
      frequencia: "C/Ku Band",
      ganho: "45.2 dBi",
      material: "Fibra de Carbono",
    },
    descricao:
      "Antena versátil para aplicações empresariais, suportando múltiplas bandas com alta estabilidade.",
  },
  {
    nome: "Antena VSAT 2.4m",
    tipo: "Banda C",
    status: "DISPONÍVEL",
    specs: {
      diametro: "2.4 metros",
      frequencia: "C Band (3.7-4.2 GHz)",
      ganho: "48.1 dBi",
      material: "Aço Galvanizado",
    },
    descricao:
      "Maior resistência a chuvas tropicais. Ideal para regiões com alta pluviosidade.",
  },
  {
    nome: "Modem iDirect X7",
    tipo: "TDMA/SCPC",
    status: "DISPONÍVEL",
    specs: {
      throughput: "Até 200 Mbps",
      modulacao: "DVB-S2X",
      interfaces: "GigE, USB, WiFi",
      alimentacao: "48 VDC",
    },
    descricao:
      "Modem de alta performance com suporte a DVB-S2X e tecnologia de aceleração WAN integrada.",
  },
  {
    nome: "BUC 8W Ku-Band",
    tipo: "Block Up Converter",
    status: "DISPONÍVEL",
    specs: {
      potencia: "8 Watts",
      frequencia: "13.75-14.5 GHz",
      ganho: "55 dB",
      peso: "1.8 kg",
    },
    descricao:
      "Transmissor compacto e eficiente para aplicações VSAT de média capacidade.",
  },
  {
    nome: "LNB Universal",
    tipo: "Low Noise Block",
    status: "DISPONÍVEL",
    specs: {
      noiseFigure: "0.3 dB",
      frequencia: "10.7-12.75 GHz",
      ganho: "65 dB",
      voltagem: "13/18V",
    },
    descricao:
      "Receptor de baixo ruído para máxima qualidade de sinal e performance superior.",
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
