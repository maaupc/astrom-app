import React from "react";
import "../index.css";
import HomeCarousel from "../components/HomeCarousel";
import CardsHome from "../components/CardsHome";
// import ClientsHome from "../components/ClientsHome";


const Inicio = () => {
  return (
    <>
      <HomeCarousel />
      <CardsHome />
      {/* <ClientsHome /> */}
      
    </>
  );
};

export default Inicio;
