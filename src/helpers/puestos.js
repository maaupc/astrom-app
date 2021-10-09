const url = "http://localhost:8080";

export const puestosGet = async (limite)=>{
    const resp = await fetch(`${url}/api/puestos?limite=${limite}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const puesto = resp.json()

    return puesto
}

export const puestoGet = async (id)=>{
    const resp = await fetch(`${url}/api/puestos/${id}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const puesto = resp.json()

    return puesto
}

export const puestoPost = async (data)=>{
    const resp = await fetch(`${url}/api/puestos`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token
        }
    })

    const puesto = resp.json()

    return puesto
}

export const puestoPut = async (id, data)=>{
    const resp = await fetch(`${url}/api/puestos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token
        }
    })

    const puesto = resp.json()

    return puesto
    
}

export const puestoDelete = async (id)=>{
    const resp = await fetch(`${url}/api/puestos/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token
        }
    })

    const puesto = resp.json()

    return puesto
}