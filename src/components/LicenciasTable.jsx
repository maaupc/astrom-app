import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/LicenciasTable.css'

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


    }, [show])

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const licenciasUsuario = licencias.datos.filter((licencia)=>{
        return licencia.empleado._id === user.empleado.uid
    })

    
    const handleVencidas = ({target})=>{
        if(target.checked){
            licenciasGet(10, Date.now()).then((respuesta)=>{
                console.log(respuesta)
                setLicencias({
                    datos: respuesta.licencias,
                    loading: false
                })
            })
        }else{
            licenciasGet().then((respuesta)=>{
                setLicencias({
                    datos: respuesta.licencias,
                    loading: false
                })
            })
        }

        
    }

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
        <div className="position-relative">
            <div className="licencias-header">
                <div className="line-header"></div>
                <h1 className="h1-header">Licencias</h1>
            </div>
                <div className="overlay-header"></div>
            <div className="button-header d-flex justify-content-between">
                {user.empleado.rol==="ADMIN_ROLE"
                ? (
                    <div className="form-check form-switch licencias-switch">
                        <input className="form-check-input" type="checkbox" role="switch" onChange={handleVencidas}/>
                        <label className="form-check-label">Vencidas</label>
                    </div>
                ) : (
                    <div></div>
                )}

                <button className="btn agregar-button"
                onClick={()=>{handleShow(); setActualizar("")}}
                >
                Cargar Licencia
                </button>

            </div>
            
        </div>

            {licencias.loading ? (
                <div className="d-flex justify-content-center">
                    <img src="https://www.grupoyomar.com/img/loading.gif" className="gif-loading"/>
                </div>
            ) : (

                <div className="table-responsive">

            <table className="table">
                <thead >
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
                <tbody className="table-content">
                        {licencias.datos.map((licencia)=>(
                            <tr key={licencia._id}>
                                <th>{licencia.empleado.dni}</th>
                                <th><div className="d-flex justify-content-center align-items-center name-ab">{licencia.empleado.nombre[0]}{licencia.empleado.apellido[0]}</div></th>
                                <td>{licencia.empleado.apellido}, {licencia.empleado.nombre}</td>
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
