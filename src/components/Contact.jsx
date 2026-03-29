import { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formState, setFormState] = useState({
    status: "idle", // idle, loading, success, error
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ status: "loading", message: "" });

    try {
      const response = await fetch("https://formspree.io/f/xldqlkeb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({
          status: "success",
          message:
            "Solicitação enviada com sucesso! Entraremos em contato em breve.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      setFormState({
        status: "error",
        message:
          "Erro ao enviar. Tente novamente ou entre em contato por email.",
      });
    }
  };

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="grid-pattern"></div>

      <div className="container">
        <div className="section-header text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="label-line"></span>
            CONTATO
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            Inicie sua <span className="highlight">Conexão</span>
          </h2>
          <p className="section-subtitle">
            Entre em contato para uma solução personalizada
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card tech-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="info-status">COMERCIAL</span>
              </div>
              <a
                href="mailto:comercial@ruralwebtelecom.com.br"
                className="info-link"
              >
                comercial@ruralwebtelecom.com.br
              </a>
            </div>

            <div className="info-card tech-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="info-status online">24/7 ONLINE</span>
              </div>
              <a
                href="mailto:suporte@ruralwebtelecom.com.br"
                className="info-link"
              >
                suporte@ruralwebtelecom.com.br
              </a>
              <span className="info-note">Suporte técnico contínuo</span>
            </div>

            <div className="info-card tech-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="info-status">NOC</span>
              </div>
              <p className="info-text">Teleporto Belo Horizonte</p>
              <span className="info-note">Operação 24/7</span>
            </div>
          </div>

          <div className="contact-form-container tech-card">
            {formState.status === "success" ? (
              <div className="form-success">
                <div className="success-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="success-title">Enviado com Sucesso!</h3>
                <p className="success-message">{formState.message}</p>
                <button
                  className="btn btn-outline"
                  onClick={() => setFormState({ status: "idle", message: "" })}
                >
                  Enviar nova solicitação
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="form-title">Solicitar Conexão</h3>

                {formState.status === "error" && (
                  <div className="form-error">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <span>{formState.message}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState.status === "loading"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="seu@email.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState.status === "loading"}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Telefone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={formState.status === "loading"}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Descreva sua necessidade..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState.status === "loading"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-full ${formState.status === "loading" ? "btn-loading" : ""}`}
                  disabled={formState.status === "loading"}
                >
                  {formState.status === "loading" ? (
                    <>
                      <span className="spinner"></span>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar Solicitação</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
