// 1. Booleanos

let booleano1 = true;
let booleano2 = false;

let booleanoAnd = booleano1 && booleano2;

let booleanoOr = booleano1 || booleano2;

let booleanoNot = !booleano1;

let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

// 2. Operadores

let valorDivision = 17 / 3;

console.log(valorDivision.toFixed(2));

let valorResto = 17 % 7;
console.log(valorResto);

// 3. Logica de programación

let a = 9;
let b = '9';

if (a == b) {
    console.log('Son iguales');
} else {
    console.log('No son iguales');
}

let mochila = ['piedras', 'lapiz', 'ordenador', 'cargador', 'raton', 'credencial', 'llaves'];
if (mochila.length > 10) {
    console.log('No puedes cargar tantas cosas cra crack');
} else if (mochila.length < 10 && mochila.length >= 2) {
    console.log('Que bien voy con mi mochila');
} else {
    console.log('Creo que no necisto mochila');
}

for (let contarHasta10 = 0; contarHasta10 <= 10; contarHasta10++) {
    console.log(contarHasta10);
}

let diaFestivo = true;
const trabajo = diaFestivo == true ? 'Hoy no trabajas' : 'A trabajar gandul!';
console.log(trabajo);

let arrayBucle = [];

for (let i = 4; i <= 18; i++) {
    arrayBucle.push(i);
}
console.log('arrayBucle', arrayBucle);

let resultado = 0;
for (let i = 0; i < arrayBucle.length; i++) {
    resultado += arrayBucle[i];
}

console.log(resultado);

let estoyPerdido = ['Con', 'Sofia', 'aprendiendo', 'bucles'];
for (const buscandome of estoyPerdido) {
    console.log(buscandome);
}

for (const buscando in estoyPerdido) {
    console.log(estoyPerdido[buscando]);
}

// Crea un bucle utilizando while que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3.

let arrayBucle2 = [];

for (let i = 1; i <= 20; i++) {
    arrayBucle2.push(i);
}
console.log(arrayBucle2);
let i = 1;
while (i <= 20) {
    i++;
    if (i % 3 === 0) {
        console.log('Patata'+i);
    }
}

// Extra 1

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

const nombres4Letras = [];

for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.length === 4) {
    nombres4Letras.push(gente[i]);
    }
}

console.log(nombres4Letras);

const nombresPorJota = [];
for (let i = 0; i < gente.length; i++) {
    if (gente[i].nombre.charAt(0) === 'J' && gente[i].edad < 40) {
        nombresPorJota.push(gente[i]);
}
}
console.log(nombresPorJota);

// Extra 2

const ordenador = {
    marca: 'La pava',
    tipo: 'portátil',
    perifericos: ['cascos', 'touchPad'],
    almacenamiento: {
        discos: ['SSD', 'HDD'],
        maestro: 0,
    }
}

// TEST 1
if (typeof ordenador === "object") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (ordenador.marca === "La pava") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (ordenador.tipo === "portátil") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (ordenador.perifericos[1] === "touchPad") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (ordenador.almacenamiento.maestro === 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }

  // Extra 3

const arr = [
    {
        name: 'pepito',
        age: 25,
    },
    {
        name: 'pepito',
        age: 50,
    },
    {
        name: 'Jose',
        age: 30,
    }
]

   // TEST 1
   if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
  } else {
    console.log("suspendes");
  }
  // TEST 2
  if (typeof arr[0] === "object") {
    console.log("apruebas2");
  } else {
    console.log("suspendes");
  }
  // TEST 3
  if (typeof arr[1] === "object") {
    console.log("apruebas3");
  } else {
    console.log("suspendes");
  }
  // TEST 4
  if (typeof arr[2] === "object") {
    console.log("apruebas4");
  } else {
    console.log("suspendes");
  }
  // TEST 5
  if (arr.length === 3) {
    console.log("apruebas5");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[0].name === arr[1].name) {
    console.log("apruebas6");
  } else {
    console.log("suspendes");
  }
  // TEST 6
  if (arr[1].name === "pepito") {
    console.log("apruebas7");
  } else {
    console.log("suspendes");
  }
  // TEST 7
  if (arr[1].age > arr[2].age) {
    console.log("apruebas8");
  } else {
    console.log("suspendes");
  }
  // TEST 8
  if (arr[0].age === 25) {
    console.log("apruebas9");
  } else {
    console.log("suspendes");
  }
  // TEST 9
  if (typeof arr[2].name === "string") {
    console.log("apruebas1");
  } else {
    console.log("suspendes");
  }
  // TEST 10
  if (arr[2].name[0] === "J") {
    console.log("apruebas2");
  } else {
    console.log("suspendes");
  }
