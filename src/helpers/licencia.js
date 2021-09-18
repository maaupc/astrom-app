const url = "http://localhost:8080/api/licencias";

export const obtenerLicencia = async ()=>{
    const resp = await fetch(`${url}`,{
        method: 'GET',
        headers : {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token,
        }
    })

    const datos = await resp.json()

    return datos

}