import React from "react";
import "../styles/Clientes.css";

const clientes = [
  { nome: "Petrobras", setor: "Petróleo & Gás", cor: "#004B2D" },
  { nome: "Claro", setor: "Telecom", cor: "#DA291C" },
  { nome: "IBGE", setor: "Governo", cor: "#1B3A6B" },
  { nome: "PetroRio", setor: "Petróleo & Gás", cor: "#00857C" },
  { nome: "RNP", setor: "Educação & Pesquisa", cor: "#003B71" },
  { nome: "TRE-Amazonas", setor: "Governo / Justiça Eleitoral", cor: "#009B3A" },
  { nome: "TRE-Pará", setor: "Governo / Justiça Eleitoral", cor: "#009B3A" },
  { nome: "SENAR", setor: "Agronegócio", cor: "#4A7C2E" },
  { nome: "Vibra", setor: "Energia", cor: "#00205B" },
];

const Clientes = () => {
  return (
    <div className="page-clientes">
      <div className="page-hero">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <span className="pulse-dot"></span>
              PORTFÓLIO
            </span>
            <h1>Nossos Clientes</h1>
            <p>
              Empresas e organizações que confiam na RuralWeb para suas
              comunicações críticas.
            </p>
          </div>
        </div>
      </div>

      <section className="clientes-section">
        <div className="container">
          <div className="section-label">
            <span className="line"></span>
            <span className="label-text">ALGUNS DOS NOSSOS CLIENTES</span>
            <span className="line"></span>
          </div>

          <div className="clientes-logo-grid">
            {clientes.map((cliente, index) => (
              <div key={index} className="cliente-logo-card">
                <div
                  className="cliente-logo-box"
                  style={{ borderColor: cliente.cor + "40" }}
                >
                  <span
                    className="cliente-sigla"
                    style={{ color: cliente.cor }}
                  >
                    {cliente.nome}
                  </span>
                </div>
                <span className="cliente-setor-label">{cliente.setor}</span>
              </div>
            ))}
          </div>

          <div className="clientes-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
                  <path d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="stat-num">500+</span>
              <span className="stat-lbl">Clientes Ativos</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 4L28 10v12L16 28 4 22V10l12-6z" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 16v12M16 16L4 10M16 16l12-6" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="stat-num">20+</span>
              <span className="stat-lbl">Anos de Mercado</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 8v8l6 4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="stat-num">99.9%</span>
              <span className="stat-lbl">SLA Cumprido</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 4l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10l3-10z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="stat-num">4.9</span>
              <span className="stat-lbl">Satisfação</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clientes;
