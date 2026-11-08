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
import Favoritos from "./components/favoritos";
import PiePagina from "./components/pie-pagina";

function App() {
  // seccion que se muestra en la pagina
  const [seccion, setSeccion] = useState("inicio");
  // lectura que el usuario abrio para leer
  const [lectura, setLectura] = useState(null);
  // RF-03 usuario con sesion iniciada (se guarda en el navegador)
  const [usuario, setUsuario] = useState(
    JSON.parse(localStorage.getItem("sesion") || "null")
  );

  // RF-16 modo oscuro (se recuerda en el navegador)
  const [oscuro, setOscuro] = useState(localStorage.getItem("modo") === "oscuro");
  // RF-17 ids de las lecturas favoritas
  const [favoritos, setFavoritos] = useState(
    JSON.parse(localStorage.getItem("favoritos") || "[]")
  );

  const cambiarModo = () => {
    localStorage.setItem("modo", oscuro ? "claro" : "oscuro");
    setOscuro(!oscuro);
  };

  const alternarFavorito = (id) => {
    const nuevos = favoritos.includes(id)
      ? favoritos.filter((f) => f !== id)
      : [...favoritos, id];
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
    setFavoritos(nuevos);
  };

  const propsFavoritos = { favoritos, alternarFavorito };

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
    contenido = <Biblioteca abrirLectura={setLectura} {...propsFavoritos} />;
  } else if (seccion === "libros") {
    contenido = <Libros abrirLectura={setLectura} {...propsFavoritos} />;
  } else if (seccion === "favoritos") {
    contenido = <Favoritos abrirLectura={setLectura} {...propsFavoritos} />;
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
    <div className={oscuro ? "app oscuro" : "app"}>
      <Menu
        seccion={seccion}
        cambiarSeccion={cambiarSeccion}
        usuario={usuario}
        oscuro={oscuro}
        cambiarModo={cambiarModo}
      />
      <main className="contenido">{contenido}</main>
      <PiePagina />
    </div>
  );
}

export default App;
