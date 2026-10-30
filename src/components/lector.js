import React, { useEffect, useState } from "react";

function Lector(props) {
  const lectura = props.lectura;
  // RF-08 tamaño y tipo de letra
  const [tamano, setTamano] = useState(18);
  const [tipoLetra, setTipoLetra] = useState("sans");
  // RF-07 (en curso) lectura en voz alta con la voz del navegador
  const [leyendo, setLeyendo] = useState(false);

  // si el usuario sale del lector se detiene la voz
  useEffect(() => {
    return () => window.speechSynthesis && window.speechSynthesis.cancel();
  }, []);

  const escuchar = () => {
    if (!window.speechSynthesis) {
      alert("Tu navegador no puede leer en voz alta.");
      return;
    }
    const voz = new SpeechSynthesisUtterance(lectura.titulo + ". " + lectura.texto.join(" "));
    voz.lang = "es-MX";
    voz.onend = () => setLeyendo(false);
    window.speechSynthesis.speak(voz);
    setLeyendo(true);
  };

  const detener = () => {
    window.speechSynthesis.cancel();
    setLeyendo(false);
  };

  return (
    <article
      className={tipoLetra === "serif" ? "lector letra-serif" : "lector"}
      style={{ fontSize: tamano + "px" }}
    >
      <button className="boton-regresar" onClick={props.regresar}>
        ← Regresar
      </button>

      <div className="controles">
        <button className="boton-control" onClick={() => setTamano(Math.max(14, tamano - 2))}>
          A-
        </button>
        <button className="boton-control" onClick={() => setTamano(Math.min(28, tamano + 2))}>
          A+
        </button>
        <button
          className="boton-control"
          onClick={() => setTipoLetra(tipoLetra === "sans" ? "serif" : "sans")}
        >
          {tipoLetra === "sans" ? "Letra con serifa" : "Letra sin serifa"}
        </button>
        {/* RF-09 se guarda como PDF con la opcion de imprimir del navegador */}
        <button className="boton-control" onClick={() => window.print()}>
          ⬇ Descargar PDF
        </button>
        {leyendo ? (
          <button className="boton-control" onClick={detener}>
            ■ Detener
          </button>
        ) : (
          <button className="boton-control" onClick={escuchar}>
            🔊 Escuchar
          </button>
        )}
      </div>

      <h2>{lectura.titulo}</h2>
      <p className="autor">
        {lectura.autor}
        {lectura.anio ? " · " + lectura.anio : ""}
      </p>
      {lectura.texto.map((parrafo, i) => (
        <p key={i}>{parrafo}</p>
      ))}
      {lectura.enlace && (
        <a className="boton" href={lectura.enlace} target="_blank" rel="noreferrer">
          Leer el libro completo en {lectura.fuente}
        </a>
      )}
    </article>
  );
}

export default Lector;
