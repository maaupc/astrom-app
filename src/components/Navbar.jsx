import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./navbar.css";
import { Dropdown } from "react-bootstrap";


import logo from "../assets/logo.png";
import avatar from "../assets/Avatar.jpg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  // const [empleado, setEmpleado] = useState(null);

  // useEffect(() => {
  //   const datos = JSON.parse(localStorage.getItem("auth"));
  //   setEmpleado(datos.empleado);
  // }, []);

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
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Recursos
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className="nav-links" onClick={closeMobileMenu}>
                Perfil
              </Link>
            </li>

            <li>
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Nosotros
              </Link>
            </li>
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img src={avatar} alt="avatar" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                    Mi Perfil
                  </Link>
                </Dropdown.Item>
                {/* {empleado?.rol === "ADMIN_ROLE" && (
                <Dropdown.Item>
                  <Link className="nav-link" to="/" onClick={closeMobileMenu}>
                    Admin
                  </Link>
                </Dropdown.Item>
                )} */}
                <Dropdown.Divider />
                <Dropdown.Item>
                  <Link className="nav-link" to="/" onClick={logout}>
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

