import React from 'react'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import { useEffect } from 'react'
import '../../styles/Modal.css'

import { puestoGet, puestoPost, puestoPut } from '../../helpers/puestos'

const ModalPuesto = ({show, handleClose, actualizar, setActualizar}) => {
    const [formValue, setFormValue] = useState({
        nombre: "",
        horarios: "",
        salario: "",
    })

    useEffect(()=>{
        setFormValue({
            nombre: "",
            horarios: "",
            salario: "",
        })
        
        if(actualizar){
            puestoGet(actualizar).then((respuesta)=>{
                setFormValue({
                    nombre: respuesta.puesto.nombre,
                    horarios: respuesta.puesto.horarios,
                    salario: respuesta.puesto.salario,
                })
            })
        } 
    }, [actualizar])

    const handleChange = ({target})=>{
            setFormValue({
                ...formValue,
                [target.name] : target.value
            })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(actualizar){
            puestoPut(actualizar, formValue).then((respuesta)=>{
                if(respuesta.errors){
                    return window.alert(respuesta.errors[0].msg);
                }
                if(respuesta.msg){
                    window.alert(respuesta.msg) 
                }    

                setFormValue({
                    nombre: "",
                    horarios: "",
                    salario: "",
                })
                
                setActualizar("")
            })
            handleClose()
            

        }else{
            puestoPost(formValue).then((respuesta)=>{
                if(respuesta.errors){
                    return window.alert(respuesta.errors[0].msg);
                }
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }                
                
                setFormValue({
                    nombre: "",
                    horarios: "",
                    salario: "",
                })
            })
            setActualizar("1")
            
        }
    }



    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>{actualizar? "Editar" : "Nuevo puesto"}</Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <div>
                             <label className="form-label" htmlFor="validationDefault01">Nombre</label>
                             <input id="validationDefault01" name="nombre" type="text" className="form-control" value={formValue.nombre} onChange={handleChange} maxLength="50"/>
                        </div>
                        <div>
                            <label className="form-label">Horarios</label>
                            <input name="horarios" type="text" className="form-control" value={formValue.horarios} onChange={handleChange} maxLength="16" placeholder="14.00 a 15.00 hs"/>
                        </div>
                        <div>
                            <label className="form-label">Salario</label>
                            <input name="salario" type="text" className="form-control" value={formValue.salario} onChange={handleChange} maxLength="10"/>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="success" type="submit" onClick={handleClose} >
                            Guardar cambios
                        </Button>
                    </Modal.Footer>
                </form>

            </Modal>
            
        </div>
    )
}

export default ModalPuesto
