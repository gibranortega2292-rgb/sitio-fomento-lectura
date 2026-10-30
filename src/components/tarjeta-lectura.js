import React from "react";

function TarjetaLectura(props) {
  const lectura = props.lectura;
  return (
    <div className="tarjeta">
      <span className="etiqueta">{lectura.categoria}</span>
      <h3>{lectura.titulo}</h3>
      <p className="autor">
        {lectura.autor}
        {lectura.anio ? " · " + lectura.anio : ""}
      </p>
      <p>{lectura.resumen}</p>
      <button className="boton" onClick={() => props.abrirLectura(lectura)}>
        Leer
      </button>
    </div>
  );
}

export default TarjetaLectura;
