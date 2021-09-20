import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { actualizarEmpleado, obtenerEmpleado } from "../helpers/perfil";
import { puestosGet } from "../helpers/puesto";
<<<<<<< HEAD
=======

import "../style/perfilUsuario.css";
import logo2 from "../assets/logo2.png";
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615

import "../styles/perfilUsuario.css";
import logo2 from "../assets/logo2.png";

const Perfil = () => {
  const [update, setUpdate] = useState(false);
  const [perfil, setPerfil] = useState({
    nombre: "",
    apellido: "",
    asociado: "",
    email: "",
<<<<<<< HEAD
    licencia: "",
    img: "",
=======
    licencia:"",
    img:""
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
  });
  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
    console.log(datos);
    obtenerEmpleado(datos.empleado.uid).then((respuesta) => {
<<<<<<< HEAD
      console.log("entro primero por aca");
      if (respuesta.empleado.rol === "ADMIN_ROLE") {
        return alert("El admin no puede cuenta con permisos en esta seccion");
      }
=======
          console.log("entro primero por aca")
          if(respuesta.empleado.rol === "ADMIN_ROLE"){
                return alert("El admin no puede cuenta con permisos en esta seccion")
          }
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
      setPerfil({
        nombre: respuesta.empleado.nombre,
        apellido: respuesta.empleado.apellido,
        asociado: respuesta.empleado.dni,
        email: respuesta.empleado.email,
<<<<<<< HEAD
        licencia: respuesta.empleado.licencia,
        img: respuesta.empleado.img,
=======
        licencia:respuesta.empleado.licencia,
        img:respuesta.empleado.img
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
      });
      cargarPuesto(respuesta.empleado.puesto);
    });

<<<<<<< HEAD
    console.log("pasa x aa");
=======
    console.log("pasa x aa")
    
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, asociado, email } = perfil;
    const datos = JSON.parse(localStorage.getItem("auth"));
    if (nombre && asociado && email) {
      actualizarEmpleado(datos.empleado.uid, perfil).then((respuesta) => {});
    }
    setUpdate(false);
  };

  const handleChange = (e) => {
    if (update) {
      setPerfil({
        ...perfil,
        [e.target.name]: e.target.value,
      });
    }
  };
  const [puesto, setPuesto] = useState({
    nombre: "",
    horarios: "",
    salario: 0,
  });

  const cargarPuesto = (puestoId) => {
    puestosGet().then((respuesta) => {
      if (!respuesta.puestos) {
        return;
      }
      const puestoEncontrado = respuesta.puestos.find((elem) => {
        return elem._id === puestoId;
      });
      if (!puestoEncontrado) {
        return;
      }
      setPuesto({
        nombre: puestoEncontrado.nombre,
        horarios: puestoEncontrado.horarios,
        salario: puestoEncontrado.salario,
      });
    });
  };

  const salarioAnual = (salarioMensual) => {
    return salarioMensual * 12;
  };
  const formatCurrency = function (number) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(number);
  };

  const licenciaEstado = (licen) => {
    console.log(licen);
    if (licen === "true") {
      console.log("hola");
      return "Activa";
    } else {
      console.log("bola");
      return "No Activa";
    }
  };

<<<<<<< HEAD
=======
   const licenciaEstado=(licen)=>{
         console.log(licen)
         if(licen==="true"){
               console.log("hola")
               return ("Activa");
        }
         else{
               console.log("bola")
               return ("No Activa") ;
         }
        
   }
  
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="title">Mi Perfil</h1>
            <hr />
          </div>
        </div>
        <div className="row ">
          <div className="col-lg-4 col-sm-12-p-relative col-md-6 row-principal id=col-primera">
            <div className="row">
              <div className="col ">
                <div className="card w-100 card-P">
                  <div className="card-title">
                    <i
                      className="fa fa-pencil i-pencil"
                      aria-hidden="true"
                      onClick={() => setUpdate(true)}
                    ></i>
                  </div>
                  <div className="card-body card-img">
<<<<<<< HEAD
                    <img
                      src={perfil.img}
                      alt="imgPerfil"
                      className="imgPerfil"
                    />
                    <h2 className="title">
                      {perfil.nombre} {perfil.apellido}
                    </h2>
