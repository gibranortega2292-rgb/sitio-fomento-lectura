import React from "react";
import agenda from "../data/agenda";

// RF-13 Agenda de actividades de fomento a la lectura
function Agenda() {
  return (
    <section>
      <h2>Agenda de actividades</h2>
      <div className="tarjetas">
        {agenda.map((a) => (
          <div className="tarjeta" key={a.id}>
            <span className="etiqueta">{a.fecha}</span>
            <h3>{a.titulo}</h3>
            <p className="autor">
              {a.hora} · {a.lugar}
            </p>
            <p>{a.descripcion}</p>
            {a.enlace && (
              <a className="boton" href={a.enlace} target="_blank" rel="noreferrer">
                Más información
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Agenda;
