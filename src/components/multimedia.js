import React from "react";
import multimedia from "../data/multimedia";

// RF-10 Videos educativos y enlaces a videojuegos educativos
function Multimedia() {
  return (
    <section>
      <h2>Videos y juegos educativos</h2>
      <p>Material para complementar lo que lees. Los enlaces se abren en otra pestaña.</p>
      <div className="tarjetas">
        {multimedia.map((item) => (
          <div className="tarjeta" key={item.id}>
            <span className="etiqueta">{item.categoria}</span>
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
            <a className="boton" href={item.enlace} target="_blank" rel="noreferrer">
              {item.categoria === "Video" ? "Ver videos" : "Jugar"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Multimedia;
