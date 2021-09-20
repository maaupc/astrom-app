import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../styles/admin.css";

import { licenciasGet } from '../helpers/licencias'
import ModalLicencia from './modals/ModalLicencia'


const LicenciasTable = () => {
    const user = JSON.parse(localStorage.getItem("auth"))

    const [licencias, setLicencias] = useState({
        datos: [],
        loading: true
    })

    const [show, setShow] = useState(false)
    const [actualizar, setActualizar] = useState("")

    
    useEffect(() => {
        licenciasGet().then((respuesta)=>{
            setLicencias({
                datos: respuesta.licencias,
                loading: false
            })
        })

    }, [])

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const licenciasUsuario = licencias.datos.filter((licencia)=>{
        return licencia.empleado.uid === user.empleado.uid
    })


    return (
        <>
            <div className="header-licencias">
            <h1>Licencias</h1>
            </div>
            <button className="btn btn-warning"
            onClick={()=>{handleShow(); setActualizar("")}}
            hidden={user.empleado.rol==="ADMIN_ROLE"? false : true} >
            Cargar Licencia
            </button>

            {licencias.loading ? (
                <div className="alert alert-success text-center" role="alert">
                    Cargando...
                </div>
            ) : (

                <div>

            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>DNI</th>
                        <th>EMPLEADO</th>
                        <th>FECHA</th>
                        <th>ESTADO</th>
                        <th>LICENCIA</th>
                    </tr>
                </thead>
                {user.empleado.rol==="ADMIN_ROLE"
                ? 
                <tbody>
                        {licencias.datos.map((licencia)=>(
                            <tr key={licencia._id}>
                                <th>{licencia.empleado.dni}</th>
                                <th>{licencia.empleado.apellido}, {licencia.empleado.nombre}</th>
                                <td>{licencia.fecha}</td>
                                <td>{licencia.activa? "VIGENTE" : "NO VIGENTE"}</td>
                                <th>
                                    <button className="btn btn-succes" onClick={()=>{handleShow(); setActualizar(licencia._id)}}>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                    </button>
                                </th>
                                
                                </tr>
                            ))}
                </tbody>
                :
                <tbody>
                    {licenciasUsuario.map((licencia)=>(
                        <tr key={licencia._id}>
                            <th>{licencia.empleado.dni}</th>
                            <th>{licencia.empleado.apellido}, {licencia.empleado.nombre}</th>
                            <td>{licencia.fecha}</td>
                            <td>{licencia.activa? "VIGENTE" : "NO VIGENTE"}</td>
                            <th>
                             <button className="btn btn-succes" onClick={()=>{handleShow(); setActualizar(licencia._id)}}>
                                 <i className="fa fa-eye" aria-hidden="true"></i>
                             </button>
                            </th>
                
                        </tr>
                    ))}
                 </tbody>
                }

            </table>
            <div className="d-flex justify-content-center">
            <ModalLicencia show={show} handleClose={handleClose} actualizar={actualizar} user={user}/>
          </div>

          </div>

            )}



            
        </>
        
    )
}

export default LicenciasTable
