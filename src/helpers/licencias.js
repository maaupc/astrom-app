<<<<<<< HEAD
const url = "https://calm-castle-34951.herokuapp.com";
=======
const url = "http://localhost:8080";
>>>>>>> Martin

export const licenciasGet = async ()=>{
    const resp = await fetch(`${url}/api/licencias`,{
        method: 'GET',
        headers : {
            "Content-type": "application/json; charset=UTF-8",
<<<<<<< HEAD
=======
            "x-token": JSON.parse(localStorage.getItem("auth")).token,
>>>>>>> Martin
        }
    })

    const datos = await resp.json()

    return datos

}

export const licenciaGet = async (id)=>{
    const resp = await fetch(`${url}/api/licencias/${id}`,{
        method: 'GET',
        headers : {
            "Content-type": "application/json; charset=UTF-8",
        }
    })

    const datos = await resp.json()

    return datos

}

export const licenciasPut = async (id, data)=>{
    const resp = await fetch(`${url}/api/licencias/${id}`,{
        method: 'PUT',
        body: JSON.stringify(data),
        headers : {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token,
        }
    })

    const datos = await resp.json()

    return datos

<<<<<<< HEAD
}

export const licenciasPost = async (data)=>{
    const resp = await fetch(`${url}/api/licencias/`,{
        method: 'POST',
        body: JSON.stringify(data),
        headers : {
            "Content-type": "application/json; charset=UTF-8",
            "x-token": JSON.parse(localStorage.getItem("auth")).token,
        }
    })

    const datos = await resp.json()

    return datos

=======
>>>>>>> Martin
}