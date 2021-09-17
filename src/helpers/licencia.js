  
const url = "http://localhost:8080";

// GET Licencias

export const empleadoGet = async () => {
    const resp = await fetch(`${url}/api/empleados`, {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const empleados = resp.json()

    return empleados
}
