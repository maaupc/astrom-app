import React from 'react'
import LicenciasTable from '../components/LicenciasTable'
import '../styles/Admin.css'

const Licencias = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <LicenciasTable/>
                </div>
            </div>
        </div>

    )
}

export default Licencias
