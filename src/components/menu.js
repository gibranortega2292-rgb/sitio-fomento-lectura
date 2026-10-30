import React from "react";

function Menu(props) {
  const opciones = [
    { id: "inicio", texto: "Inicio" },
    { id: "biblioteca", texto: "Biblioteca" },
    { id: "libros", texto: "Libros de dominio público" },
  ];

  return (
    <header className="menu">
      <h1 className="logo">📚 Lectura para todos</h1>
      <nav>
        {opciones.map((opcion) => (
          <button
            key={opcion.id}
            className={props.seccion === opcion.id ? "boton-menu activo" : "boton-menu"}
            onClick={() => props.cambiarSeccion(opcion.id)}
          >
            {opcion.texto}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Menu;
