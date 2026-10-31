import React, { useState } from "react";
import bibliotecas from "../data/bibliotecas";

// RF-12 Directorio de bibliotecas publicas con filtro por estado
function Bibliotecas() {
  const [estado, setEstado] = useState("Todos");
  const estados = ["Todos", ...new Set(bibliotecas.map((b) => b.estado))];

  const lista = bibliotecas.filter((b) => estado === "Todos" || b.estado === estado);

  return (
    <section>
      <h2>Directorio de bibliotecas públicas</h2>
      <div className="categorias">
        {estados.map((e) => (
          <button
            key={e}
            className={estado === e ? "boton-categoria activo" : "boton-categoria"}
            onClick={() => setEstado(e)}
          >
            {e}
          </button>
        ))}
      </div>
      <div className="tarjetas">
        {lista.map((b) => (
          <div className="tarjeta" key={b.id}>
            <span className="etiqueta">{b.estado}</span>
            <h3>{b.nombre}</h3>
            <p className="autor">{b.ciudad}</p>
            <a
              className="boton"
              href={"https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(b.nombre + " " + b.ciudad)}
              target="_blank"
              rel="noreferrer"
            >
              Ver en el mapa
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Bibliotecas;
