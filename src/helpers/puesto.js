const url = "http://localhost:8080/api/puestos";

export const puestosGet = async (desde) => {
      const resp = await fetch(`${url}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const datos = await resp.json();
    
      return datos;
    };