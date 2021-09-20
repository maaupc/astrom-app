import React from 'react'
import '../styles/NavBarComponent.css'
// import logo from '../assets/logo.png'

export const NavBarComponent = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a clasNames="navbar-brand" href="#">
      <img src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RECURSOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PERFIL</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACTO</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="Avatar" src="http://www.w3bai.com/w3css/img_avatar3.png" alt="" width="50" height="40"/>
          </a>
          <ul clasName="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>


        </>
    )
};

export default NavBarComponent;