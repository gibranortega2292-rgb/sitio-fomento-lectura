import React, { useState } from "react";
import lecturas from "../data/lecturas";
import TarjetaLectura from "./tarjeta-lectura";

function Biblioteca(props) {
  const [categoria, setCategoria] = useState("Todas");

  const lista = lecturas.filter(
    (lectura) => categoria === "Todas" || lectura.categoria === categoria
  );

  return (
    <section>
      <h2>Biblioteca de artículos y cuentos</h2>
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
      <div className="tarjetas">
        {lista.map((lectura) => (
          <TarjetaLectura key={lectura.id} lectura={lectura} abrirLectura={props.abrirLectura} />
        ))}
      </div>
    </section>
  );
}

export default Biblioteca;
