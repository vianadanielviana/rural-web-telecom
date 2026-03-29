import React, { useState } from "react";
import "../styles/Fotos.css";

const categorias = [
  {
    nome: "Teleporto",
    descricao: "Centro de operações e telecomunicações",
    fotos: [
      {
        id: 1,
        titulo: "Vista Aérea Teleporto",
        desc: "Vista aérea do centro de operações",
      },
      {
        id: 2,
        titulo: "Sala de Controle",
        desc: "Centro de monitoramento 24/7",
      },
      { id: 3, titulo: "Infraestrutura", desc: "Equipamentos de transmissão" },
    ],
  },
  {
    nome: "Parque de Antenas",
    descricao: "Antenas de transmissão e recepção",
    fotos: [
      {
        id: 4,
        titulo: "Antena 4.5m",
        desc: "Antena parabólica de alta capacidade",
      },
      {
        id: 5,
        titulo: "Array de Antenas",
        desc: "Conjunto de antenas multibanda",
      },
      { id: 6, titulo: "Antena 9m", desc: "Antena principal de transmissão" },
    ],
  },
  {
    nome: "Operações",
    descricao: "Equipe técnica em ação",
    fotos: [
      { id: 7, titulo: "NOC", desc: "Network Operations Center" },
      { id: 8, titulo: "Monitoramento", desc: "Equipe de suporte técnico" },
      { id: 9, titulo: "Manutenção", desc: "Técnicos em campo" },
    ],
  },
  {
    nome: "Infraestrutura",
    descricao: "Equipamentos e data center",
    fotos: [
      { id: 10, titulo: "Data Center", desc: "Servidores e roteadores" },
      { id: 11, titulo: "Rack de Modems", desc: "Equipamentos de comunicação" },
      { id: 12, titulo: "Energia", desc: "Sistema de energia redundante" },
    ],
  },
  {
    nome: "Instalações",
    descricao: "Projetos e instalações em clientes",
    fotos: [
      { id: 13, titulo: "Instalação Rural", desc: "VSAT em fazenda" },
      {
        id: 14,
        titulo: "Plataforma Offshore",
        desc: "Antena em plataforma de petróleo",
      },
      { id: 15, titulo: "Mineração", desc: "Sistema em área de mineração" },
    ],
  },
];

const Fotos = () => {
  const [catAtiva, setCatAtiva] = useState("Teleporto");
  const [modalAberto, setModalAberto] = useState(false);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);

  const categoriaAtual = categorias.find((c) => c.nome === catAtiva);

  const abrirModal = (foto) => {
    setFotoSelecionada(foto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setFotoSelecionada(null);
  };

  return (
    <div className="page-fotos">
      <div className="page-hero">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <span className="pulse-dot"></span>
              GALERIA
            </span>
            <h1>Fotos</h1>
            <p>
              Conheça nossa infraestrutura, operações e projetos através da
              nossa galeria de imagens.
            </p>
          </div>
        </div>
      </div>

      <section className="fotos-section">
        <div className="container">
          <div className="categorias-nav">
            {categorias.map((cat, index) => (
              <button
                key={index}
                className={`cat-btn ${catAtiva === cat.nome ? "active" : ""}`}
                onClick={() => setCatAtiva(cat.nome)}
              >
                <span className="cat-nome">{cat.nome}</span>
                <span className="cat-count">{cat.fotos.length}</span>
              </button>
            ))}
          </div>

          <div className="categoria-header">
            <h2>{categoriaAtual.nome}</h2>
            <p>{categoriaAtual.descricao}</p>
          </div>

          <div className="fotos-grid">
            {categoriaAtual.fotos.map((foto) => (
              <div
                key={foto.id}
                className="foto-card"
                onClick={() => abrirModal(foto)}
              >
                <div className="foto-placeholder">
                  <div className="foto-icon">
                    <svg viewBox="0 0 48 48" fill="none">
                      <rect
                        x="4"
                        y="8"
                        width="40"
                        height="32"
                        rx="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <circle
                        cx="16"
                        cy="20"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M44 32L32 22L20 32L12 26L4 32"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <span className="foto-id">
                    IMG_{foto.id.toString().padStart(4, "0")}
                  </span>
                </div>
                <div className="foto-info">
                  <h4>{foto.titulo}</h4>
                  <p>{foto.desc}</p>
                </div>
                <div className="foto-overlay">
                  <span className="view-icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalAberto && fotoSelecionada && (
        <div className="modal-backdrop" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={fecharModal}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-image">
              <div className="foto-placeholder large">
                <div className="foto-icon">
                  <svg viewBox="0 0 48 48" fill="none">
                    <rect
                      x="4"
                      y="8"
                      width="40"
                      height="32"
                      rx="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="16"
                      cy="20"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M44 32L32 22L20 32L12 26L4 32"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="foto-id">
                  IMG_{fotoSelecionada.id.toString().padStart(4, "0")}
                </span>
              </div>
            </div>
            <div className="modal-info">
              <h3>{fotoSelecionada.titulo}</h3>
              <p>{fotoSelecionada.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Fotos;
