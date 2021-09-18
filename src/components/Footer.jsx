import React from 'react'
import "../styles/Footer.css"
import logo from '../assets/logo.png'

const Footer = () => {
    return (

<div className="main-footer">
 <div className="container">
   <div className="row">
      {/*Columna1 */}
     <div className="col">
       
           <ul className="list-unstyled-icon">
       <i class="fa fa-facebook fa-2x text-white mx-2" aria-hidden="true"></i>
       <i class="fa fa-twitter fa-2x text-white mx-2" aria-hidden="true"></i>
       <i class="fa fa-instagram fa-2x text-white mx-2" aria-hidden="true"></i>
           </ul>
     </div>
     {/*Columna2 */}
      <div className="col-logo">
            <ul className="list-unstyled">
        
            <img  src={logo} width="100px" alt="logo footer"/>
            
      </ul>
      </div>
      </div>
      {/*Columna 3*/}
      <div className="col">
                    <ul className="list-unstyled">
                  <li>Telefono 42452364</li>
                  <li>Tucuman,Argentina</li>
                  <li>Av Mitre 222</li>
          
                    </ul>
          </div>  
     <div className="row">
             <p className="col-sm">
             &copy;{new Date().getFullYear()} Todos los derechos reservados.
             </p>
     </div>
   </div>
   </div>
    )
} 

    
            
export default Footer

    