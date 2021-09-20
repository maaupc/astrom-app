import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Inicio from "../pages/Inicio";
import Admin from "../pages/Admin";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Perfil from "../pages/Perfil";
import Licencias from "../pages/Licencias";



const RouterDos = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/perfil" component={Perfil} />
        <Route exact path="/licencias" component={Licencias} />
        <Route component={Error404} />
      </Switch>
      <Footer/>
    </>
  );
};

export default RouterDos;