import React from 'react'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import { useEffect } from 'react'
import { puestoGet, puestoPost, puestoPut } from '../../helpers/puestos'

const ModalPuesto = ({show, handleClose, actualizar}) => {
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
                console.log(respuesta)
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
                
                handleClose()
            })
            


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

                handleClose()  
            })
        }
    }



    return (
        <div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header>
                    <Modal.Title>{actualizar? "Editar" : "Nuevo puesto"}</Modal.Title>
                </Modal.Header>

                <form onSubmit={handleSubmit} >
                    <Modal.Body>
                        <div>
                             <label>Nombre</label>
                             <input name="nombre" type="text" className="form-control" value={formValue.nombre} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Horarios</label>
                            <input name="horarios" type="text" className="form-control" value={formValue.horarios} onChange={handleChange}/>
                        </div>
                        <div>
                            <label>Salario</label>
                            <input name="salario" type="text" className="form-control" value={formValue.salario} onChange={handleChange}/>
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
