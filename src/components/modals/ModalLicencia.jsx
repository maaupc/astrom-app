import React from 'react'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import { useEffect } from 'react'

import {empleadoGet, } from '../../helpers/empleados'

import { licenciaGet } from '../../helpers/licencias'

const ModalLicencia = ({show, handleClose, actualizar}) => {
    const user = JSON.parse(localStorage.getItem("auth"))

    const [formValue, setFormValue] = useState({
        empleado: "",
        fecha: "",
        motivo: ""
    })

    const [licencias, setLicencias] = useState([])

    const [empleados, setEmpleados] = useState({
        datos: [],
        loading: true
    })

    useEffect(()=>{
        empleadoGet().then((respuesta)=>{
            setEmpleados({
                datos: respuesta.empleados,
                loading:false
            })
            console.log(respuesta)
        })
    }, [])

    useEffect(()=>{
        setFormValue({
            empleado: "",
            fecha: "",
            motivo: ""
        })
        if(actualizar){
            licenciaGet(actualizar).then((respuesta)=>{
                console.log(respuesta)
                setFormValue({
                    empleado: respuesta.licencias.nombre,
                    motivo: respuesta.licencias.motivo,
                    fecha: respuesta.licencias.fecha
                })
                console.log("algo", formValue)
            })
        }
    }, [actualizar])

    const handleChange = ({target})=>{

    }





    return (
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{actualizar? "Ver detalles" : "Nueva licencia"}</Modal.Title>
        </Modal.Header>

            <form action="">
        <Modal.Body>
            <div>
                <label>Nombre</label>
                <select className="form-select"
                name="empleado"
                value={formValue.empleado}
                onChange={handleChange}
                required
                >
                    {empleados.datos.map((empleado)=>(
                        <option key={empleados.datos.uid} value={empleados.datos.dni}>
                            {empleado.apellido}, {empleado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Fecha</label>
                <input type="date" className="form-control" value={formValue.fecha} onChange={handleChange}/>
            </div>
            <div>
                <label>Motivo</label>
                <textarea readyOnly className="form-control" id="" cols="30" rows="10" value={formValue.motivo} onChange={handleChange}></textarea>
            </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Guardar cambios
          </Button>
        </Modal.Footer>        
            </form>
      </Modal>   
        </>
    )
}

export default ModalLicencia
