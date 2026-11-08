// Catalogo de libros de dominio publico (Sprint 1).
// El texto completo se consulta en Wikisource, aqui solo va el inicio.
const libros = [
  {
    id: 101,
    categoria: "Novela",
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    anio: 1605,
    resumen: "Un hidalgo que leyó tantos libros de caballería que decidió volverse caballero.",
    texto: [
      "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor.",
    ],
    fuente: "Wikisource",
    enlace: "https://es.wikisource.org/w/index.php?search=Don+Quijote+de+la+Mancha",
  },
  {
    id: 102,
    categoria: "Novela",
    titulo: "Clemencia",
    autor: "Ignacio Manuel Altamirano",
    anio: 1869,
    resumen: "Novela mexicana que pasa en Guadalajara durante la Intervención francesa.",
    texto: [
      "Novela del escritor mexicano Ignacio Manuel Altamirano, considerada una de las primeras novelas modernas de México.",
    ],
    fuente: "Wikisource",
    enlace: "https://es.wikisource.org/w/index.php?search=Clemencia+Altamirano",
  },
  {
    id: 103,
    categoria: "Novela",
    titulo: "María",
    autor: "Jorge Isaacs",
    anio: 1867,
    resumen: "Una de las novelas románticas más leídas de América Latina.",
    texto: [
      "Novela del escritor colombiano Jorge Isaacs. Cuenta la historia de amor entre Efraín y María.",
    ],
    fuente: "Wikisource",
    enlace: "https://es.wikisource.org/w/index.php?search=María+Jorge+Isaacs",
  },
  {
    id: 104,
    categoria: "Novela",
    titulo: "Viaje al centro de la Tierra",
    autor: "Julio Verne",
    anio: 1864,
    resumen: "Un profesor, su sobrino y un guía bajan por un volcán hacia el centro del planeta.",
    texto: [
      "Novela de aventuras y ciencia ficción del escritor francés Julio Verne.",
    ],
    fuente: "Wikisource",
    enlace: "https://es.wikisource.org/w/index.php?search=Viaje+al+centro+de+la+Tierra",
  },
  {
    id: 105,
    categoria: "Novela",
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    anio: 1818,
    resumen: "Un científico logra dar vida a un ser hecho con partes de cuerpos.",
    texto: [
      "Novela de la escritora inglesa Mary Shelley, considerada una de las primeras obras de ciencia ficción.",
    ],
    fuente: "Wikisource",
    enlace: "https://es.wikisource.org/w/index.php?search=Frankenstein+Shelley",
  },
];

export default libros;
