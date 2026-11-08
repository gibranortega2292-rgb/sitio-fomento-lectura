// Datos de prueba de la biblioteca (Sprint 1).
// Mas adelante se pueden cargar desde una base de datos.
const lecturas = [
  {
    id: 1,
    categoria: "Artículo",
    titulo: "¿Por qué leer 20 minutos al día?",
    autor: "Equipo Lectura para todos",
    resumen: "Leer un poco cada día ayuda a aprender palabras nuevas y a concentrarse.",
    texto: [
      "Leer 20 minutos al día parece poco, pero en un año son más de 120 horas de lectura.",
      "Quien lee seguido aprende palabras nuevas sin darse cuenta, entiende mejor lo que estudia y se concentra por más tiempo.",
      "No importa si es un cuento, un artículo o un cómic. Lo importante es hacerlo un hábito.",
    ],
  },
  {
    id: 2,
    categoria: "Artículo",
    titulo: "La célula, la unidad de la vida",
    autor: "Equipo Lectura para todos",
    resumen: "Una explicación sencilla de qué es una célula y por qué es importante.",
    texto: [
      "Todos los seres vivos están formados por células. Algunos tienen una sola, como las bacterias, y otros tienen millones, como nosotros.",
      "Cada célula tiene una membrana que la protege, un citoplasma donde pasan sus reacciones y, en muchos casos, un núcleo donde guarda su información genética.",
      "Cuando un médico estudia un tejido en el microscopio, lo que observa son células. Así se pueden detectar enfermedades.",
    ],
  },
  {
    id: 3,
    categoria: "Cuento",
    titulo: "La liebre y la tortuga",
    autor: "Esopo (versión libre)",
    resumen: "Una fábula clásica sobre la constancia.",
    texto: [
      "Una liebre se burlaba de una tortuga porque caminaba muy lento. La tortuga, cansada de las burlas, la retó a una carrera.",
      "La liebre salió corriendo y, como iba muy adelante, decidió dormir un rato bajo un árbol.",
      "La tortuga siguió caminando sin parar. Cuando la liebre despertó, la tortuga ya estaba cruzando la meta.",
      "Moraleja: poco a poco y sin rendirse se llega más lejos.",
    ],
  },
  {
    id: 4,
    categoria: "Cuento",
    titulo: "La zorra y las uvas",
    autor: "Esopo (versión libre)",
    resumen: "Una fábula corta sobre las excusas.",
    texto: [
      "Una zorra con hambre vio unas uvas que colgaban de una parra muy alta.",
      "Saltó muchas veces para alcanzarlas, pero no pudo. Al final se fue diciendo: «De todas formas estaban verdes».",
      "Moraleja: a veces despreciamos lo que no podemos conseguir.",
    ],
  },
];

export default lecturas;
