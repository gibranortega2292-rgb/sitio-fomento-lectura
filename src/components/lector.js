import React from "react";

function Lector(props) {
  const lectura = props.lectura;
  return (
    <article className="lector">
      <button className="boton-regresar" onClick={props.regresar}>
        ← Regresar
      </button>
      <h2>{lectura.titulo}</h2>
      <p className="autor">
        {lectura.autor}
        {lectura.anio ? " · " + lectura.anio : ""}
      </p>
      {lectura.texto.map((parrafo, i) => (
        <p key={i}>{parrafo}</p>
      ))}
      {lectura.enlace && (
        <a className="boton" href={lectura.enlace} target="_blank" rel="noreferrer">
          Leer el libro completo en {lectura.fuente}
        </a>
      )}
    </article>
  );
}

export default Lector;
