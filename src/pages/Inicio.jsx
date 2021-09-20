import React from "react";
import "../index.css";
import HomeCarousel from "../components/HomeCarousel";
import CardsHome from "../components/CardsHome";
import ClientsHome from "../components/ClientsHome";
import SubscribeForm from "../components/SubscribeForm";


const Inicio = () => {
  return (
    <>
      <HomeCarousel />
      <CardsHome />
      <ClientsHome />
      <SubscribeForm />
    </>
  );
};

export default Inicio;
