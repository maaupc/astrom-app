const url = "https://calm-castle-34951.herokuapp.com/api/empleados";

//traer los datos del empleado por su id
export const obtenerEmpleado = async (id) => {
  const resp = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      "Content-type":"application/json; charset=UTF-8",
    },
  });
  const datos = await resp.json();
  return datos;
};
export const crearEmpleado = async (data) => {
  const resp = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("auth")).token,
    },
  });
  const datos = await resp.json();

  return datos;
};
export const actualizarEmpleado = async (id, data) => {
  const resp = await fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "x-token": JSON.parse(localStorage.getItem("auth")).token,
    },
  });
  const datos = await resp.json();

  return datos;
};

