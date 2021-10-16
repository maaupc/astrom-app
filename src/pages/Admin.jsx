import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import '../styles/Admin.css'

//Importacion de componentes
import EmpleadosTable from '../components/EmpleadosTable'
import LicenciasTable from '../components/LicenciasTable'
import PuestosTable from '../components/PuestosTable'


const Admin = () => {
    const [state, setState] = useState({ rol: "" });
    const [btn, setBtn] = useState("empleados");

    useEffect(() => {
        const datos = JSON.parse(localStorage.getItem("auth"));
        setState(datos.empleado);
    }, [state.rol]);

    if (state.rol !== "ADMIN_ROLE") {
        return (
            <div className="alert alert-danger text-center" role="alert">
                🚫No autorizado🚫
            </div>
        );
    }

    return (
        <div className="container-fluid" id="container-header-admin">
            <div className="row">
                <div className="admin-header">
                    <h1>Administrador</h1>
                </div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button
                        className="btn"
                        onClick={() => {
                            setBtn("empleados");
                        }}
                    >
                        <i className="fa fa-user " aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button
                        className="btn"
                        onClick={() => {
                            setBtn("empleados");
                        }}
                    >
                        <i className="fa fa-money" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button
                        className="btn"
                        onClick={() => {
                            setBtn("licencias");
                        }}
                    >
                        <i className="fa fa-file-text" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

  return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 d-grid gap-2 admin-button">
                    <button className="btn" onClick={()=>{setBtn("empleados")}}>
                        <i className="fa fa-users " aria-hidden="true"></i>
                    </button></div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button className="btn" onClick={()=>{setBtn("puestos")}}>
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button className="btn" onClick={()=>{setBtn("licencias")}}>
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <div className="row">
                {{empleados: <div className="col-12"> <EmpleadosTable /> </div>,
                  licencias: <div className="col-12"> <LicenciasTable /> </div>,
                  puestos: <div className="col-12"> <PuestosTable /> </div>,
            }[btn]}
            </div>
        </div>
  );
};

export default Admin;
