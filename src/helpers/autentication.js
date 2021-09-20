const url = "https://calm-castle-34951.herokuapp.com";

export const postAuth = async (data) =>{
    const resp = await fetch (`${url}/api/auth/login`,{
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    const datos = await resp.json();

    return datos;
};