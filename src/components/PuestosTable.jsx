import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { puestosGet, puestoDelete } from '../helpers/puestos'
import ModalPuesto from './modals/ModalPuesto'


const PuestosTable = () => {
    const [puestos, setPuestos] = useState({
        datos: [],
        loading: true
    })
    const [show, setShow] = useState(false)
    const [actualizar, setActualizar] = useState("")
    
    useEffect(() => {
        puestosGet().then((respuesta)=>{
            setPuestos({
                datos: respuesta.puestos,
                loading: false
            })
        })
        
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const borrarPuesto = (id)=>{
        let puesto = puestos.datos.find((data)=>{

            return data._id === id
        })

        let validar = window.confirm(`Esta seguro que desea eliminar el puesto de ${puesto.nombre} ?`)

        if(validar){
            puestoDelete(id).then((respuesta)=>{
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }

            })

        }
    }


    return (
        <div>
            <h1>Puestos</h1>
            <button className="btn btn-warning" onClick={()=>{handleShow(); setActualizar("")}}>Agregar puesto</button>

            {puestos.loading ? (
                <div className="alert alert-success text-center" role="alert">
                Cargando...
                </div>
            ) : 
            (
                <div className="table-responsive">
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th>NOMBRE</th>
                                <th>HORARIOS</th>
                                <th>SALARIO</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                puestos.datos.map((puesto)=>(
                                    <tr key={puesto._id}>
                                        <th>{puesto.nombre}</th>
                                        <th>{puesto.horarios}</th>
                                        <th>$ {puesto.salario}</th>
                                        <th>
                                            <button className="btn btn-succes btn-edit" onClick={()=>{handleShow(); setActualizar(puesto._id)}}>
                                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                            </button>
                                            <button className="btn btn-succes btn-delete" onClick={()=>{borrarPuesto(puesto._id)}} >
                                                <i className="fa fa-trash" aria-hidden="true"></i>
                                            </button>
                                        </th>
                                    </tr>
                                ))
                            }
    
                        </tbody>
    
                    </table>
                    <div className="d-flex justify-content-center">
                        <ModalPuesto show={show} handleClose={handleClose} actualizar={actualizar}/>
                    </div>
                </div>

            )}

            
        </div>
    )
}

export default PuestosTable
