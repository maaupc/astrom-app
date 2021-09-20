<<<<<<< HEAD
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import '../styles/admin.css'

//Importo conexiones con base de datos
import { empleadoGet, empleadoPost, empleadoPut, empleadoDelete } from '../helpers/empleados'

const EmpleadosTable = () => {

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

    
    return (
        <div>
            <div className="header-empleados">
            <h1 >Empleados</h1>
            </div>
            <button className="btn btn-warning">Crear empleado</button>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Ingrese un DNI"/>
                <span className="input-group-text" id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>DNI</th>
                        <th>EMPLEADO</th>
                        <th>PUESTO</th>
                        <th>ESTADO</th>
                        <th>ACCION</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.datos.map((empleado)=>(
                        
                        <tr key={empleado.uid}>
                            <th>{empleado.dni}</th>
                            <td>{empleado.apellido}, {empleado.nombre}</td>
                            <td>{empleado.puesto.nombre}</td>
                            <td>{empleado.licencia? "LICENCIA" : "ACTIVO"}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmpleadosTable
=======
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ModalEmpleado from "./modals/ModalEmpleado";

//Importo conexiones con base de datos
import { empleadoGet } from "../helpers/empleados";

const EmpleadosTable = () => {
  const [empleados, setEmpleados] = useState({
    response: "",
    datos: [],
    loading: false,
  });

  const [filtro, setFiltro] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    empleadoGet().then((respuesta) => {
      setEmpleados({
        datos: respuesta.empleados,
        loading: false,
      });
      console.log(respuesta);
    });
  }, []);

  useEffect(() => {
    const busqueda = empleados.datos.filter((empleado) => {
      return empleado.dni.indexOf(inputValue) > -1;
    });
    setFiltro(busqueda);
  }, [inputValue]);

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const submitEmpleados = (e) => {
    e.preventDefault();

    const busqueda = empleados.datos.filter((empleado) => {
      return empleado.dni.indexOf(inputValue) > -1;
    });

    console.log(busqueda);

    setFiltro(busqueda);
  };

  return (
    <div>
      <div>
        <h1 className="mb-4">Empleados</h1>
      </div>
      <button className="btn btn-warning mb-3" onClick={handleShow}>
        Crear empleado
      </button>

      <div className="input-group mx-auto">
        <form onSubmit={submitEmpleados}>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese un DNI"
            value={inputValue}
            onChange={changeInput}
          />
        </form>
      </div>

      {/* TABLA EMPLEADOS */}
      <table className="table table-responsive mt-3">
        <thead className="table-dark">
          <tr>
            <th>DNI</th>
            <th>EMPLEADO</th>
            <th>PUESTO</th>
            <th>ESTADO</th>
            
          </tr>
        </thead>
        <tbody>
          {filtro.map((empleado) => (
            <tr key={empleado.uid}>
              <th>{empleado.dni}</th>
              <td>
                {empleado.apellido}, {empleado.nombre}
              </td>
              <td>{empleado.puesto.nombre}</td>
              <td>{empleado.licencia ? "LICENCIA" : "ACTIVO"}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <ModalEmpleado show={show} handleClose={handleClose} />
    </div>
  );
};

export default EmpleadosTable;
>>>>>>> Martin
