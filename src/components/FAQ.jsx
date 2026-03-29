import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "O serviço está disponível na minha localização?",
      answer:
        "Sim! Nossa cobertura alcança 100% do território brasileiro através de tecnologia via satélite. Conectamos desde grandes centros até as áreas mais remotas do país.",
    },
    {
      question: "Qual a velocidade da conexão?",
      answer:
        "Oferecemos planos a partir de 10Mbps até 100Mbps+, dependendo da tecnologia (Banda C, Ku ou Ka). Nossa equipe dimensiona a melhor solução para sua necessidade.",
    },
    {
      question: "É possível obter IP Fixo?",
      answer:
        "Sim! Oferecemos planos com IP Fixo dedicado, ideal para acesso remoto a câmeras, servidores, sistemas ERP e aplicações que necessitam de endereço fixo.",
    },
    {
      question: "Como funciona a instalação?",
      answer:
        "A instalação é realizada por profissionais certificados. Inclui a antena parabólica, modem e toda configuração. O prazo varia conforme sua localização.",
    },
    {
      question: "Qual o suporte oferecido?",
      answer:
        "Nosso NOC opera 24/7 com equipes de Engenharia, Help Desk e Call Center. Monitoramos proativamente sua conexão para garantir máxima disponibilidade.",
    },
  ];

  return (
    <section id="faq" className="section-padding faq-section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label" style={{ justifyContent: "center" }}>
            <span className="label-line"></span>
            FAQ
            <span className="label-line"></span>
          </div>
          <h2 className="section-title">
            Perguntas <span className="highlight">Frequentes</span>
          </h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item tech-card ${openIndex === index ? "active" : ""}`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="question-number">0{index + 1}</span>
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
