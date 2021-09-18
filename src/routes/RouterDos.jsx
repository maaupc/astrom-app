import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Inicio from "../pages/Inicio";
import Admin from "../pages/Admin";
import Perfil from "../pages/Perfil";
// import NavBarComponent from "../components/NavBarComponent";


const RouterDos = () => {
  return (
    <>
      {/* <NavBarComponent/>  */}
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/perfil" component={Perfil} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default RouterDos;