import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu";
import Inicio from "./components/inicio";
import Biblioteca from "./components/biblioteca";
import Libros from "./components/libros";
import Lector from "./components/lector";
import Multimedia from "./components/multimedia";
import Podcasts from "./components/podcasts";
import Bibliotecas from "./components/bibliotecas";
import Agenda from "./components/agenda";
import Foro from "./components/foro";
import Cuenta from "./components/cuenta";
import PiePagina from "./components/pie-pagina";

function App() {
  const [seccion, setSeccion] = useState("inicio");
  const [lectura, setLectura] = useState(null);
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("sesion") || "null")
  );

  const cambiarSeccion = (nueva) => {
    setLectura(null);
    setSeccion(nueva);
  };

  const iniciarSesion = (datos) => {
    localStorage.setItem("sesion", JSON.stringify(datos));
    setUsuario(datos);
  };

  const cerrarSesion = () => {
    localStorage.removeItem("sesion");
    setUsuario(null);
  };

  let contenido;
  if (lectura) {
    contenido = <Lector lectura={lectura} regresar={() => setLectura(null)} />;
  } else if (seccion === "biblioteca") {
    contenido = <Biblioteca abrirLectura={setLectura} />;
  } else if (seccion === "libros") {
    contenido = <Libros abrirLectura={setLectura} />;
  } else if (seccion === "multimedia") {
    contenido = <Multimedia />;
  } else if (seccion === "podcasts") {
    contenido = <Podcasts />;
  } else if (seccion === "bibliotecas") {
    contenido = <Bibliotecas />;
  } else if (seccion === "agenda") {
    contenido = <Agenda />;
  } else if (seccion === "foro") {
    contenido = <Foro usuario={usuario} irACuenta={() => cambiarSeccion("cuenta")} />;
  } else if (seccion === "cuenta") {
    contenido = <Cuenta usuario={usuario} iniciarSesion={iniciarSesion} cerrarSesion={cerrarSesion} />;
  } else {
    contenido = <Inicio cambiarSeccion={cambiarSeccion} />;
  }

  return (
    <div className="app">
      <Menu seccion={seccion} cambiarSeccion={cambiarSeccion} usuario={usuario} />
      <main className="contenido">{contenido}</main>
      <PiePagina />
    </div>
  );
}

export default App;
