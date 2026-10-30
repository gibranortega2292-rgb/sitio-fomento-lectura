import React from "react";

function Inicio(props) {
  return (
    <section>
      <div className="bienvenida">
        <h2>Bienvenido a Lectura para todos</h2>
        <p>
          Somos un sitio sin fines de lucro que quiere fomentar el hábito de la
          lectura en estudiantes de todas las edades en México. Todo el material
          es gratuito.
        </p>
        <button className="boton" onClick={() => props.cambiarSeccion("biblioteca")}>
          Empezar a leer
        </button>
      </div>

      <div className="tarjetas">
        <div className="tarjeta">
          <h3>Biblioteca</h3>
          <p>Artículos y cuentos cortos para leer en cualquier momento.</p>
          <button className="boton" onClick={() => props.cambiarSeccion("biblioteca")}>
            Ver biblioteca
          </button>
        </div>
        <div className="tarjeta">
          <h3>Libros de dominio público</h3>
          <p>Clásicos de la literatura que puedes leer completos y gratis.</p>
          <button className="boton" onClick={() => props.cambiarSeccion("libros")}>
            Ver libros
          </button>
        </div>
      </div>
    </section>
  );
}

export default Inicio;
