import React, { useState } from "react";

function Menu(props) {
  // RF-15 en celular el menu se abre y se cierra con el boton ☰
  const [abierto, setAbierto] = useState(false);

  const opciones = [
    { id: "inicio", texto: "Inicio" },
    { id: "biblioteca", texto: "Biblioteca" },
    { id: "libros", texto: "Libros de dominio público" },
    { id: "favoritos", texto: "★ Mis favoritos" },
    { id: "multimedia", texto: "Videos y juegos" },
    { id: "podcasts", texto: "Podcasts" },
    { id: "bibliotecas", texto: "Bibliotecas" },
    { id: "agenda", texto: "Agenda" },
    { id: "foro", texto: "Foro" },
    // RF-03 si hay sesion se muestra el nombre del usuario
    { id: "cuenta", texto: props.usuario ? "👤 " + props.usuario.nombre : "Iniciar sesión" },
  ];

  const elegir = (id) => {
    props.cambiarSeccion(id);
    setAbierto(false);
  };

  return (
    <header className="menu">
      <h1 className="logo">📚 Lectura para todos</h1>
      <button className="boton-hamburguesa" onClick={() => setAbierto(!abierto)}>
        {abierto ? "✕" : "☰"}
      </button>
      <nav className={abierto ? "abierto" : ""}>
        {opciones.map((opcion) => (
          <button
            key={opcion.id}
            className={props.seccion === opcion.id ? "boton-menu activo" : "boton-menu"}
            onClick={() => elegir(opcion.id)}
          >
            {opcion.texto}
          </button>
        ))}
        {/* RF-16 boton para cambiar entre modo claro y oscuro */}
        <button
          className="boton-menu"
          title={props.oscuro ? "Modo claro" : "Modo oscuro"}
          onClick={props.cambiarModo}
        >
          {props.oscuro ? "☀" : "🌙"}
          <span className="solo-celular">{props.oscuro ? " Modo claro" : " Modo oscuro"}</span>
        </button>
      </nav>
    </header>
  );
}

export default Menu;
