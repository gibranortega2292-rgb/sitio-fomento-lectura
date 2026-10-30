import React, { useState } from "react";
import "./App.css";
import Menu from "./components/menu";
import Inicio from "./components/inicio";
import Biblioteca from "./components/biblioteca";
import Libros from "./components/libros";
import Lector from "./components/lector";
import Multimedia from "./components/multimedia";
import PiePagina from "./components/pie-pagina";

function App() {
  // seccion que se muestra: inicio, biblioteca, libros o multimedia
  const [seccion, setSeccion] = useState("inicio");
  // lectura que el usuario abrio para leer
  const [lectura, setLectura] = useState(null);

  const cambiarSeccion = (nueva) => {
    setLectura(null);
    setSeccion(nueva);
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
  } else {
    contenido = <Inicio cambiarSeccion={cambiarSeccion} />;
  }

  return (
    <div className="app">
      <Menu seccion={seccion} cambiarSeccion={cambiarSeccion} />
      <main className="contenido">{contenido}</main>
      <PiePagina />
    </div>
  );
}

export default App;
