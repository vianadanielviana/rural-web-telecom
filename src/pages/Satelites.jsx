import React from "react";
import "../styles/Satelites.css";

const satelites = [
  {
    nome: "Anik G1",
    bandas: ["Banda C"],
    operador: "Telesat",
    posicao: "107.3° Oeste",
    lancamento: "2013",
    cobertura: "Américas",
    status: "OPERACIONAL",
    descricao:
      "Satélite de alta capacidade da Telesat para serviços de telecomunicações em Banda C nas Américas.",
  },
  {
    nome: "Telesat T14 R",
    bandas: ["Banda Ku"],
    operador: "Telesat",
    posicao: "63° Oeste",
    lancamento: "2014",
    cobertura: "Brasil + América Latina",
    status: "OPERACIONAL",
    descricao:
      "Satélite Telesat com cobertura regional em Banda Ku para comunicações corporativas e internet.",
  },
  {
    nome: "Telesat T12 V",
    bandas: ["Banda Ku"],
    operador: "Telesat",
    posicao: "15° Oeste",
    lancamento: "2015",
    cobertura: "Atlântico + Europa + África",
    status: "OPERACIONAL",
    descricao:
      "Satélite para serviços de comunicação marítima, conectividade empresarial e backhaul em Banda Ku.",
  },
  {
    nome: "Telesat T19 V",
    bandas: ["Banda Ku"],
    operador: "Telesat",
    posicao: "63° Oeste",
    lancamento: "2018",
    cobertura: "Brasil + América Latina",
    status: "OPERACIONAL",
    descricao:
      "Satélite com Beam Regional e Spots 01 a 05 para cobertura direcionada de alta performance em Banda Ku.",
    extras: ["Beam Regional", "Spots 01 a 05"],
  },
  {
    nome: "SGDC",
    bandas: ["Banda Ka"],
    operador: "Telebras",
    posicao: "75° Oeste",
    lancamento: "2017",
    cobertura: "Brasil + Oceano Atlântico",
    status: "OPERACIONAL",
    descricao:
      "Satélite Geoestacionário de Defesa e Comunicações Estratégicas do governo brasileiro em Banda Ka.",
  },
];

const Satelites = () => {
  return (
    <div className="page-satelites">
      <div className="page-hero">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <span className="pulse-dot"></span>
              FROTA SATELITAL
            </span>
            <h1>Satélites</h1>
            <p>
              Nossa frota de satélites parceiros garante cobertura total do
              território brasileiro com as melhores tecnologias do mercado.
            </p>
          </div>
        </div>
      </div>

      <section className="satelites-grid-section">
        <div className="container">
          <div className="section-label">
            <span className="line"></span>
            <span className="label-text">SATÉLITES DISPONÍVEIS</span>
            <span className="line"></span>
          </div>

          <div className="satelites-grid">
            {satelites.map((sat, index) => (
              <div key={index} className="satelite-card">
                <div className="card-header">
                  <div className="sat-icon">
                    <svg viewBox="0 0 48 48" fill="none">
                      <circle
                        cx="24"
                        cy="24"
                        r="20"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        opacity="0.3"
                      />
                      <circle
                        cx="24"
                        cy="24"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="24" cy="24" r="3" fill="currentColor" />
                      <path
                        d="M24 4 L24 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M24 34 L24 44"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M4 24 L14 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M34 24 L44 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <div className="sat-status">
                    <span className="pulse-dot green"></span>
                    {sat.status}
                  </div>
                </div>

                <h3 className="sat-nome">{sat.nome}</h3>
                <p className="sat-desc">{sat.descricao}</p>

                <div className="sat-bandas">
                  {sat.bandas.map((banda, i) => (
                    <span key={i} className="banda-tag">
                      {banda}
                    </span>
                  ))}
                  {sat.extras &&
                    sat.extras.map((extra, i) => (
                      <span key={`extra-${i}`} className="banda-tag extra-tag">
                        {extra}
                      </span>
                    ))}
                </div>

                <div className="sat-specs">
                  <div className="spec-item">
                    <span className="spec-label">Operador</span>
                    <span className="spec-value">{sat.operador}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Posição</span>
                    <span className="spec-value">{sat.posicao}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Lançamento</span>
                    <span className="spec-value">{sat.lancamento}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Cobertura</span>
                    <span className="spec-value">{sat.cobertura}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sat-cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Precisa de uma solução via satélite?</h3>
              <p>
                Entre em contato conosco para saber qual satélite e banda são
                ideais para sua necessidade.
              </p>
            </div>
            <a href="/#contact" className="btn btn-primary">
              Fale Conosco
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Satelites;
