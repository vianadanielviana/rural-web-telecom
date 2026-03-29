import React from "react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: "Internet via Satélite",
      description:
        "Conexão de alta velocidade com cobertura em 100% do território brasileiro. Tecnologia em bandas Ku, C e Ka.",
      status: "ONLINE",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Redes Privativas",
      description:
        "VPN e MPLS corporativo para conectar filiais com máxima segurança e performance.",
      status: "SECURE",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      ),
      title: "IP Fixo Dedicado",
      description:
        "Endereço IP exclusivo para acesso remoto a câmeras, servidores e sistemas críticos.",
      status: "DEDICATED",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      title: "Monitoramento Real-time",
      description:
        "Acompanhe seu consumo e performance da conexão através do nosso portal avançado.",
      status: "LIVE",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
          <path d="M7.8 16.2a6 6 0 0 1 0-8.4" />
          <circle cx="12" cy="12" r="2" />
          <path d="M16.2 7.8a6 6 0 0 1 0 8.4" />
          <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
        </svg>
      ),
      title: "Backhaul",
      description:
        "Distribuição de sinal de alta capacidade para provedores e operadoras regionais.",
      status: "ACTIVE",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "NOC 24/7",
      description:
        "Centro de operações em Belo Horizonte com equipes de Engenharia, NOC e Help Desk.",
      status: "24/7",
    },
  ];

  return (
    <section id="services" className="section-padding services-section">
      <div className="grid-pattern"></div>

      <div className="container">
        <div className="section-header text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="label-line"></span>
            SOLUÇÕES
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            Serviços de <span className="highlight">Alta Tecnologia</span>
          </h2>
          <p className="section-subtitle">
            Soluções customizadas que combinam qualidade, preço e performance
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card tech-card" key={index}>
              <div className="service-status">{service.status}</div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-connector"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
