import React from 'react'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import { useEffect } from 'react'

import {empleadoGet, empleadoPost, } from '../../helpers/empleados'

//import { licenciaGet } from '../../helpers/licencias'

export const ModalEmpleado = ({show, handleClose, actualizar}) => {
  const user = JSON.parse(localStorage.getItem("auth"))

    const [formValue, setFormValue] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        puesto: ""
    })

    //const [licencias, setLicencias] = useState([])

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
            empleadoGet(actualizar).then((respuesta)=>{
                console.log(respuesta)
                setFormValue({
                    nombre: respuesta.empleados.nombre,
                    apellido: respuesta.empleados.apellido,
                    dni: respuesta.empleados.dni,
                    email: respuesta.empleados.email,
                    puesto: respuesta.empleados.puesto
                })
               // console.log("algo", formValue)
            })
        }
    }, [actualizar])

    const handleChange = ({target})=>{

    }





    return (
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{actualizar? "Ver detalles" : "Nuevo Empleado"}</Modal.Title>
        </Modal.Header>

            <form action="">
        <Modal.Body>
            <div>
                <label>Nombre</label>
                <input
                type="text" 
                className="form-control"
                value={formValue.nombre} 
                onChange={handleChange}
                >
                    {/* {empleados.datos.map((empleado)=>(
                        <option key={empleados.datos.uid} value={empleados.datos.dni}>
                            {empleado.apellido}, {empleado.nombre}
                        </option>
                    ))} */}
                </input>
            </div>
            <div>
                <label>Apellido</label>
                <input type="text" 
                className="form-control"
                value={formValue.apellido} 
                onChange={handleChange}/>
            </div>
            <div>
                <label>Documento</label>
                <input type="text" 
                className="form-control"
                value={formValue.dni} 
                onChange={handleChange}/>
            </div>
            <div>
                <label>Email</label>
                <input type="email" 
                className="form-control"
                value={formValue.email} 
                onChange={handleChange}/>
            </div>
            <div>
                <label>Puesto</label>
                <input  id="" cols="30" rows="10"
                className="form-control"
                 value={formValue.puesto}
                  onChange={handleChange}></input>
            </div>
            <div>

            

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
export default ModalEmpleado