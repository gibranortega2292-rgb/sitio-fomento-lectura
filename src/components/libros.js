import React from "react";
import libros from "../data/libros";
import TarjetaLectura from "./tarjeta-lectura";

function Libros(props) {
  return (
    <section>
      <h2>Libros de dominio público</h2>
      <p>Estos libros ya no tienen derechos de autor, así que se pueden leer completos y gratis.</p>
      <div className="tarjetas">
        {libros.map((libro) => (
          <TarjetaLectura key={libro.id} lectura={libro} abrirLectura={props.abrirLectura} />
        ))}
      </div>
    </section>
  );
}

export default Libros;
