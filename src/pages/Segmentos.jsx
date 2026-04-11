import React from "react";
import "../styles/Segmentos.css";

const segmentos = [
  {
    nome: "Agronegócio",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M24 4C12 10 8 24 8 32c0 6 4 12 16 12s16-6 16-12c0-8-4-22-16-28z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M24 12v32" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20c-4 0-8 4-8 8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20c4 0 8 4 8 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    descricao:
      "Conectividade para fazendas, agricultura de precisão, monitoramento de rebanhos e operações agrícolas remotas.",
    cases: [
      "Telemetria de Máquinas",
      "IoT Agrícola",
      "Monitoramento Climático",
      "Gestão de Frotas",
    ],
    stats: { clientes: "500+", hectares: "2M+" },
  },
  {
    nome: "Mineração",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <polygon
          points="24,4 44,16 44,32 24,44 4,32 4,16"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <polygon
          points="24,12 36,20 36,28 24,36 12,28 12,20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="rgba(0,212,255,0.2)"
        />
        <circle cx="24" cy="24" r="4" fill="currentColor" />
      </svg>
    ),
    descricao:
      "Infraestrutura de comunicação para operações de mineração em áreas remotas com alta disponibilidade.",
    cases: [
      "Comunicação de Mina",
      "Segurança Operacional",
      "Automação",
      "Videomonitoramento",
    ],
    stats: { minas: "50+", uptime: "99.9%" },
  },
  {
    nome: "Petróleo & Gás",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect
          x="18"
          y="8"
          width="12"
          height="32"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M14 40h20" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="20" r="4" fill="currentColor" />
        <path d="M24 4v4M24 40v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    descricao:
      "Soluções para plataformas offshore, refinarias, gasodutos e operações de exploração.",
    cases: [
      "Plataformas Offshore",
      "SCADA Remoto",
      "Backup Terrestre",
      "Comunicação Crítica",
    ],
    stats: { plataformas: "30+", offshore: "95%" },
  },
  {
    nome: "Governo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect
          x="8"
          y="20"
          width="32"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M4 20L24 4L44 20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="20"
          y="28"
          width="8"
          height="16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="24" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
    descricao:
      "Infraestrutura de telecomunicações para órgãos governamentais, defesa e segurança pública.",
    cases: [
      "Defesa Nacional",
      "Segurança Pública",
      "Inclusão Digital",
      "Emergências",
    ],
    stats: { orgaos: "100+", cobertura: "100%" },
  },
  {
    nome: "Saúde",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="12" y="20" width="24" height="8" fill="currentColor" />
        <rect x="20" y="12" width="8" height="24" fill="currentColor" />
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    descricao:
      "Telemedicina e conectividade para hospitais e unidades de saúde em áreas remotas.",
    cases: [
      "Telemedicina",
      "Prontuário Eletrônico",
      "Diagnóstico Remoto",
      "UTI Móvel",
    ],
    stats: { unidades: "200+", pacientes: "1M+" },
  },
  {
    nome: "Educação",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M4 20L24 8L44 20L24 32L4 20Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(0,212,255,0.2)"
        />
        <path
          d="M12 24v12c0 4 6 8 12 8s12-4 12-8V24"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M44 20v16" stroke="currentColor" strokeWidth="2" />
        <circle cx="44" cy="38" r="2" fill="currentColor" />
      </svg>
    ),
    descricao:
      "Internet de alta velocidade para escolas, universidades e programas de educação à distância.",
    cases: ["EAD", "Laboratórios", "Bibliotecas Digitais", "Pesquisa"],
    stats: { escolas: "1000+", alunos: "500K+" },
  },
];

const Segmentos = () => {
  return (
    <div className="page-segmentos">
      <div className="page-hero">
        <div className="grid-overlay"></div>
        <div className="scanline"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <span className="pulse-dot"></span>
              MERCADOS
            </span>
            <h1>Segmentos</h1>
            <p>
              Atendemos diversos setores da economia com soluções personalizadas
              de conectividade via satélite.
            </p>
          </div>
        </div>
      </div>

      <section className="segmentos-section">
        <div className="container">
          <div className="section-label">
            <span className="line"></span>
            <span className="label-text">PRINCIPAIS SEGMENTOS</span>
            <span className="line"></span>
          </div>

          <div className="segmentos-grid">
            {segmentos.map((seg, index) => (
              <div key={index} className="segmento-card">
                <div className="seg-icon">{seg.icon}</div>

                <h3 className="seg-nome">{seg.nome}</h3>
                <p className="seg-desc">{seg.descricao}</p>

                <div className="seg-cases">
                  {seg.cases.map((c, i) => (
                    <span key={i} className="case-tag">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                      {c}
                    </span>
                  ))}
                </div>

                <div className="seg-stats">
                  {Object.entries(seg.stats).map(([key, value], i) => (
                    <div key={i} className="stat-box">
                      <span className="stat-value">{value}</span>
                      <span className="stat-key">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segmentos;
