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
const rey = new Rey("Joffrey Baratheon", "Baratheon", 20, "vivo", 5);
const luchador = new Luchador("Jamie Lannister", "Lannister", 32, "vivo", "lanza", 10);
const luchadora = new Luchador("Daenerys Targaryen", "Targaryen", 18, "vivo", "espada", 6);
const asesor = new Asesor("Tyrion Lannister", "Lannister", 50, "vivo", luchadora);
const escudero = new Escudero("Bronn", "No tiene familia", 21, "vivo", luchador, 8);

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
