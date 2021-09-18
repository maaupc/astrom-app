import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
import CardsHome from "../components/CardsHome";
// import ClientsHome from "../components/ClientsHome";


const Inicio = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <CardsHome />
      {/* <ClientsHome /> */}
      
    </>
  );
};

export default Inicio;
