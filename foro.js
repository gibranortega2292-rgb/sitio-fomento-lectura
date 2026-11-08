import React, { useState } from "react";

// RF-14 Foro de comentarios sobre las lecturas.
// Los comentarios se guardan en el navegador, igual que las cuentas (RF-03).
function Foro(props) {
  const [comentarios, setComentarios] = useState(
    JSON.parse(localStorage.getItem("comentarios") || "[]")
  );
  const [texto, setTexto] = useState("");

  const publicar = (e) => {
    e.preventDefault();
    if (!texto.trim()) return;
    const nuevo = {
      id: Date.now(),
      nombre: props.usuario.nombre,
      correo: props.usuario.correo,
      fecha: new Date().toLocaleDateString("es-MX"),
      texto: texto,
    };
    const lista = [nuevo, ...comentarios];
    setComentarios(lista);
    localStorage.setItem("comentarios", JSON.stringify(lista));
    setTexto("");
  };

  // moderacion basica: cada usuario puede borrar sus propios comentarios
  const borrar = (id) => {
    const lista = comentarios.filter((c) => c.id !== id);
    setComentarios(lista);
    localStorage.setItem("comentarios", JSON.stringify(lista));
  };

  return (
    <section>
      <h2>Foro de la comunidad</h2>
      <p>Comparte qué estás leyendo y qué te pareció.</p>

      {props.usuario ? (
        <form className="formulario" onSubmit={publicar}>
          <textarea
            className="buscador"
            rows="3"
            placeholder="Escribe tu comentario..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <button className="boton" type="submit">
            Publicar
          </button>
        </form>
      ) : (
        <p className="aviso">
          Para comentar necesitas{" "}
          <button className="boton-regresar" onClick={props.irACuenta}>
            iniciar sesión
          </button>
          .
        </p>
      )}

      {comentarios.length === 0 && <p>Todavía no hay comentarios. ¡Sé el primero!</p>}
      {comentarios.map((c) => (
        <div className="comentario" key={c.id}>
          <p className="autor">
            {c.nombre} · {c.fecha}
          </p>
          <p>{c.texto}</p>
          {props.usuario && props.usuario.correo === c.correo && (
            <button className="boton-regresar" onClick={() => borrar(c.id)}>
              Borrar
            </button>
          )}
        </div>
      ))}
    </section>
  );
}

export default Foro;
