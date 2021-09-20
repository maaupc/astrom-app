import React, { useState } from "react";
import { empleadoPost } from "../../helpers/empleados";
import { Modal, Button } from "react-bootstrap";
const ModalEmpleado = ({ show, handleClose }) => {
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    nombre: "",
    apellido: "",
    email: "",
    documento: "",
    rol: "",
  });

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    empleadoPost(formValue).then((respuesta) => {
      //   console.log(respuesta);
      if (respuesta.errors) {
        setLoading(false);
        return window.alert(respuesta.errors[0].msg);
      }
      setLoading(false);
      setFormValue({
        nombre: "",
        apellido: "",
        email: "",
        documento: "",
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
                placeholder="ejemplo@ejemplo"
                maxLength="30"
                required
                value={formValue.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Documento</label>
              <input
                type="text"
                name="documento"
                className="form-control"
                autoComplete="off"
                maxLength="8"
                required
                value={formValue.documento}
                onChange={handleChange}
              />
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
};

export default ModalEmpleado;