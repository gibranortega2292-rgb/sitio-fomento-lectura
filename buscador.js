import React from "react";

// RF-06 Buscador: caja de texto para buscar por titulo o autor
function Buscador(props) {
  return (
    <input
      className="buscador"
      type="text"
      placeholder="Buscar por título o autor..."
      value={props.texto}
      onChange={(e) => props.cambiarTexto(e.target.value)}
    />
  );
}

// regresa true si la lectura coincide con lo que se escribio
export function coincide(lectura, texto) {
  const buscado = texto.toLowerCase();
  return (
    lectura.titulo.toLowerCase().includes(buscado) ||
    lectura.autor.toLowerCase().includes(buscado)
  );
}

export default Buscador;
