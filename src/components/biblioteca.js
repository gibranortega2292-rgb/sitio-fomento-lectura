import React, { useState } from "react";
import lecturas from "../data/lecturas";
import TarjetaLectura from "./tarjeta-lectura";
import Buscador, { coincide } from "./buscador";

function Biblioteca(props) {
  const [categoria, setCategoria] = useState("Todas");
  // RF-06 texto que escribe el usuario en el buscador
  const [texto, setTexto] = useState("");

  const lista = lecturas.filter(
    (lectura) =>
      (categoria === "Todas" || lectura.categoria === categoria) &&
      coincide(lectura, texto)
  );

  return (
    <section>
      <h2>Biblioteca de artículos y cuentos</h2>
      <Buscador texto={texto} cambiarTexto={setTexto} />
      <div className="categorias">
        {["Todas", "Artículo", "Cuento"].map((cat) => (
          <button
            key={cat}
            className={categoria === cat ? "boton-categoria activo" : "boton-categoria"}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      {lista.length === 0 && <p>No se encontraron lecturas.</p>}
      <div className="tarjetas">
        {lista.map((lectura) => (
          <TarjetaLectura key={lectura.id} lectura={lectura} abrirLectura={props.abrirLectura} />
        ))}
      </div>
    </section>
  );
}

export default Biblioteca;
