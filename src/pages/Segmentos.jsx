import React from "react";
import "../styles/Segmentos.css";

const segmentos = [
  {
    nome: "Governo, Corporações e Varejo",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="20" width="32" height="24" stroke="currentColor" strokeWidth="2" />
        <path d="M4 20L24 4L44 20" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="20" y="28" width="8" height="16" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
    descricao:
      "Infraestrutura de telecomunicações para órgãos governamentais, grandes corporações e redes de varejo em todo o Brasil.",
    cases: ["Defesa Nacional", "Segurança Pública", "Redes Corporativas", "Varejo Conectado"],
    stats: { clientes: "200+", cobertura: "100%" },
  },
  {
    nome: "Operadoras Telecom & ISPs",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <path d="M24 4v8M24 36v8M4 24h8M36 24h8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    descricao:
      "Backhaul e soluções de transporte para operadoras de telecomunicações e provedores de internet regionais.",
    cases: ["Backhaul Satelital", "Expansão de Rede", "Redundância", "Última Milha"],
    stats: { operadoras: "50+", uptime: "99.9%" },
  },
  {
    nome: "Mercado Óleo & Gás",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="18" y="8" width="12" height="32" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 40h20" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="20" r="4" fill="currentColor" />
        <path d="M24 4v4M24 40v4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    descricao:
      "Soluções para plataformas offshore, refinarias, gasodutos e operações de exploração em locais remotos.",
    cases: ["Plataformas Offshore", "SCADA Remoto", "Backup Terrestre", "Comunicação Crítica"],
    stats: { plataformas: "30+", offshore: "95%" },
  },
  {
    nome: "Empresas de Energia Elétrica",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M28 4L16 24h8l-4 20L36 24h-8l4-20z" stroke="currentColor" strokeWidth="2" fill="rgba(0,212,255,0.2)" />
      </svg>
    ),
    descricao:
      "Conectividade para concessionárias de energia, monitoramento de subestações e linhas de transmissão remotas.",
    cases: ["Subestações Remotas", "Smart Grid", "Teleproteção", "SCADA"],
    stats: { subestacoes: "100+", cobertura: "Nacional" },
  },
  {
    nome: "Cooperativas – Agro Business",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 4C12 10 8 24 8 32c0 6 4 12 16 12s16-6 16-12c0-8-4-22-16-28z" stroke="currentColor" strokeWidth="2" />
        <path d="M24 12v32" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20c-4 0-8 4-8 8" stroke="currentColor" strokeWidth="2" />
        <path d="M24 20c4 0 8 4 8 8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    descricao:
      "Conectividade para cooperativas agrícolas, agricultura de precisão, monitoramento de safras e gestão de frotas.",
    cases: ["Agricultura de Precisão", "IoT Agrícola", "Monitoramento Climático", "Gestão de Frotas"],
    stats: { cooperativas: "150+", hectares: "2M+" },
  },
  {
    nome: "Mercado Rural",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M4 36h40M8 36V20l16-12 16 12v16" stroke="currentColor" strokeWidth="2" fill="none" />
        <rect x="18" y="24" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    descricao:
      "Internet via satélite para propriedades rurais, comunidades isoladas e áreas sem cobertura terrestre.",
    cases: ["Internet Residencial", "Fazendas", "Comunidades Remotas", "Inclusão Digital"],
    stats: { propriedades: "500+", estados: "27" },
  },
  {
    nome: "SOHOs - Small Office Home Office",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="8" y="12" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M16 34v6M32 34v6M12 40h24" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="23" r="4" fill="currentColor" />
      </svg>
    ),
    descricao:
      "Soluções de conectividade para pequenos escritórios e home offices que necessitam de internet confiável.",
    cases: ["Home Office", "Escritório Remoto", "Videoconferência", "Cloud Access"],
    stats: { usuarios: "300+", disponibilidade: "99.5%" },
  },
  {
    nome: "PME - Pequenas e Médias Empresas",
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="6" y="16" width="36" height="28" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="4" width="20" height="12" stroke="currentColor" strokeWidth="2" />
        <rect x="14" y="24" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
        <rect x="26" y="24" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    descricao:
      "Planos flexíveis de internet via satélite para pequenas e médias empresas em qualquer localidade do Brasil.",
    cases: ["ERP na Nuvem", "VoIP", "VPN Corporativa", "Backup Internet"],
    stats: { empresas: "400+", satisfacao: "98%" },
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
