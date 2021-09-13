import React from 'react'
import '../styles/Login.css'
import logo from '../assets/logo.png'

const Login = () => {
  return (
    <>
       <div className="container-fluid ">
        <div id="overlay" class="d-flex justify-content-center align-items-center font-weight-bold">
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 mt-4 login-form-1">
                    </div>
                    <div className="col-md-5 login-form-2" id="login-form-2">
                        <h3>Iniciar Sesion</h3>
                        <div className="container container-logo col-sm-7">
                        <img id="imagen-logo" src={logo} alt="" height="100px"  />
                        </div>
                        <form>
                            <div>
                                <div className="form-group">
                                    <input type="text" class="form-control" name="email" id="userEmail" placeholder="Usuario" onchange="handleChange(event)"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" class="form-control" name="contrasena" id="userContrasena" placeholder="Contraseña" onchange="handleChange(event)"/>
                                </div>
                                <div className="form-group">
                                    <button class="btn float-right btnSubmit mt-1" id="btnSubmit" type="submit">Ingresar</button>
                                </div>
                                
                            </div>
                            
                            <div className="overlay">
                                <div class="volver">
                                    <h1 className="text-inicio">Volver al inicio</h1>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
