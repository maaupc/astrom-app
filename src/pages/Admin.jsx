import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/admin.css";

//Importacion de componentes
import EmpleadosTable from "../components/EmpleadosTable";
import LicenciasTable from "../components/LicenciasTable";

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


            {/* ROMPIENDO TODO */}
            <div className="row">
                {
                    {
                        empleados: (
                            <div className="col-8 offset-2">
                                {" "}
                                <EmpleadosTable />{" "}
                            </div>
                        ),
                        licencias: (
                            <div className="col-8 offset-2 col-md-6 offset-md-3 col-sm-4 offset-sm-4">
                                {" "}
                                <LicenciasTable />{" "}
                            </div>
                        ),
                    }[btn]
                }
            </div>
        </div>

    );
};

export default Admin;
