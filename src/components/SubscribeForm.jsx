import emailjs from 'emailjs-com';
import React from 'react';
import '../styles/subscribeForm.css'

const SubscribeForm = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1znwdyd', 'template_oie07wo', e.target, 'user_XzDFqnJxgOVFbP3yhfvIQ')
      .then((result) => {
          console.log(result.text);
          alert('Suscripción exitosa!')
      }, (error) => {
          console.log(error.text);
          alert('Por favor ingrese un correo válido')
      });
      e.target.reset()
  };

  return (
    <>
    <form onSubmit={sendEmail}>
    <h1 className="header-subscribe">Nuestras noticias. Nuestras opiniones.</h1>
      <h2 className="subscribe-text">Suscríbete a nuestro newsletter. Es la fuente principal de información sobre Organizaciones Aumentadas para lectores de todo el mundo.</h2>
      <div className="parent-wrapper">
      <div className="subscribe-wrapper">
        <h4>SUSCRÍBETE A NUESTRAS NOVEDADES</h4>
        <input
          type="email"
          name="user_email"
          placeholder="Ingresa tu e-mail"
        />
        <div className="submit-btn">
         <input type="submit"/>
        </div>
      </div>
      </div>
    </form>
    </>
  );
};

export default SubscribeForm;
