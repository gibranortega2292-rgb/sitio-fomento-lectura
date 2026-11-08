import React from "react";
import lecturas from "../data/lecturas";
import libros from "../data/libros";
import TarjetaLectura from "./tarjeta-lectura";

// RF-17 Mis favoritos: lecturas y libros que el usuario guardo con la estrella
function Favoritos(props) {
  const lista = [...lecturas, ...libros].filter((item) => props.favoritos.includes(item.id));

  return (
    <section>
      <h2>Mis favoritos</h2>
      <p>Aquí aparecen las lecturas que guardaste con la estrella ☆. Se guardan en este navegador.</p>
      {lista.length === 0 && <p>Todavía no tienes favoritos.</p>}
      <div className="tarjetas">
        {lista.map((item) => (
          <TarjetaLectura
            key={item.id}
            lectura={item}
            abrirLectura={props.abrirLectura}
            favoritos={props.favoritos}
            alternarFavorito={props.alternarFavorito}
          />
        ))}
      </div>
    </section>
  );
}

export default Favoritos;
