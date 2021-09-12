import React from 'react'
import '../styles/Login.css'

const Login = () => {
  return (
    <>
       <div id="bgFullWidth" class="container-fluid container-full-width">
        <div id="overlay" class="d-flex justify-content-center align-items-center font-weight-bold">
            <div class="container login-container">
                <div class="row">
                    <div class="col-md-6 mt-4 login-form-1">
                    </div>
                    <div class="col-md-5 login-form-2">
                        <h3>Iniciar Sesion</h3>
                        <form>
                            <div>
                                <div class="form-group">
                                    <input type="text" class="form-control" name="email" id="userEmail" placeholder="Usuario" onchange="handleChange(event)"/>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" name="contrasena" id="userContrasena" placeholder="Contraseña" onchange="handleChange(event)"/>
                                </div>
                                <div class="form-group">
                                    <button class="btn float-right btnSubmit mt-1" id="btnSubmit" type="submit">Ingresar</button>
                                </div>
                                
                            </div>
                            
                            <div class="overlay">
                                <div class="registrate">
                              
                                   
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
