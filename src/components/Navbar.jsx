
import React from "react";
import { useState, useEffect } from "react";
import "./navbar.css";
import { Dropdown } from "react-bootstrap";
import { obtenerEmpleado } from "../helpers/perfil";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logo.png";


const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  
  const [imagen,setImagen] = useState({
      img:""
  })
  useEffect(() => {
      const datos = JSON.parse(localStorage.getItem("auth"));
      obtenerEmpleado(datos.empleado.uid).then((respuesta)=>{
            setImagen({
                  img:respuesta.empleado.img
            })
      })
  }, [])
     
  

   const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
    setEmpleado(datos.empleado);
  }, []);

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
              <Link to="/error404" className="nav-links" onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img src={imagen.img} alt="avatar" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className="nav-link" to="/perfil" onClick={closeMobileMenu}>
                    Mi Perfil
                  </Link>
                </Dropdown.Item>
                {empleado?.rol === "ADMIN_ROLE" && (
                <Dropdown.Item>
                  <Link className="nav-link" to="/admin" onClick={closeMobileMenu}>
                    Admin
                  </Link>
                </Dropdown.Item>
                )}
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link className="nav-link" to="/login" onClick={logout}>
                    <i className="fa fa-sign-out" aria-hidden="true" /> Salir
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

