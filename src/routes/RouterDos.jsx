import React, {useEffect,useState} from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Inicio from "../pages/Inicio";
import Admin from "../pages/Admin";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Perfil from "../pages/Perfil";
import Licencias from "../pages/Licencias";
import Nosotros from "../pages/Nosotros";
import {obtenerEmpleado} from "../helpers/perfil";
const RouterDos = () => {

      const [imagen, setImagen] = useState({
            img:" "
          })
      useEffect(() => {
            getImagen();
      }, []);
    const getImagen=()=>{
      const datos = JSON.parse(localStorage.getItem("auth"));
      obtenerEmpleado(datos.empleado.uid).then((respuesta)=>{
        setImagen({
          img:respuesta.empleado.img
        })
      })
    }  

  return (
    <>
      <Navbar imagen={imagen}/>
      <Switch>
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/perfil" render= {()=> <Perfil getImagen={getImagen}/>} />
        <Route exact path="/licencias" component={Licencias} />
        <Route exact path="/nosotros" component= {Nosotros} />
      </Switch>
      <Footer/>
    </>
  );
};

export default RouterDos;