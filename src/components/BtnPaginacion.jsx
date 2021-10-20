import React from "react";
import '../styles/BtnPaginacion.css'

const BtnPaginacion = ({ totPag, pagina, setPagina, limite = 5 }) => {
  let total = totPag;
  const nextPag = () => {
    if (total > pagina + limite) {
      setPagina(pagina + limite);
    }
  };

  const prevPag = () => {
    if (pagina > 0) {
      setPagina(pagina - limite);
    }
  };

  
  return (
    <>
      <button
        className="btn btn-outline-success btn-pgn"
        onClick={prevPag}
        disabled={pagina === 0 ? true : false}
      >
        <i className="fa fa-chevron-left"></i>
      </button>
      <button
        className="btn btn-outline-success ms-2 btn-pgn"
        disabled={total - (pagina + limite) <= 0 ? true : false}
        onClick={nextPag}
      >
        <i className="fa fa-chevron-right"></i>
      </button>
    </>
  );
};

export default BtnPaginacion;