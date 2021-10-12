import React from "react";
import "../styles/usValues.css";

const UsValues = () => {
  return (
    <div className="tittle-beneficio">
      <h1 className="item beneficios">Beneficios</h1>
      <div className="container-valores">
        <div className="item seguridad">
          <img
            src="https://i.postimg.cc/Yqg8bSZK/seguridad.png"
            alt="seguridad"
          />
          <span className="tittle-beneficio">Seguridad</span>
          <p className="parrafo-beneficio">
            El monitoreo continuo de las condiciones asegura la detección y
            reacción oportuna ante incidentes.
          </p>
        </div>
        <div className="item confianza">
          <img src="https://i.postimg.cc/xTtqrvWK/mundo.png" alt="confianza" />
          <span className="tittle-beneficio">Confianza</span>
          <p className="parrafo-beneficio">
            Más de 12.000 clientes que operan en más de 70 países
          </p>
        </div>
        <div className="item rapidez">
          <img
            src="https://i.postimg.cc/CKMNhs1S/conexiones.png"
            alt="rapidez"
          />
          <span className="tittle-beneficio">Rápida implementación</span>
          <p className="parrafo-beneficio">Al ser recurrente y estándar.</p>
        </div>
        <div className="item disponibilidad">
          <img
            src="https://i.postimg.cc/cLBhGbdF/disponibilidad.png"
            alt="disponibilidad"
          />
          <span className="tittle-beneficio">Alta disponibilidad</span>
          <p className="parrafo-beneficio">
            Garantiza que la solución se mantenga operativa, aún en momentos
            críticos.
          </p>
        </div>
        <div className="item alertas">
          <img src="https://i.postimg.cc/J7spHxQh/alertas.png" alt="alertas" />
          <span className="tittle-beneficio">Generación de alertas</span>
          <p className="parrafo-beneficio">
            Los sistemas de monitoreo de salud de los sistemas permiten gatillar
            alertas para los componentes críticos del sistema.
          </p>
        </div>
        <div className="item escalabilidad">
          <img
            src="https://i.postimg.cc/sfbwYWn4/compu-div.png"
            alt="escalabilidad"
          />
          <span className="tittle-beneficio">Escalabilidad</span>
          <p className="parrafo-beneficio">
            Permite a clientes con una gran exigencia estar preparados para
            cambios futuros y proyectar crecimientos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UsValues;
