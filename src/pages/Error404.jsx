import React from 'react'
import "../style/error.css"
import "animate.css"

const Error404 = () => {

      return (
            <>
            <div className="container-fluid container-error" >
            
                  <div className="row ">
                        <div className="col col-md-6">
                              <div className="div1-error">
                                   <img src="https://i.postimg.cc/T16bT0bF/Whats-App-Image-2021-10-03-at-23-34-22.jpg" alt="" />
                              </div>
                        </div>
                        <div className="col col-md-6  text-align-center">
                              <div className="div2-error">
                              <p className="p1-error">Wooops! Pagina no encontrada</p>
                              <p className="p2-error">404</p>
                              <p className="p3-error">
                                    Lo sentimos, pero la pagina solicitada no fue encontrada
                              </p>
                              <div className="div3-error">
                               <button className="btn btn-error">Volver</button>
                              </div>
                            
                              </div>      
                        </div>
                       
                  </div>     
                
            </div>
               
            </>
      )
}

export default Error404;