import React, { useState, useEffect, useRef } from "react";
import "../styles/About.css";

const About = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 20, suffix: "+", label: "Anos de Operação" },
    { number: 100, suffix: "%", label: "Cobertura Nacional" },
    { number: 500, suffix: "+", label: "Clientes Ativos" },
    { number: 24, suffix: "/7", label: "Suporte Técnico" },
  ];

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!countersStarted) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [countersStarted, target]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  return (
    <section
      id="about"
      className="section-padding about-section"
      ref={sectionRef}
    >
      <div className="grid-pattern"></div>

      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-label">
              <span className="label-line"></span>
              SOBRE NÓS
            </div>

            <h2 className="section-title">
              Tecnologia de Ponta em
              <br />
              <span className="highlight">Telecomunicações</span>
            </h2>

            <p className="about-text">
              Com mais de <strong>20 anos de experiência</strong>, somos
              especializados em soluções Via Satélite: Redes Privativas,
              Backhaul e Acesso Internet para clientes residenciais,
              corporativos e governamentais.
            </p>

            <p className="about-text">
              Operamos com tecnologia em <strong>Banda C, Ku e Ka</strong>,
              cobrindo todo o território nacional. Nosso Teleporto em Belo
              Horizonte funciona 24/7 com equipes próprias de Engenharia, NOC e
              Help Desk.
            </p>

            <div className="tech-stack">
              <span className="tech-tag">Banda C</span>
              <span className="tech-tag">Banda Ku</span>
              <span className="tech-tag">Banda Ka</span>
              <span className="tech-tag">SDWAN</span>
              <span className="tech-tag">Multi-Órbita</span>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div className="stat-card tech-card" key={index}>
                  <div className="stat-number">
                    <Counter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-indicator"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
