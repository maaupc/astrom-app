import React from "react";
import './subscribeForm.css'

const SubscribeForm = () => {
  return (
    <>
    <h1 className="header-subscribe">Nuestras noticias. Nuestras opiniones.</h1>
      <h2 className="subscribe-text">Suscríbete a nuestro newsletter. Es la fuente principal de información sobre Organizaciones Aumentadas para lectores de todo el mundo.</h2>
    <div className="parent-wrapper">
      <span className="close-btn glyphicon glyphicon-remove"></span>
      <div className="subscribe-wrapper">
        <h4>SUSCRÍBETE A NUESTRAS NOVEDADES</h4>
        <input
          type="email"
          name="email"
          className="subscribe-input"
          placeholder="Ingresa tu e-mail"
        />
        <div className="submit-btn">ENVIAR</div>
      </div>
    </div>
    </>
  );
};

export default SubscribeForm;
