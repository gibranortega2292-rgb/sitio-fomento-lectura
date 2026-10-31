import React from "react";

function Menu(props) {
  const opciones = [
    { id: "inicio", texto: "Inicio" },
    { id: "biblioteca", texto: "Biblioteca" },
    { id: "libros", texto: "Libros de dominio público" },
    { id: "multimedia", texto: "Videos y juegos" },
    { id: "podcasts", texto: "Podcasts" },
    { id: "bibliotecas", texto: "Bibliotecas" },
    { id: "agenda", texto: "Agenda" },
    { id: "foro", texto: "Foro" },
    // RF-03 si hay sesion se muestra el nombre del usuario
    { id: "cuenta", texto: props.usuario ? "👤 " + props.usuario.nombre : "Iniciar sesión" },
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
