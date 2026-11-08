import React, { useState } from "react";

// RF-03 Registro e inicio de sesion.
// Los usuarios se guardan en el navegador (localStorage) porque todavia no hay servidor.
function leerUsuarios() {
  return JSON.parse(localStorage.getItem("usuarios") || "[]");
}

function Cuenta(props) {
  const [modo, setModo] = useState("entrar");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  if (props.usuario) {
    return (
      <section className="formulario">
        <h2>Hola, {props.usuario.nombre}</h2>
        <p>Ya iniciaste sesión con {props.usuario.correo}. Ahora puedes comentar en el foro.</p>
        <button className="boton" onClick={props.cerrarSesion}>
          Cerrar sesión
        </button>
      </section>
    );
  }

  const enviar = (e) => {
    e.preventDefault();
    const usuarios = leerUsuarios();
    const existe = usuarios.find((u) => u.correo === correo.toLowerCase());

    if (modo === "registro") {
      if (!nombre || !correo.includes("@")) {
        setMensaje("Escribe tu nombre y un correo válido.");
      } else if (existe) {
        setMensaje("Ese correo ya está registrado, mejor inicia sesión.");
      } else {
        const nuevo = { nombre: nombre, correo: correo.toLowerCase() };
        localStorage.setItem("usuarios", JSON.stringify([...usuarios, nuevo]));
        props.iniciarSesion(nuevo);
      }
    } else if (existe) {
      props.iniciarSesion(existe);
    } else {
      setMensaje("No encontramos ese correo. Primero crea tu cuenta.");
    }
  };

  return (
    <section className="formulario">
      <h2>{modo === "registro" ? "Crear cuenta" : "Iniciar sesión"}</h2>
      <form onSubmit={enviar}>
        {modo === "registro" && (
          <input
            className="buscador"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        )}
        <input
          className="buscador"
          type="email"
          placeholder="Tu correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        {mensaje && <p className="aviso">{mensaje}</p>}
        <button className="boton" type="submit">
          {modo === "registro" ? "Crear cuenta" : "Entrar"}
        </button>
      </form>
      <button
        className="boton-regresar"
        onClick={() => {
          setModo(modo === "registro" ? "entrar" : "registro");
          setMensaje("");
        }}
      >
        {modo === "registro" ? "Ya tengo cuenta" : "No tengo cuenta, quiero registrarme"}
      </button>
    </section>
  );
}

export default Cuenta;
