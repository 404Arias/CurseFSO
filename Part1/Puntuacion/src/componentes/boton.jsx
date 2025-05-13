import React from "react";
import "../hojas-de-estilo/boton.css";

function Boton({ texto, manejarClick }) {
  return (
    <button onClick={manejarClick} className="Boton">
      {texto}
    </button>
  );
}

export default Boton;
