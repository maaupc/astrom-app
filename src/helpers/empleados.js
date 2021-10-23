const url = "https://calm-castle-34951.herokuapp.com";
// const url = "http://localhost:8080";



export const empleadoGet = async (limite) => {
    const resp = await fetch(`${url}/api/empleados?desde=${limite}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const empleados = resp.json()

    return empleados
}

export const obtenerEmpleado = async (id) => {
    const resp = await fetch(`${url}/api/empleados/${id}`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const empleados = resp.json()

    return empleados
}




export const empleadoPost = async (data)=>{
    let token = JSON.parse(localStorage.getItem("auth")).token
    const resp = await fetch(`${url}/api/empleados`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-token": token
        }
    })

    const empleado = resp.json()

    return empleado


}

export const empleadoPut = async (id, data)=>{
    const resp = await fetch(`${url}/api/empleados/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token
        }
    })

    const empleado = resp.json()

    return empleado
    
}

export const empleadoDelete = async (id)=>{
    const resp = await fetch(`url/api/empleados/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token
        }
    })

    const empleado = resp.json()

    return empleado
}