import React from "react";
import "../styles/error.css";
import logo from "../assets/upmy.svg";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <div className="container-error">
        <div className="row">
          <div className="col col-md-6 primary">
            <div className="div1-error">
              <img src={logo} alt="logoError" />
            </div>
          </div>
          <div className="col col-md-6  col-sm-12 text-align-center">
            <div className="div2-error">
              <p className="p1-error">Wops! Pagina no encontrada ...</p>
              <p className="p2-error"> 404 </p>

              <p className="p3-error">
                Lo sentimos, la pagina solicitada no fue encontrada 🤧
              </p>
              <div className="div4-error">
                <div className="icono-error">
                  <i
                    className="fa fa-instagram"
                    id="ig-error"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icono-error">
                  <i
                    className="fa fa-linkedin"
                    id="linked-error"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icono-error">
                  <i
                    className="fa fa-github"
                    id="git-error"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="icono-error">
                  <i
                    className="fa fa-facebook"
                    id="fb-error"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              <div className="div3-error">
                <button className="btn btn-error">
                  {" "}
                  <Link className="nav-link p-0" to="/inicio">
                    {" "}
                    IR A HOME{" "}
                    <i
                      className="fa fa-arrow-right"
                      aria-hidden="true"
                    ></i>{" "}
                  </Link>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
