import React from "react";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "5531999999999";
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da RuralWeb Telecom.",
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contato via WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.742 3.052 9.376L1.056 31.2l6.012-1.932A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.312 22.594c-.39 1.1-1.932 2.014-3.148 2.28-.832.178-1.916.32-5.568-1.196-4.674-1.938-7.686-6.676-7.922-6.986-.226-.31-1.9-2.53-1.9-4.826s1.202-3.424 1.63-3.892c.39-.426 1.024-.624 1.628-.624.196 0 .372.01.532.018.428.018.642.044.924.716.354.842 1.216 2.96 1.322 3.176.108.218.218.51.068.81-.14.31-.264.448-.48.698-.218.248-.426.44-.642.71-.198.234-.42.486-.178.916.242.428 1.074 1.77 2.306 2.868 1.586 1.414 2.922 1.852 3.336 2.056.314.154.688.132.938-.132.318-.338.71-.896 1.108-1.448.284-.394.642-.444.99-.298.354.14 2.24 1.056 2.624 1.25.39.194.648.29.742.452.094.164.094.924-.296 2.024z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
