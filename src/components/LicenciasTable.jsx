import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { licenciasGet } from '../helpers/licencias'


const LicenciasTable = () => {
    const [licencias, setLicencias] = useState({
        datos: [],
        loading: true
    })

    useEffect(() => {
        licenciasGet().then((respuesta)=>{
            setLicencias({
                datos: respuesta.licencias,
                loading: false
            })
        })
    }, [])



    return (
        <div>
            <div>
            <h1>Licencias</h1>
            </div>
            <table className="table">
                <thead className="table-dark">
                    <tr>
                        <th>EMPLEADO</th>
                        <th>MOTIVO</th>
                        <th>ESTADO</th>
                        <th>VALIDAR</th>
                    </tr>
                </thead>
                <tbody>
                    {licencias.datos.map((licencia)=>(
                        <tr key={licencia._id}>
                            <th>{licencia.empleado}</th>
                            <td>{licencia.motivo}</td>
                            <td>{licencia.activa? "VIGENTE" : "NO VIGENTE"}</td>
                            <th></th>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    )
}

export default LicenciasTable
