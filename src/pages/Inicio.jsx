import React from "react";
import "../index.css";
import Navbar from "../components/Navbar";
import HomeCarousel from "../components/HomeCarousel";
import CardsHome from "../components/CardsHome";
import ClientsHome from "../components/ClientsHome";
import SubscribeForm from "../components/SubscribeForm";


const Inicio = () => {
  return (
    <>
      <Navbar />
      <HomeCarousel />
      <CardsHome />
      <ClientsHome />
      <SubscribeForm />
    </>
  );
};

export default Inicio;
