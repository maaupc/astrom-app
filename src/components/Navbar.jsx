import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import {obtenerEmpleado} from '../helpers/perfil'
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = ({imagen}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const {empleado}= JSON.parse(localStorage.getItem("auth"));

  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={logo} alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/inicio" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/licencias" className="nav-links" onClick={closeMobileMenu}>
                Recursos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className="nav-links" onClick={closeMobileMenu}>
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="nav-links" onClick={closeMobileMenu}>
                Acerca de Aström
              </Link>
            </li>
         
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toogle" id="dropdown-basic" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={imagen.img} alt="avatar" />
                <i className="fa fa-chevron-circle-down"></i>
              </Link>
              <ul className="dropdown-menu">
                {empleado?.rol === "ADMIN_ROLE" && (
                <li>
                  <Link className="dropdown-item" to="/admin" onClick={closeMobileMenu}>
                    Admin
                  </Link>
                </li>
                )}
                <li>
                  <Link className="dropdown-item"to="/" onClick={logout}>
                    <i className="fa fa-sign-out" aria-hidden="true" /> Salir
                  </Link>
                </li>
              </ul>
              </li>
            </ul>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

