import React, { useState } from "react";
import libros from "../data/libros";
import TarjetaLectura from "./tarjeta-lectura";
import Buscador, { coincide } from "./buscador";

function Libros(props) {
  // RF-06 texto que escribe el usuario en el buscador
  const [texto, setTexto] = useState("");

  const lista = libros.filter((libro) => coincide(libro, texto));

  return (
    <section>
      <h2>Libros de dominio público</h2>
      <p>Estos libros ya no tienen derechos de autor, así que se pueden leer completos y gratis.</p>
      <Buscador texto={texto} cambiarTexto={setTexto} />
      {lista.length === 0 && <p>No se encontraron libros.</p>}
      <div className="tarjetas">
        {lista.map((libro) => (
          <TarjetaLectura key={libro.id} lectura={libro} abrirLectura={props.abrirLectura} />
        ))}
      </div>
    </section>
  );
}

export default Libros;
