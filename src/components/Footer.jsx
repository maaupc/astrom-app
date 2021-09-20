import React from 'react'
import "../styles/Footer.css"
import logo from '../assets/logo.png'

const Footer = () => {
    return (

<>
<footer className="main-footer">
               
               <div className="container">
      <div className="row pt-5">
        <div className="col-sm">
        <ul className="list-unstyled-icon">
           <i className="fa fa-facebook fa-2x text-white mx-2" aria-hidden="true"></i>
           <i className="fa fa-twitter fa-2x text-white mx-2" aria-hidden="true"></i>
           <i className="fa fa-instagram fa-2x text-white mx-2" aria-hidden="true"></i>
               </ul>
        </div>
        <div className="col logo">
        <img  src={logo} width="150px" alt="logo footer"/>
        <p className="col-sm">
                 &copy;{new Date().getFullYear()} Todos los derechos reservados.
                 </p>
        </div>
        <div className="col">
        <ul className="list-unstyled">
                      <li>Telefono 42452364</li>
                      <li>Tucuman,Argentina</li>
                      <li>Av Mitre 222</li>
              
                        </ul>
        </div>
      </div>
    </div>
                </footer>  
            </>
    )
} 

    
            
export default Footer

    