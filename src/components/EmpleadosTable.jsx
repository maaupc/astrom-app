import React from "react";
import { useEffect } from "react";
import { useState ,useRef} from "react";
import ModalEmpleado from "./modals/ModalEmpleado";
// import BtnPaginacion from "./BtnPaginacion";
import '../styles/admin.css'
import '../styles/tablaEmpleado.css'

//Importo conexiones con base de datos
import { empleadoGet } from "../helpers/empleados";

const EmpleadosTable = () => {
    const [empleados, setEmpleados] = useState({
        // response: "",
        datos: [],
        loading: true
    });
    const inputRef=useRef()
    const [actualizar, setActualizar] = useState("")
    const [filtro, setFiltro] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        empleadoGet().then((respuesta) => {
            setEmpleados({
                datos: respuesta.empleados,
                loading: false,
            });
            setFiltro(respuesta.empleados)
        });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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


        setFiltro(busqueda);
    };
const handleFocus=()=>{
    const input= inputRef.current
   input.focus()
}

    return (
        <div>
            <div className="position-relative">
                <div className="puestos-header">
                    <div className="line-header"></div>
                    <h1 className="h1-header">Empleados</h1>
                </div>
                <div className="overlay-header"></div>
                <div className="button-header d-flex justify-content-end">
                    <button className="btn agregar-button" onClick={()=>{handleShow();setActualizar("") }}>Agregar empleado</button>
                </div>
            </div>

            <div className="input-group empleado-busqueda-admin">
                  <div className=" container busqueda-dni">
                  <form  className=" form-busqueda-admin" onSubmit={submitEmpleados}>
                  <div className="form-group row div-buscador-admin">
                  <div className="col-md-5 input-group">
                  <span className="input-group-addon span-icon-busqueda"><i className="fa fa-search " 
                  aria-hidden="true" 
                  type="submit"
                  onClick={handleFocus} ></i></span>
                   <input 
                   ref={inputRef}
                   type="text"
                   className="input-busqueda-admin form-control"
                   placeholder="  Ingrese un DNI "
                   value={inputValue}
                   onChange={changeInput}/>
                  </div>
                  </div>
                
                </form>
                  </div>
                
            </div>

            {/* TABLA EMPLEADOS */}
            
                <div className=" table-scroll-y scrollbar">
            <table className=" table table-condensed table-fixed">
                <thead className="table">
                    <tr>
                        <th>DNI</th>
                        <th></th>
                        <th>EMPLEADO</th>
                        <th>DOMICILIO</th>
                        <th>TELEFONO</th>
                        <th>PROVINCIA</th>
                        <th>EMAIL</th>
                        <th>PUESTO</th>
                        <th>ESTADO</th>
                        <th>ACCION</th>
                       



                    </tr>
                </thead>
                <tbody className="table-content">
                    {filtro.map((empleado) => (
                        <tr key={empleado.uid}>
                            <th >{empleado.dni}</th>
                            <th><div className="d-flex justify-content-center align-items-center name-ab">{empleado.nombre[0]}{empleado.apellido[0]}</div></th>
                            <td >
                                {empleado.apellido}, {empleado.nombre}
                            </td>
                            <td >{empleado.domicilio}</td>
                            <td >{empleado.telefono}</td>
                            <td >{empleado.provincia}</td>
                            <td >{empleado.email}</td>
                            <td >{empleado.puesto.nombre}</td>
                            <td >{empleado.licencia ? "LICENCIA" : "ACTIVO"}</td>
                            <th>
                                <button className="btn btn-succes" onClick={()=>{handleShow();setActualizar(empleado.uid)}}>
                                    <i className="fa fa-eye" aria-hidden="true"></i>
                                </button>
                            </th>
                            

                        </tr>


                    ))}

                </tbody>
            </table>

            <ModalEmpleado show={show} handleClose={handleClose} actualizar={actualizar}/>

        </div>
        
        </div>
    );
};

export default EmpleadosTable;
