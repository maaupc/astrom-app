import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

//Importacion de componentes
import EmpleadosTable from '../components/EmpleadosTable'
import LicenciasTable from '../components/LicenciasTable'


const Admin = () => {
    const [btn, setBtn] = useState("empleados")


    return (
        <div className="container">
            <div className="row">
                <div className="col-12 admin-header">
                <h1>Admin</h1>
                </div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button className="btn" onClick={()=>{setBtn("empleados")}}>
                        <i className="fa fa-user " aria-hidden="true"></i>
                    </button></div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button className="btn" onClick={()=>{setBtn("empleados")}}>
                    <i className="fa fa-money" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="col-4 d-grid gap-2 admin-button">
                    <button className="btn" onClick={()=>{setBtn("licencias")}}>
                    <i className="fa fa-file-text" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            {/* ROMPIENDO TODO */}
            <div className="row">
                {{empleados: <div className="col-12"> <EmpleadosTable /> </div>,
                  licencias: <div className="col-12"> <LicenciasTable /> </div>
            }[btn]}
            </div>
                


                





        {/* SIN ROMPER NADA  */}
            {/* <div className="row">
                <div className="col-12">
                    <EmpleadosTable />
                </div>
                <div className="col-12">
                    <LicenciasTable />
                </div>
            </div> */}


        </div>
    )
}

export default Admin
