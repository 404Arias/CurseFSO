import React from "react";
import "../hojas-de-estilo/estadisticas.css";
function Estadisticas({ texto, valor }) {
  return (
    <div className="estadisticas">
      <p>
        {texto} : {valor}
      </p>
    </div>
  );
}

export default Estadisticas;
