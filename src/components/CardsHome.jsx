import React from "react";
import './cardsHome.css';
import CardItemHome from "./CardItemHome";



const CardsHome = () => {
  return (
    <div className="cards">
      <h1>Lorem ipsum dolor sit amet elit.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
              <CardItemHome 
              src="https://i.postimg.cc/RhHBywPh/Login-Bg.jpg"
              text = "Lorem ipsum dolor sit amet.Corporis hic incidunt eveniet voluptate exercitationem libero"
              label="Infraestructura"
              />
              <CardItemHome 
              src="https://i.postimg.cc/X7Bq6CZw/Card1-Home.jpg"
              text = "Lorem ipsum dolor sit amet.Corporis hic incidunt eveniet voluptate exercitationem libero"
              label="Trabaja con Nosotros"
              />
              <CardItemHome 
              src="https://i.postimg.cc/pXjW6M7C/pexels-mikhail-nilov-7988756.jpg"
              text = "Lorem ipsum dolor sit amet.Corporis hic incidunt eveniet voluptate exercitationem libero"
              label="Inteligencia Artificial"
              />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardsHome;
