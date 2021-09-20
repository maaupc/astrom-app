import React from 'react'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import { useEffect } from 'react'

<<<<<<< HEAD
import {empleadoGet, empleadoPut} from '../../helpers/empleados'

import { licenciaGet, licenciasPut, licenciasPost } from '../../helpers/licencias'


const ModalLicencia = ({show, handleClose, actualizar, user}) => {
    // const user = JSON.parse(localStorage.getItem("auth"))
    

    const [formValue, setFormValue] = useState({
        empleado: user.empleado.uid,
        motivo: "",
        fecha: "",
        activa: false
    })

    // const [licencias, setLicencias] = useState([])
=======
import {empleadoGet, } from '../../helpers/empleados'

import { licenciaGet } from '../../helpers/licencias'

export const ModalLicencia = ({show, handleClose, actualizar}) => {
    const user = JSON.parse(localStorage.getItem("auth"))

    const [formValue, setFormValue] = useState({
        empleado: "",
        fecha: "",
        motivo: ""
    })

    const [licencias, setLicencias] = useState([])
>>>>>>> Martin

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
<<<<<<< HEAD
=======
            console.log(respuesta)
>>>>>>> Martin
        })
    }, [])

    useEffect(()=>{
        setFormValue({
<<<<<<< HEAD
            empleado: user.empleado.uid,
            fecha: "",
            motivo: "",
            activa: false
        })
        if(actualizar){
            licenciaGet(actualizar).then((respuesta)=>{
                setFormValue({
                    empleado: respuesta.licencias.empleado.uid,
                    motivo: respuesta.licencias.motivo,
                    fecha: respuesta.licencias.fecha,
                    activa: respuesta.licencias.activa
                })
                console.log("carga formvalue", formValue)
=======
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
>>>>>>> Martin
            })
        }
    }, [actualizar])

    const handleChange = ({target})=>{
<<<<<<< HEAD
        if(target.name ==="activa"){
            setFormValue({
                ...formValue,
                [target.name] : target.checked,
            })

        }else{
            setFormValue({
                ...formValue,
                [target.name] : target.value
            })
        }

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(actualizar){
            licenciasPut(actualizar, formValue).then((respuesta)=>{
                if(respuesta.errors){
                    return window.alert(respuesta.errors[0].msg);
                }
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }

                console.log("formValue", formValue)

                empleadoPut(formValue.empleado, {licencia: formValue.activa}).then((respuesta)=>{
                    if(respuesta.errors){
                        return window.alert(respuesta.errors[0].msg);
                    }
                    if(respuesta.msg){
                        window.alert(respuesta.msg)
                    }
                })


                setFormValue({
                    empleado: user.empleado.uid,
                    fecha: "",
                    motivo: "",
                    activa: false
                })
                handleClose()
            })
            


        }else{
            console.log("nuevo")
            licenciasPost(formValue).then((respuesta)=>{
                console.log(formValue)
                console.log(respuesta)
                if(respuesta.errors){
                    return window.alert(respuesta.errors[0].msg);
                }
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }
                setFormValue({
                    empleado: user.empleado.uid,
                    fecha: "",
                    motivo: "",
                    activa: false
                })
                handleClose()
                
            })

        }
    }

=======

    }



>>>>>>> Martin


    return (
        <>
<<<<<<< HEAD
         <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
=======
         <Modal show={show} onHide={handleClose}>
>>>>>>> Martin
        <Modal.Header closeButton>
          <Modal.Title>{actualizar? "Ver detalles" : "Nueva licencia"}</Modal.Title>
        </Modal.Header>

<<<<<<< HEAD
            <form onSubmit={handleSubmit} >
        <Modal.Body>
            <div>
                <label>Nombre</label>
                {user.empleado.rol==="ADMIN_ROLE"
                ? 
=======
            <form action="">
        <Modal.Body>
            <div>
                <label>Nombre</label>
>>>>>>> Martin
                <select className="form-select"
                name="empleado"
                value={formValue.empleado}
                onChange={handleChange}
                required
                >
<<<<<<< HEAD
                    <option key={formValue.empleado.uid} value={formValue.empleado.uid} defaultValue>{formValue.empleado.apellido}, {formValue.empleado.nombre}</option>
                    {empleados.datos.map((empleado)=>(
                        <option key={empleado.uid} value={empleado.uid}>
=======
                    {empleados.datos.map((empleado)=>(
                        <option key={empleados.datos.uid} value={empleados.datos.dni}>
>>>>>>> Martin
                            {empleado.apellido}, {empleado.nombre}
                        </option>
                    ))}
                </select>
<<<<<<< HEAD
                :
                <p>{user.empleado.apellido}, {user.empleado.nombre}</p>
                }
            </div>



            <div>
                <label>Fecha</label>
                {user.empleado.rol==="ADMIN_ROLE"
                ?
                <input name="fecha" type="date" className="form-control" value={formValue.fecha} onChange={handleChange}/>
                :
                <p>{formValue.fecha}</p>                
                }
            </div>
            <div>
                <label>Motivo</label>
                {user.empleado.rol==="ADMIN_ROLE"
                ?
                <textarea  name="motivo" className="form-control" id="" cols="30" rows="10" value={formValue.motivo} onChange={handleChange} />
                :
                <p>{formValue.motivo}</p>
                }
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                checked={formValue.activa}
                value={formValue.activa}
                onChange={handleChange}
                disabled={user.empleado.rol==="ADMIN_ROLE"? false : true}
                name="activa"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{formValue.activa? "VIGENTE" : "NO VIGENTE"}</label>
=======
            </div>
            <div>
                <label>Fecha</label>
                <input type="date" className="form-control" value={formValue.fecha} onChange={handleChange}/>
            </div>
            <div>
                <label>Motivo</label>
                <textarea readyOnly className="form-control" id="" cols="30" rows="10" value={formValue.motivo} onChange={handleChange}></textarea>
>>>>>>> Martin
            </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
<<<<<<< HEAD
          <Button variant="success" type="submit" onClick={handleClose} disabled={user.empleado.rol==="ADMIN_ROLE"? false : true}>
=======
          <Button variant="primary" onClick={handleClose}>
>>>>>>> Martin
            Guardar cambios
          </Button>
        </Modal.Footer>        
            </form>
      </Modal>   
        </>
    )
}

export default ModalLicencia
