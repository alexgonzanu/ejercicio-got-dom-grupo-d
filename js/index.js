class Personajes {
  nombre;
  familia;
  edad;
  estado;
  static serie = "Juego de tronos";

  constructor(name, family, age, status) {
    this.nombre = name;
    this.familia = family;
    this.edad = age;
    this.estado = status;
  }

  comunicar() {
    return "";
  }

  morir() {
    return this.estado = "muerto";
  }
}

class Rey extends Personajes {
  añosReinado;

  constructor(nombre, family, age, status, years) {
    super(nombre, family, age, status);
    this.añosReinado = years;
  }

  comunicar() {
    return "Vais a morir todos"
  }
}

class Luchador extends Personajes {
  arma;
  destrezaLuchador;

  constructor(nombre, family, age, status, weapon, skill) {
    super(nombre, family, age, status);
    this.arma = weapon;
    this.destrezaLuchador = skill;
  }

  comunicar() {
    return "Primero pego y luego pregunto";
  }

  set destreza(numero) {
    if (numero < 1) {
      numero = 1;
    } else if (numero > 10) {
      numero = 10;
    }
  }
}

class Asesor extends Personajes {
  personajeAlQueAsesora;

  constructor(nombre, family, age, status, adviser) {
    super(nombre, family, age, status);
    this.personajeAlQueAsesora = adviser;
  }

  comunicar() {
    return "No sé por qué, pero creo que voy a morir pronto";
  }
}

class Escudero extends Personajes {
  personajeAlQueSirve;
  gradoPelotismo;

  constructor(nombre, family, age, status, characterServes, pelota) {
    super(nombre, family, age, status);
    this.personajeAlQueSirve = characterServes;
    this.gradoPelotismo = pelota;
  }

  set pelotismo(numero) {
    if (numero < 1) {
      numero = 1;
    } else if (numero > 10) {
      numero = 10;
    }
  }

  comunicar() {
    return "Soy un loser";
  }
}

// Función 2
const rey = new Rey("Joffrey", "Baratheon", 20, "vivo", 5);
const luchador = new Luchador("Jamie", "Lannister", 32, "vivo", "lanza", 10);
const luchadora = new Luchador("Daenerys", "Targaryen", 18, "vivo", "espada", 6);
const asesor = new Asesor("Tyrion", "Lannister", 50, "vivo", luchadora);
const escudero = new Escudero("Bronn", "", 21, "vivo", luchador, 8);

// Función 3
const personajes = [rey, luchador, luchadora, asesor, escudero];
console.log(personajes);

// Función 4
const comunicado = personajes.map(personaje => personaje.comunicar()).filter((personaje, i, personajes) => personajes.indexOf(personaje) === i)

//Función 5
console.log(Personajes.serie);
//Función 6
console.log(comunicado);
// Función 7
luchador.morir();
asesor.morir();

//Funcion 8
const resumenPersonajes = elementos =>
  elementos.map(personaje => personaje.constructor.name)
    .filter((tipo, i, tipos) => tipos.indexOf(tipo) === i)
    .map(tipo => ({
      tipo,
      personaje: elementos.filter(equipo => equipo.constructor.name === tipo)
    }));

console.log(resumenPersonajes(personajes));

// PARTE DEL DOOM

const fotoPersonajes = (nombre, img) => {
  switch (nombre) {
    case "joffrey":
      img.src = "img/joffrey.jpg";
      img.alt = "Imagen de Joffrey con la corona del rey";
      break;
    case "jamie":
      img.src = "img/jamie.jpg";
      img.alt = "Imagen de Jamie con su atuendo de luchador y caballo";
      break;
    case "daenerys":
      img.src = "img/daenerys.jpg";
      img.alt = "Imagen de Daenerys con su atuendo de luchadora";
      break;
    case "tyrion":
      img.src = "img/tyrion.jpg";
      img.alt = "Imagen del pequeño Tyron";
      break;
    case "bronn":
      img.src = "img/bronn.jpg";
      img.alt = "Imagen de Bronn posando como escudero";
      break;
    default:
      img.src = "img/no-one.jpg";
      img.alt = "Imagen para un futuro personaje";
      break;
  }
}

const liBase = document.querySelector(".personaje-dummy");
const imagenPersonaje = document.querySelector(".card-img-top");
const nombrePersonaje = document.querySelector(".nombre");
const edadPersonaje = document.querySelector(".info > .metadata").firstElementChild;
const estadoPersonaje = document.querySelector(".ocultarOrNo");

const infoPrincipal = personaje => {
  nombrePersonaje.textContent = `${personaje.nombre} ${personaje.familia}`;
  edadPersonaje.textContent = `Edad: ${personaje.edad} años`;
  if (personaje.estado === "vivo") {
    estadoPersonaje.firstElementChild.style.visibility = "hidden";
    estadoPersonaje.lastElementChild.style.visibility = "visible";
  } else {
    estadoPersonaje.lastElementChild.style.visibility = "hidden";
    estadoPersonaje.firstElementChild.style.visibility = "visible";
  }
}

const funcionPrincipal = () => {
  for (const personaje of personajes) {
    const nuevoLiPersonaje = liBase.cloneNode(true);
    nuevoLiPersonaje.classList.remove("personaje-dummy");
    fotoPersonajes(personaje.nombre.toLowerCase(), imagenPersonaje);
    infoPrincipal(personaje);
    document.querySelector(".personajes").append(nuevoLiPersonaje);
  }
}

funcionPrincipal();


