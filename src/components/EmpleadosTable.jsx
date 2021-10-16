import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ModalEmpleado from "./modals/ModalEmpleado";
// import BtnPaginacion from "./BtnPaginacion";
import '../styles/admin.css'
import '../styles/tablaEmpleado.css'

//Importo conexiones con base de datos
import { empleadoGet } from "../helpers/empleados";

const EmpleadosTable = () => {
    const [empleados, setEmpleados] = useState({
        response: "",
        datos: [],
        loading: true
    });

    // inicio paginacion


     /* const [pagina, setPagina] = useState(0);
     const [totPag, setTotpag] = useState(0);

    
   
     useEffect(() => {
        
         empleadoGet().then((respuesta)=>{
            
             setEmpleados(respuesta.empleados);
             setTotpag(respuesta.Total);
            
         })
     }, []);

     useEffect(() => {
         empleadoGet(pagina).then((respuesta)=>{
         setEmpleados(respuesta.empleados);
         });
        
     }, [pagina])
 */




    // fin paginacion


    const [filtro, setFiltro] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const [show, setShow] = useState(false);
    
    const getEmployees = () => {
        empleadoGet().then((respuesta) => {
            setEmpleados({
                datos: respuesta.empleados,
                loading: false,
            });
        });
    }

    const handleClose = () => {
        getEmployees();
        setShow(false);
    };

    const handleShow = () => setShow(true);

    useEffect(() => {
        getEmployees()
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
            
                <div className=" table-scroll-y scrollbar">
            <table className=" table table-bordered table-striped table-condensed table-fixed">
                <thead className="table-dark">
                    <tr>
                        <th>Dni</th>
                        <th>Empleado</th>
                        <th>Domicilio</th>
                        <th>Telefon</th>
                        <th>Provincia</th>
                        <th>Email</th>
                        <th>Puesto</th>
                        <th>Estado</th>
                       



                    </tr>
                </thead>
                <tbody>
                    {filtro.map((empleado) => (
                        <tr key={empleado.uid}>
                            <th >{empleado.dni}</th>
                            <td >
                                {empleado.apellido}, {empleado.nombre}
                            </td>
                            <td >{empleado.domicilio}</td>
                            <td >{empleado.telefono}</td>
                            <td >{empleado.provincia}, {empleado.localidad}</td>
                            <td >{empleado.email}</td>
                            <td >{empleado.puesto.nombre}</td>
                            <td >{empleado.licencia ? "LICENCIA" : "ACTIVO"}</td>
                            

                        </tr>


                    ))}

                </tbody>
            </table>

            <ModalEmpleado show={show} handleClose={handleClose}/>
            {/*  <div className="d-flex justify-content-center">
                <BtnPaginacion
                    totPag={totPag}
                    pagina={pagina}
                    setPagina={setPagina}
                />
            </div>  */}
        </div>
        
        </div>
    );
};

export default EmpleadosTable;
