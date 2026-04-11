import React, { useState } from "react";
import "../styles/Fotos.css";

// URLs das imagens do site original
const BASE_URL = "https://blog.ruralwebtelecom.com.br";

const categorias = [
  {
    nome: "Teleporto",
    descricao: "Centro de operações e telecomunicações",
    fotos: [
      {
        id: 1,
        titulo: "Teleporto RuralWeb",
        desc: "Centro de operações de telecomunicações",
        imagem: `${BASE_URL}/imagens/quem-somos.jpg`,
      },
    ],
  },
  {
    nome: "Parque de Antenas",
    descricao: "Antenas de transmissão e recepção",
    fotos: [
      {
        id: 2,
        titulo: "Parque de Antenas",
        desc: "Conjunto de antenas parabólicas",
        imagem: `${BASE_URL}/assets/img/fotos-parque-de-antenas.jpg`,
      },
    ],
  },
  {
    nome: "Operações",
    descricao: "Equipe técnica em ação",
    fotos: [
      {
        id: 3,
        titulo: "Centro de Operações",
        desc: "Monitoramento e controle 24/7",
        imagem: `${BASE_URL}/assets/img/fotos-operacoes.jpg`,
      },
    ],
  },
  {
    nome: "Infraestrutura",
    descricao: "Equipamentos e data center",
    fotos: [
      {
        id: 4,
        titulo: "Data Center",
        desc: "Infraestrutura de rede e servidores",
        imagem: `${BASE_URL}/assets/img/fotos-infraestrutura.jpg`,
      },
    ],
  },
  {
    nome: "Instalações",
    descricao: "Projetos e instalações em clientes",
    fotos: [
      {
        id: 5,
        titulo: "Instalação 01",
        desc: "Projeto de instalação VSAT",
        imagem: `${BASE_URL}/assets/img/fotos-instalacoes-01.jpg`,
      },
      {
        id: 6,
        titulo: "Instalação 02",
        desc: "Antena instalada em cliente",
        imagem: `${BASE_URL}/assets/img/fotos-instalacoes-02.jpg`,
      },
      {
        id: 7,
        titulo: "Instalação 03",
        desc: "Sistema completo de comunicação",
        imagem: `${BASE_URL}/assets/img/fotos-instalacoes-03.jpg`,
      },
      {
        id: 8,
        titulo: "Instalação 04",
        desc: "Equipamentos em operação",
        imagem: `${BASE_URL}/assets/img/fotos-instalacoes-04.jpg`,
      },
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
                <div className="foto-image-container">
                  <img
                    src={foto.imagem}
                    alt={foto.titulo}
                    className="foto-image"
                    loading="lazy"
                  />
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
              <img
                src={fotoSelecionada.imagem}
                alt={fotoSelecionada.titulo}
                className="modal-img"
              />
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
