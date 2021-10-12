import React from "react";
import "./cardsHome.css";
import CardItemHome from "./CardItemHome";

const CardsHome = () => {
  return (
    <div className="cards">
      <h1>Lo que está pasando en Aström</h1>
      <p>Las últimas novedades de Aström. Y porqué es relevante para ti.</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItemHome
              src="https://i.postimg.cc/FsWkK4v3/pexels-carrie-johnson-1202849.jpg"
              text="Permita que su empresa crezca a la velocidad del comercio moderno."
              label="Infraestructura"
            />
            <CardItemHome
              src="https://i.postimg.cc/9MLLkGB7/office-team.jpg"
              text="Seguimos construyendo nuestra empresa en torno a grandes personas. Echa un vistazo a las posiciones disponibles."
              label="Trabaja con Nosotros"
            />
            <CardItemHome
              src="https://i.postimg.cc/6QLjrs2z/tec-sir.jpg"
              text="Aplicamos el poder de la IA a nuestros productos, que a la vez se benefician con las tecnologías líderes emergentes."
              label="Inteligencia Artificial"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
