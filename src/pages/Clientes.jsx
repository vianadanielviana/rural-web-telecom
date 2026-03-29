import React from "react";
import "../styles/Clientes.css";

const clientes = [
  { nome: "Petrobras", setor: "Petróleo & Gás" },
  { nome: "Vale", setor: "Mineração" },
  { nome: "JBS", setor: "Agronegócio" },
  { nome: "Suzano", setor: "Papel e Celulose" },
  { nome: "Marfrig", setor: "Agronegócio" },
  { nome: "BRF", setor: "Alimentos" },
  { nome: "Cargill", setor: "Agronegócio" },
  { nome: "IBAMA", setor: "Governo" },
  { nome: "Funai", setor: "Governo" },
  { nome: "Exército Brasileiro", setor: "Defesa" },
  { nome: "Marinha do Brasil", setor: "Defesa" },
  { nome: "Amaggi", setor: "Agronegócio" },
  { nome: "SLC Agrícola", setor: "Agronegócio" },
  { nome: "Bunge", setor: "Agronegócio" },
  { nome: "COPEL", setor: "Energia" },
  { nome: "CHESF", setor: "Energia" },
  { nome: "Eletronorte", setor: "Energia" },
  { nome: "Samarco", setor: "Mineração" },
];

const setores = [
  "Todos",
  "Agronegócio",
  "Mineração",
  "Petróleo & Gás",
  "Governo",
  "Defesa",
  "Energia",
  "Alimentos",
  "Papel e Celulose",
];

const Clientes = () => {
  const [filtro, setFiltro] = React.useState("Todos");

  const clientesFiltrados =
    filtro === "Todos" ? clientes : clientes.filter((c) => c.setor === filtro);

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
          <div className="filtros">
            {setores.map((setor, index) => (
              <button
                key={index}
                className={`filtro-btn ${filtro === setor ? "active" : ""}`}
                onClick={() => setFiltro(setor)}
              >
                {setor}
              </button>
            ))}
          </div>

          <div className="clientes-grid">
            {clientesFiltrados.map((cliente, index) => (
              <div key={index} className="cliente-card">
                <div className="cliente-logo">
                  <span className="logo-placeholder">
                    {cliente.nome.charAt(0)}
                  </span>
                </div>
                <div className="cliente-info">
                  <h4>{cliente.nome}</h4>
                  <span className="cliente-setor">{cliente.setor}</span>
                </div>
                <div className="cliente-status">
                  <span className="pulse-dot green"></span>
                  ATIVO
                </div>
              </div>
            ))}
          </div>

          <div className="clientes-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle
                    cx="16"
                    cy="10"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 28c0-6.627 5.373-12 12-12s12 5.373 12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="stat-num">500+</span>
              <span className="stat-lbl">Clientes Ativos</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4L28 10v12L16 28 4 22V10l12-6z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M16 16v12M16 16L4 10M16 16l12-6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="stat-num">20+</span>
              <span className="stat-lbl">Anos de Mercado</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <circle
                    cx="16"
                    cy="16"
                    r="12"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M16 8v8l6 4" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <span className="stat-num">99.9%</span>
              <span className="stat-lbl">SLA Cumprido</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <svg viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 4l3 10h10l-8 6 3 10-8-6-8 6 3-10-8-6h10l3-10z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
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
