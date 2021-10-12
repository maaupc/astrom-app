import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import logo from "../assets/logo.png";
import Swal from "sweetalert2";

import { Link, useHistory } from "react-router-dom";
import { postAuth } from "../helpers/autentication";

const Login = () => {
  const Alertsucces = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Inicio de sesion exitoso!",
      showConfirmButton: false,
      timer: 900,
    });
  };

  const Alerterror = () => {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Inicio de sesion exitoso!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const history = useHistory();

  const [formValue, setFormValue] = useState({
    dni: "",
    password: "",
  });

  const handleChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { dni, password } = formValue;

    if (dni && password) {
      postAuth(formValue).then((respuesta) => {
        setLogin(respuesta);
      });
    }
  };

  const [login, setLogin] = useState({});

  useEffect(() => {
    if (login.token) {
      Alertsucces();
      localStorage.setItem("auth", JSON.stringify(login));
      setTimeout(() => {
        history.push("/Inicio");
      }, 1000);
    }
  }, [login, history]);

  return (
    <>
      <div className="container-login-page">
        <div id="overlay" className=" font-weight-bold">
          <div className="container login-container">
            <div className="row" id="row-padre">
              <div className="col-md-6 col-lg-8 col-sm-3 mt-4 login-form-1"></div>
              <div
                className="col-md-6 col-lg-4 col-sm-9 login-form-2"
                id="login-form-2"
              >
                <div className="container container-logo col-sm-7">
                  <img id="imagen-logo" src={logo} alt="logo" />
                  <br />
                  <h4>INICIAR SESIÓN</h4>
                </div>
                <form onSubmit={handleSubmit}>
                  <div>
                    <div className="form-group">
                      <input
                        id="login_input-dni"
                        type="text"
                        className="form-control"
                        name="dni"
                        placeholder="DNI"
                        required
                        minLength="8"
                        maxLength="8"
                        size="10"
                        value={formValue.dni}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="login_input-pass"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Contraseña"
                        value={formValue.password}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        className="btn float-right btnSubmit mt-1"
                        id="btnSubmit"
                        type="submit"
                      >
                        Ingresar
                      </button>
                    </div>
                  </div>

                  <div className="overlay">
                    <div className="volver">
                      <Link to="/error404" className=" nav-link text-inicio">
                        ¿Olvidó su contraseña?
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
