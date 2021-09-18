import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { licenciasGet } from '../helpers/licencias'
import ModalLicencia from './modals/ModalLicencia'


const LicenciasTable = () => {
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


    return (
        <div>
            <div>
            <h1>Licencias</h1>
            </div>
            <button className="btn btn-warning" onClick={()=>{handleShow(); setActualizar("")}}>Cargar Licencia</button>
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
            </table>
            <div className="d-flex justify-content-center">
            <ModalLicencia show={show} handleClose={handleClose} actualizar={actualizar}/>
          </div>

            
        </div>
    )
}

export default LicenciasTable
