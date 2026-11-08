import React from "react";
import podcasts from "../data/podcasts";

// RF-11 Podcasts y musica relacionados con la lectura
function Podcasts() {
  return (
    <section>
      <h2>Podcasts y música</h2>
      <p>Escucha programas de libros o música tranquila para leer. Se abren en otra pestaña.</p>
      <div className="tarjetas">
        {podcasts.map((item) => (
          <div className="tarjeta" key={item.id}>
            <span className="etiqueta">{item.categoria}</span>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <a className="boton" href={item.enlace} target="_blank" rel="noreferrer">
              Escuchar
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Podcasts;
