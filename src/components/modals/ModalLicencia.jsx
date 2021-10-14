import React from 'react'
import { Modal, Button } from "react-bootstrap";
import {useState} from 'react'
import { useEffect } from 'react'
import '../../styles/Modal.css'

import {empleadoGet, empleadoPut} from '../../helpers/empleados'

import { licenciaGet, licenciasPut, licenciasPost } from '../../helpers/licencias'


const ModalLicencia = ({show, handleClose, actualizar, user}) => {
    // const user = JSON.parse(localStorage.getItem("auth"))
    

    const [formValue, setFormValue] = useState({
        empleado: user.empleado.uid,
        motivo: "",
        inicio: "",
        fin: "",
        activa: false
    })

    // const [licencias, setLicencias] = useState([])

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
        })
    }, [])

    useEffect(()=>{
        setFormValue({
            empleado: user.empleado.uid,
            inicio: "",
            fin: "",
            motivo: "",
            activa: false
        })
        if(actualizar){
            licenciaGet(actualizar).then((respuesta)=>{
                setFormValue({
                    empleado: respuesta.licencias.empleado,
                    motivo: respuesta.licencias.motivo,
                    inicio: respuesta.licencias.inicio,
                    fin: respuesta.licencias.fin,
                    activa: respuesta.licencias.activa
                })
            })
        }
    }, [actualizar])

    const handleChange = ({target})=>{
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

        console.log(formValue)

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(actualizar){
            licenciasPut(actualizar, formValue).then((respuesta)=>{
                console.log("PUT LICENCIAS",formValue)
                if(respuesta.errors){
                    return window.alert(respuesta.errors[0].msg);
                }
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }


                empleadoPut(formValue.empleado._id, {licencia: formValue.activa}).then((respuesta)=>{
                    if(respuesta.errors){
                        return window.alert(respuesta.errors[0].msg);
                    }
                    if(respuesta.msg){
                        window.alert(respuesta.msg)
                    }
                })


                setFormValue({
                    empleado: user.empleado.uid,
                    inicio: "",
                    fin: "",
                    motivo: "",
                    activa: false
                })
                handleClose()
            })
            


        }else{

            licenciasPost(formValue).then((respuesta)=>{
                if(respuesta.errors){
                    return window.alert(respuesta.errors[0].msg);
                }
                if(respuesta.msg){
                    window.alert(respuesta.msg)
                }
                setFormValue({
                    empleado: user.empleado.uid,
                    inicio: "",
                    fin: "",
                    motivo: "",
                    activa: false
                })
                handleClose()
                
            })
            
        }
    }



    return (
        <>
         <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} dialogClassName="modalPrueba">
        <Modal.Header>
          <Modal.Title>{actualizar? "Ver detalles" : "Nueva licencia"}</Modal.Title>
        </Modal.Header>

            <form onSubmit={handleSubmit} >
        <Modal.Body>
            <div>
                <label>Nombre</label>
                {user.empleado.rol==="ADMIN_ROLE"
                ? 
                <select className="form-select"
                name="empleado"
                value={formValue.empleado}
                onChange={handleChange}
                required
                >
                    {empleados.datos.map((empleado)=>(
                        <option key={empleado.uid} value={empleado.uid}>
                            {actualizar ? formValue.empleado.apellido+", "+formValue.empleado.nombre                                
                            :
                            empleado.apellido+", "+empleado.nombre
                            }
                        </option>
                    ))}
                </select>
                :
                <p>{user.empleado.apellido}, {user.empleado.nombre}</p>
                }
            </div>



            <div>
                <label>Fecha inicio</label>
                {user.empleado.rol==="ADMIN_ROLE" || !actualizar
                ?
                <input name="inicio" type="date" className="form-control" value={formValue.inicio} onChange={handleChange}/>
                :
                <p>{formValue.inicio}</p>                
                }
            </div>
            <div>
                <label>Fecha fin</label>
                {user.empleado.rol==="ADMIN_ROLE" || !actualizar
                ?
                <input name="fin" type="date" className="form-control" value={formValue.fin} onChange={handleChange}/>
                :
                <p>{formValue.fin}</p>                
                }
            </div>
            <div>
                <label>Motivo</label>
                {user.empleado.rol==="ADMIN_ROLE" || !actualizar
                ?
                <textarea  name="motivo" className="form-control" id="" cols="30" rows="10" value={formValue.motivo} onChange={handleChange} maxLength="300"/>
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
            </div>

        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="success" type="submit" onClick={handleClose} disabled={user.empleado.rol==="ADMIN_ROLE" || !actualizar ? false : true}>
            Guardar cambios
          </Button>
        </Modal.Footer>        
            </form>
      </Modal>   
        </>
    )
}

export default ModalLicencia
