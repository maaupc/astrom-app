import React from "react";
import CardPerfil from "../components/CardPerfil";
import "../style/perfilUsuario.css"
import logo2 from "../assets/logo2.png"

const Perfil=()=>{
    return(
          <>
          <div className="container">
          <div className="row">
                <div className="col">
                      <h1>Mi Perfil</h1>
                      <hr />
                </div>
          </div>
          <div className="row m">
          <div className="col-lg-4 col-sm-12 col-md-6">
          <div className="row">
                <div className="col">
                <CardPerfil />
                </div>
                     
             </div>
             <div className="row mt-3">
                   <div className="col">
                   <div className="card w-100">
             <div className="card-body card-call">
                <strong>Contactos de Emergencia</strong> 
                <hr />
                <i className="fa fa-volume-control-phone " aria-hidden="true" id="i-phone"></i><span> Por favor provee tu contacto de emergencia</span>

                <i className="fa fa-plus-circle " aria-hidden="true" id="i-add">Agregar contacto</i>
           </div>
            </div>
                   </div>
             
             </div>
                 </div>
                 <div className="col-lg-8 col-sm-12 col-md-6">
                   <div className="row">
                         <div className="col-sm-12 col-lg-6 col-md-12">
                         <div className="card">
                         <div className="card-body card-perfil">
                           <h3>Info Personal</h3>
                           <hr />
                           <i className="fa fa-mobile movile" aria-hidden="true" id="i-icon"> </i> 
                           <span className="span-i">387866282</span> 
                           <br /> <br />
                           <i className="fa fa-envelope-o" aria-hidden="true" id="i-icon"> </i> <span className="span-i">layla@gmail.com</span>
                           <br />
                           <br />
                           <i className="fa fa-map-marker" aria-hidden="true" id="i-icon">  </i> <span className="span-i">Av Spring 745</span>
                        </div>
                        </div>
                         </div>
                         <div className="col-sm-12 col-lg-6 col-md-12">
                         <div className="card">
                         <div className="card-body card-perfil">
                         <h3>Info Salarial</h3>
                         <hr />
                         <strong>Anual</strong>
                         <br />
                         <div className="alert alert-secondary" role="alert">
                           XXXXX
                          </div>
                          <strong>Mensual</strong>
                          <br />
                          <div className="alert alert-secondary" role="alert">
                           XXXXXX
                         </div>
                         </div>
                         </div>
                         </div>
                   </div>
             <div className="row mt-3 ">
                   <div className="col-sm-12 col-lg-6 ">
                   <div className="card">
                   <div className="card-body card-perfil">
                    <h3>Info Laboral </h3>
                    <hr />
                    <strong>Puesto:</strong>
                    <hr />
                    <strong>Licencia:</strong>
                    <hr />
                    <strong>Horarios</strong>
                     <hr />
                  </div>
                  </div>
                   </div>
                   <div className="col-sm-12 col-lg-6 col-md-12">
                   <div className="card">
                   <div className="card-body card-perfil">
                         <h3>Info de Astrom </h3>
                         <hr />
                         <p> <img src={logo2} alt="logo-astrom" className="img-logo" />  Lorem ipsum dolor sit amet consectetur, adipisicing elithdhsirgjtt .Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ducimus natus distinctio ad, ab tempora.</p>
                          <i className="fa fa-map-marker" aria-hidden="true" id="i-location"></i><span> Lorem, ipsum.</span>
                   </div>
                   </div>
                   </div>
             </div>
                 </div>
          </div>
          </div>
          
          </>
    )  
}
export default Perfil;