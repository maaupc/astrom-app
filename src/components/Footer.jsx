import React from 'react'
import "../styles/Footer.css"
import logo from '../assets/logo.png'

const Footer = () => {
    return (
<>
<footer className="main-footer">
      <div className="container">
      <div className="row pt-5">
        <div className="col col-content">
              <span>Servicios</span>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, corporis!</p>
        <ul className="list-unstyled-icon">
           <i className="fa fa-facebook fa-2x text-white mx-2" aria-hidden="true"></i>
           <i className="fa fa-twitter fa-2x text-white mx-2" aria-hidden="true"></i>
           <i className="fa fa-instagram fa-2x text-white mx-2" aria-hidden="true"></i>
           <i class="fa fa-linkedin" aria-hidden="true"></i> 
       </ul>
        </div>
        <div className="col col-content">
        <img  src={logo} width="100px" alt="logo footer" id="logo-astrom"/>
        <p className="col-sm">
                 &copy;{new Date().getFullYear()} Todos los derechos reservados.
                 </p>
                 <p>Lorem ipsum dolor sit amet.
                 </p>
     
        </div>
      
       <div className="col col-content">
       <span>Contactanos</span>
        <ul className="secundary-unstyled">
            <li> <i class="fa fa-phone icon" aria-hidden="true"> Telefono 42452364</i></li>
            <li><i class="fa fa-map-marker icon" aria-hidden="true"> Tucuman,Argentina</i></li>
            <li> <i class="fa fa-thumb-tack icon" aria-hidden="true"> Av Mitre 222</i></li>
            </ul>
       </div> 
      </div>
    </div>
 </footer>  
            </>
    )
} 

    
            
export default Footer

    