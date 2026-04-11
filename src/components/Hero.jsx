import "../styles/Hero.css";

const Hero = () => {
  const features = [
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
      title: "Cobertura Nacional",
      stat: "100%",
      description: "Todo território brasileiro",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Alta Velocidade",
      stat: "100Mb+",
      description: "Conexão ultrarrápida",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ),
      title: "Suporte 24/7",
      stat: "24h",
      description: "Atendimento contínuo",
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
        </svg>
      ),
      title: "IP Fixo Seguro",
      stat: "VPN",
      description: "Conexão dedicada",
    },
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <picture>
          <source srcSet="/hero-bg.webp" type="image/webp" />
          <img
            src="/hero-bg.png"
            alt=""
            className="hero-bg-image"
            loading="eager"
            fetchPriority="high"
            width="1024"
            height="1024"
          />
        </picture>
        <div className="hero-overlay"></div>
        <div className="hero-grid"></div>
        <div className="hero-scanline"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          SISTEMA ATIVO
        </div>

        <h1 className="hero-title">
          Conectividade Via <span className="highlight">Satélite</span>
          <br />
          de Alta Performance
        </h1>

        <p className="hero-subtitle">
          Tecnologia avançada em banda C, Ku e Ka para empresas, agronegócio e
          residências em qualquer localidade do Brasil.
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary btn-lg">
            Solicitar Conexão
          </a>
          <a href="#about" className="btn btn-outline btn-lg">
            Saiba Mais
          </a>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card tech-card" key={index}>
                <div className="feature-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-stat">{feature.stat}</div>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
