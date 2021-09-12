import React from "react";
import imag from "../assets/imag.jpeg"
import "../style/perfilUsuario.css"
const CardPerfil=()=>{
      
      return(
       <>
      <div className="card w-100 card-P">
            <div className="card-title">
            <i className="fa fa-pencil i-pencil" aria-hidden="true"></i>
            </div>
      <div className="card-body card-img">     
       <img src={imag} alt="imgPerfil" className="imgPerfil"/>   
       
      <h2>Nombre Apellido</h2>
       <strong>ID Asociado:</strong>
       <hr />
       <strong>Reporta a:</strong>
       <hr />
       <strong>ID Posicion:</strong>
       <hr />
      </div>
      
      </div>
      </>
      )
     

}
export default CardPerfil;