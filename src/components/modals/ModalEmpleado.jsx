import React, { useState, useEffect } from "react";
import { empleadoPost, empleadoPut, empleadoGet } from "../../helpers/empleados";
import { puestosGet } from '../../helpers/puesto';
import { Modal, Button } from "react-bootstrap";
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';



const ModalEmpleado = ({ show, handleClose, actualizar}) => {
    // Seteando fecha de nacimiento
    const [puestos, setPuestos] = useState([]);
    const [startDate, setStartDate] = useState(new Date());

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
        password: "",
        puesto: "",
        rol: "",
    });

    useEffect(() => {
        (async () => {
            const puestos = await puestosGet()
            setPuestos(puestos.puestos);
        })()
    }, [])

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
                if (respuesta.errors) {
                    return window.alert(respuesta.errors[0].msg);
                }
                if (respuesta.msg) {
                    window.alert(respuesta.msg)
                }
            })
        }

        setLoading(true);

        empleadoPost(formValue).then((respuesta) => {
            console.log(respuesta);
            if (respuesta.errors) {
                setLoading(false);
                return window.alert(respuesta.errors[0].msg);
            }
            setLoading(false);
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
            handleClose();
        });
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Alta de Empleado</Modal.Title>
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
                                required
                                value={formValue.password}
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
                                onChange={handleChange} />


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
                                {puestos.map((puesto) => {
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
                                required
                            >
                                <option defaultValue="">Elige un Rol</option>
                                <option value="USER_ROLE">Usuario</option>
                                <option value="ADMIN_ROLE">Administrador</option>
                            </select>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button variant="success" type="submit" disabled={loading}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );

}
export default ModalEmpleado;