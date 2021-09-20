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
