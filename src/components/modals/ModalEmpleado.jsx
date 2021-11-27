import React, { useState, useEffect } from "react";
import { empleadoPost, empleadoPut, obtenerEmpleado } from "../../helpers/empleados";
import { puestosGet } from '../../helpers/puesto';
import { Modal, Button } from "react-bootstrap";


const ModalEmpleado = ({ show, handleClose, actualizar}) => {
    // Seteando fecha de nacimiento
    const day = new Date().getDate().toString()
    const month = (new Date().getMonth()+1).toString() 
    const year = (new Date().getFullYear()-18).toString()
    const today = year+"-"+month+"-"+day
    const [puestos, setPuestos] = useState({
        datos: [],
        loading: true
    })


    const [loading, setLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        nombre: "",
        apellido: "",
        email: "",
        dni: "",
        telefono: "",
        emergencia: "",
        domicilio: "",
        localidad: "",
        provincia: "",
        nacimiento: "",
        puesto: "",
        rol: "",
    });

    useEffect(()=>{
        puestosGet().then((respuesta)=>{
            setPuestos({
                datos: respuesta.puestos,
                loading:false
            })
        })
    }, [])

    useEffect(() => {
        setFormValue({
            nombre: "",
            apellido: "",
            email: "",
            dni: "",
            telefono: "",
            emergencia: "",
            domicilio: "",
            localidad: "",
            provincia: "",
            nacimiento: "",
            puesto: "",
            rol: "",
        })
        if(actualizar){
            obtenerEmpleado(actualizar).then((respuesta)=>{
                setFormValue({
                    nombre: respuesta.empleado.nombre,
                    apellido: respuesta.empleado.apellido,
                    email: respuesta.empleado.email,
                    dni: respuesta.empleado.dni,
                    telefono: respuesta.empleado.telefono,
                    emergencia: respuesta.empleado.emergencia,
                    domicilio: respuesta.empleado.domicilio,
                    localidad: respuesta.empleado.localidad,
                    provincia: respuesta.empleado.provincia,
                    nacimiento: respuesta.empleado.nacimiento,
                    puesto: respuesta.empleado.puesto,
                    rol: respuesta.empleado.rol,
                })
            })
        }
    }, [show])

    

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // actualizar datos
        if (actualizar) {
            empleadoPut(actualizar, formValue).then((respuesta) => {
                handleClose()
                if (respuesta.errors) {
                    return window.alert(respuesta.errors[0].msg);
                }
                if (respuesta.msg) {
                    window.alert(respuesta.msg)
                }
            })
            setFormValue({
                nombre: "",
                apellido: "",
                email: "",
                dni: "",
                telefono: "",
                emergencia: "",
                domicilio: "",
                localidad: "",
                provincia: "",
                nacimiento: "",
                password: "",
                puesto: "",
                rol: "",
            });
            // console.log("hola")
            // handleClose();
        }else{
            empleadoPost(formValue).then((respuesta) => {
                handleClose();
                if (respuesta.errors) {
                    // handleClose();
                    return window.alert(respuesta.errors[0].msg);
                }
                setFormValue({
                    nombre: "",
                    apellido: "",
                    email: "",
                    dni: "",
                    telefono: "",
                    emergencia: "",
                    domicilio: "",
                    localidad: "",
                    provincia: "",
                    nacimiento: "",
                    password: "",
                    puesto: "",
                    rol: "",
                });
            });
        }
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header >
                <Modal.Title>{actualizar? "Editar" : "Nuevo empleado"}</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                                type="text"
                                name="nombre"
                                className="form-control"
                                autoComplete="off"
                                maxLength="25"
                                required
                                value={formValue.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Apellido</label>
                            <input
                                type="text"
                                name="apellido"
                                maxLength="25"
                                autoComplete="off"
                                className="form-control"
                                required
                                value={formValue.apellido}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                autoComplete="off"
                                placeholder="ejemplo@ejemplo"
                                maxLength="30"
                                required
                                value={formValue.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Contraseña</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                maxLength="15"
                                onChange={handleChange}
                            />
                        </div>



                        <div className="form-group">
                            <label>Documento</label>
                            <input
                                type="text"
                                name="dni"
                                className="form-control"
                                autoComplete="off"
                                maxLength="8"
                                minLength="8"
                                required
                                value={formValue.dni}
                                onChange={handleChange}
                            />
                        </div>

                        {<div className="form-group">



                            <label>Fecha Nacimiento</label>
                            <input name="nacimiento"
                                type="date"
                                className="form-control"
                                value={formValue.nacimiento}
                                onChange={handleChange} 
                                max={today}/>


                        </div>}

                        <div className="form-group">
                            <label>Telefono</label>
                            <input
                                type="text"
                                name="telefono"
                                maxLength="10"
                                autoComplete="off"
                                className="form-control"
                                required
                                value={formValue.telefono}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="form-group">
                            <label>Domicilio</label>
                            <input
                                type="text"
                                name="domicilio"
                                maxLength="25"
                                autoComplete="off"
                                className="form-control"
                                required
                                value={formValue.domicilio}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Localidad</label>
                            <input
                                type="text"
                                name="localidad"
                                maxLength="25"
                                autoComplete="off"
                                className="form-control"
                                required
                                value={formValue.localidad}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Provincia</label>
                            <input
                                type="text"
                                name="provincia"
                                maxLength="25"
                                autoComplete="off"
                                className="form-control"
                                required
                                value={formValue.provincia}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Puesto</label>
                            <select
                                className="form-select"
                                name="puesto"
                                aria-label="Default select example"
                                value={formValue.puesto}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Elige un puesto</option>
                                {puestos.datos.map((puesto) => {
                                    return <option key={puesto._id} value={puesto._id}>{puesto.nombre}</option>
                                })}
                            </select>

                        </div>

                        <div className="form-group">
                            <label>Rol</label>
                            <select
                                className="form-select"
                                name="rol"
                                aria-label="Default select example"
                                value={formValue.rol}
                                onChange={handleChange}
                                defaultValue= "USER_ROLE"
                                required
                            >
                                {/* <option defaultValue="">Elige un Rol</option> */}
                                <option value="USER_ROLE">Usuario</option>
                                <option value="ADMIN_ROLE">Administrador</option>
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="success" type="submit">
                            Guardar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );

}
export default ModalEmpleado;