import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { licenciasGet, licenciaDelete } from '../helpers/licencias'
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

        // console.log("Show cambio de estado a", show)

    }, [show])

    // useEffect(() => {
    //     console.log("Show cambio de estado a", show)
    // }, [show])

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const licenciasUsuario = licencias.datos.filter((licencia)=>{
        return licencia.empleado._id === user.empleado.uid
    })

    const borrarLicencia = (id)=>{
        let licencia = licencias.datos.find((data)=>{

            return data._id === id
        })

        let validar = window.confirm(`Esta seguro que desea eliminar la licencia de ${licencia.empleado.apellido}, ${licencia.empleado.nombre} ?`)

        if(validar){
            licenciaDelete(id).then((respuesta)=>{
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }

            })

        }
    }



    return (
        <>
            <div className="licencias-header">
            <h1>Licencias</h1>
            </div>
            <div className="button-header d-flex justify-content-end">
                <button className="btn licencias-button"
                onClick={()=>{handleShow(); setActualizar("")}}
                // hidden={user.empleado.rol==="ADMIN_ROLE"? false : true}
                >
                Cargar Licencia
                </button>
            </div>

            {licencias.loading ? (
                <div className="alert alert-success text-center" role="alert">
                    Cargando...
                </div>
            ) : (

                <div className="table-responsive">

            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>DNI</th>
                        <th></th>
                        <th>EMPLEADO</th>
                        <th>FECHA INICIO</th>
                        <th>FECHA FIN</th>
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
                                <th><div className="d-flex justify-content-center align-items-center name-ab">{licencia.empleado.apellido[0]}{licencia.empleado.nombre[0]}</div></th>
                                <th>{licencia.empleado.apellido}, {licencia.empleado.nombre}</th>
                                <td>{licencia.inicio}</td>
                                <td>{licencia.fin}</td>
                                <td>{licencia.activa? "VIGENTE" : "NO VIGENTE"}</td>
                                <th>
                                    <button className="btn btn-succes" onClick={()=>{handleShow(); setActualizar(licencia._id)}}>
                                        <i className="fa fa-eye" aria-hidden="true"></i>
                                    </button>
                                    <button className="btn btn-succes btn-delete" onClick={()=>{borrarLicencia(licencia._id)}} >
                                        <i className="fa fa-trash" aria-hidden="true"></i>
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
                            <th><div className="d-flex justify-content-center align-items-center name-ab">{licencia.empleado.apellido[0]}{licencia.empleado.nombre[0]}</div></th>
                            <th>{licencia.empleado.apellido}, {licencia.empleado.nombre}</th>
                            <td>{licencia.inicio}</td>
                            <td>{licencia.fin}</td>
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
