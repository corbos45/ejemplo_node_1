const inquirer = require('@inquirer/prompts');

const { select, Separator, input } = inquirer;


class Person {

  // Inicializa una nueva instancia de la clase.
  // @param {string} name - El nombre del objeto.
  // @param {number} age - La edad del objeto.

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {

  // Función constructora para crear una instancia de la clase.
  // @param {string} name - El nombre de la instancia.
  // @param {number} age - La edad de la instancia.

  constructor(name, age) {
    super(name, age);
    this.note = 0;
  }


  // Obtiene los detalles del objeto.
  // @return {string} Los detalles del objeto.

  getDetails() {
    return `${this.name} tiene ${this.age} años de edad y su nota es ${this.note}`;
  }
}

class School {


  // +    Inicializa una nueva instancia de la clase.
  // +   
  // +    @param {type} paramName - descripción del parámetro
  // +    @return {type} descripción del valor de retorno  
  constructor() {
    this.students = [];
  }


  // Agrega un estudiante a la lista de estudiantes.
  // @param {any} student - El objeto del estudiante que se va a agregar.

  addStudent(student) {
    this.students.push(student);
  }


  // Obtiene los detalles de todos los estudiantes y los devuelve como una cadena de texto.
  // @return {string} - Los detalles de todos los estudiantes.

  getDetails() {
    return this.students.map((student) = student.getDetails()).join(n);
  }
}


// Crea un nuevo objeto estudiante con el nombre y la edad proporcionados.

// @return {Student} El objeto estudiante recién creado.

// Este código define una función asíncrona llamada createStudent que solicita
// al usuario que ingrese el nombre y la edad de un estudiante. Luego crea un 
// nuevo objeto Student con el nombre y la edad proporcionados, y lo devuelve.

async function createStudent() {
  const name = await input({
    message: ' ingrese el nombre del estudiante',
  });
  const age = await input({
    message: 'ingrese la edad del estudiante',
  });

  return new Student(name, age);
}


// Obtiene las opciones del menú principal del usuario.
// @return {Promisenumber} El valor de la opción seleccionada.



// Este código define una función asíncrona llamada principalMenu que devuelve
// una promesa. Utiliza la función select para mostrar un menú con opciones 
// para que el usuario elija. La opción seleccionada se devuelve como el valor 
// resuelto de la promesa. Las opciones incluyen agregar un estudiante, ver 
// estudiantes y salir del menú. 


async function principalMenu() {
  return await select({
    message: ' Seleccione una opción para continuar',
    choices: [
      {
        name: 'Agregar estudiante',
        value: 1,
      },
      {
        name: ' Ver estudiantes',
        value: 2,
      },
      new Separator(),
      {
        name: ' Salir',
        value: 0,
      },
    ],
  });
}

// Ejecuta el bucle principal del programa.
// @return {Promisevoid} - Una promesa que se resuelve cuando el bucle del programa ha finalizado.

// Este código define una función asíncrona llamada run() que ejecuta el bucle 
// principal del programa. Crea una instancia de la clase School y luego 
// entra en un bucle do-while. Dentro del bucle, espera la entrada del 
// usuario desde la función principalMenu() y realiza diferentes acciones 
// según la elección del usuario. Si el usuario elige la opción 1, crea un 
// nuevo estudiante y lo agrega a la escuela. Si el usuario elige la opción 2,
//  muestra los detalles de la escuela. 
// El bucle continúa hasta que el usuario elige la opción 0, momento en el que la
// función resuelve una promesa que indica que el programa ha finalizado su bucle.

async function run() {
  let answer;

  const school = new School();

  do {
    answer = await principalMenu();

    switch (answer) {
      case 1:
        {
          const student = await createStudent();
          school.addStudent(student);
        }
        break;

      case 2:
        {
          console.log(school.getDetails());
        }
        break;
    }
  } while (answer !== 0);
}

run();