=======
                    <img src={perfil.img} alt="imgPerfil" className="imgPerfil" />
                    <h2 className="title">{perfil.nombre} {perfil.apellido}</h2>
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
                    {/* <h2>Norali</h2> */}
                    <form onSubmit={handleSubmit}>
                      <div className="form-group mb-2">
                        <strong>ID Asociado</strong>
                        <input
                          type="string"
                          className="form-control"
                          name="asociado"
                          disabled={update ? false : true}
                          value={perfil.asociado}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group mb-2">
                        <strong>Correo</strong>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={perfil.email}
                          disabled={update ? false : true}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="btn btn-save btn-lg btn-block"
                        >
                          Actualizar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col mb-3">
                <div className="card w-100">
                  <div className="card-body card-call">
                    <strong>Contactos de Emergencia</strong>
                    <hr />
                    <i
                      className="fa fa-volume-control-phone "
                      aria-hidden="true"
                      id="i-phone"
                    ></i>
                    <span> Por favor provee tu contacto de emergencia</span>
                    <Link className="nav-link" to="/Error404">
                      <i
                        className="fa fa-plus-circle "
                        aria-hidden="true"
                        id="i-add"
                      >
                        Agregar contacto
                      </i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 col-md-6 ">
            <div className="row">
              <div className="col-sm-12 col-lg-6 col-md-12 mb-3 d-none d-md-block">
                <div className="card">
                  <div className="card-body card-perfil">
                    <h3>Info Personal</h3>
                    <hr className="hr-card" />
                    <i
                      className="fa fa-mobile movile"
                      aria-hidden="true"
                      id="i-icon"
                    >
                      {" "}
                    </i>
                    <span className="span-i">387866282</span>
                    <hr />
                    <i
                      className="fa fa-envelope-o"
                      aria-hidden="true"
                      id="i-icon"
                    >
                      {" "}
                    </i>{" "}
                    <span className="span-i">{perfil.email}</span>
                    <hr />
                    <i
                      className="fa fa-map-marker"
                      aria-hidden="true"
                      id="i-icon"
                    >
                      {" "}
                    </i>{" "}
                    <span className="span-i">Av Spring 745</span>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-body card-perfil">
                    <h3>Info Salarial</h3>
                    <hr className="hr-card" />
                    <strong>Anual</strong>
                    <br />
                    <div className="alert alert-secondary" role="alert">
                      {formatCurrency(salarioAnual(puesto.salario))}
                    </div>
                    <strong>Mensual</strong>
                    <br />
                    <div className="alert alert-secondary" role="alert">
                      {formatCurrency(puesto.salario)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 row-ultimas">
              <div className="col-sm-12 col-lg-6 mb-3 ">
                <div className="card">
                  <div className="card-body card-perfil">
                    <h3>Info Laboral </h3>
                    <hr />
                    <strong>Puesto: </strong>
                    <span>{puesto.nombre}</span>
                    <hr />
                    <strong>Licencia:</strong>
                    <span> {licenciaEstado(perfil.licencia)}</span>
                    <hr />
                    <strong>Horarios:</strong>
                    <span> {puesto.horarios}</span>
                    <hr />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-body card-perfil">
                    <h3>Info de Astrom </h3>
                    <hr />
                    <p>
                      {" "}
                      <img
                        src={logo2}
                        alt="logo-astrom"
                        className="img-logo"
<<<<<<< HEAD
                      />{" "}
                      Nuestro marco estratégico integra la Responsabilidad
                      Social Corporativa y se fundamenta en cuatro pilares:
                      clientes, empleados, proveedores y entorno social.{" "}
                      <Link className="nav-link" to="/Error404">
                        <i
                          className="fa fa-arrow-circle-right"
                          aria-hidden="true"
                          id="i-verMas"
                        >
                          Ver mas
                        </i>
                      </Link>
=======
                      /> {" "}
                      Trabajamos con el objetivo de ayudar a nuestros empleados y clientes en una mejor hambiente.
                      Nuestro marco estratégico integra la Responsabilidad Social Corporativa y se fundamenta en cuatro pilares: clientes, empleados, proveedores y entorno social. <Link className="nav-link" to="/Error404"><i className="fa fa-arrow-circle-right" aria-hidden="true" id="i-verMas">Ver mas</i></Link> 
>>>>>>> adcf421de34a7fe4e2a58eb9a2d6abdf2b258615
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Perfil;
