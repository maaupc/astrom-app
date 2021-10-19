import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/PuestosTable.css'

import { puestosGet, puestoDelete } from '../helpers/puestos'
import ModalPuesto from './modals/ModalPuesto'
import BtnPaginacion from './BtnPaginacion'


const PuestosTable = () => {
    const [puestos, setPuestos] = useState({
        datos: [],
        loading: true
    })
    const [show, setShow] = useState(false)
    const [actualizar, setActualizar] = useState("")

    
    const [pagina, setPagina] = useState(0);
     const [totPag, setTotpag] = useState(0);

 
     useEffect(() => {
        
        puestosGet().then((respuesta)=>{
            
            setPuestos({
                datos: respuesta.puestos,
                loading: false
            })
             setTotpag(respuesta.Total);
             console.log("Total licencias:", respuesta.Total)
            
         })
     }, []);

     useEffect(() => {
        puestosGet(pagina).then((respuesta)=>{
            console.log("Pagina:", pagina)
            setPuestos({
                datos: respuesta.puestos,
                loading: false
            })
         });
        
     }, [pagina])

 
    
    useEffect(() => {
        puestosGet().then((respuesta)=>{
            setPuestos({
                datos: respuesta.puestos,
                loading: false
            })
        })
    }, [show])

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
            <div className="position-relative">
                <div className="puestos-header">
                    <div className="line-header"></div>
                    <h1 className="h1-header">Puestos</h1>
                </div>
                <div className="overlay-header"></div>
                <div className="button-header d-flex justify-content-end">
                    <button className="btn agregar-button" onClick={()=>{handleShow(); setActualizar("")}}>Agregar puesto</button>
                </div>
            </div>

            {puestos.loading ? (
                <div className="d-flex justify-content-center">
                    <img src="https://www.grupoyomar.com/img/loading.gif" className="gif-loading"/>
                </div>
            ) : 
            (
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>NOMBRE</th>
                                <th>HORARIOS</th>
                                <th>SALARIO</th>
                                <th>ACCION</th>
                            </tr>
                        </thead>
                        <tbody className="table-content">
                            {
                                    puestos.datos.map((puesto)=>(
                                        <tr key={puesto._id}>
                                            <th>{puesto.nombre}</th>
                                            <td>{puesto.horarios}</td>
                                            <td>$ {puesto.salario}</td>
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
                        <BtnPaginacion totPag={totPag} pagina={pagina} setPagina={setPagina}/>
                    </div>

                    <div className="d-flex justify-content-center">
                        <ModalPuesto show={show} handleClose={handleClose} actualizar={actualizar}/>
                    </div>
                </div>

            )}

            
        </div>
    )
}

export default PuestosTable
