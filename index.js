const inquirer = require("@inquirer/prompts");

const { select, Separator, input } = inquirer;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `${this.name} is ${this.age} years old`;
  }
}

class Estudent extends Person {
  constructor(name, age) {
    super(name, age);
    this.note = 0;
  }
  getDetails() {
    return `${this.name} tiene ${this.age} años de edad y su nota es ${this.note}`;
  }
}

class School {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  getDetails() {
    return this.students.map((student) => student.getDetails()).join("\n");
  }
}

async function createStudent() {
  const name = await input({
    message: "ingrese el nombre del estudiante",
  });
  const age = await input({
    message: "ingrese la edad del estudiante",
  });

  return new Estudent(name, age);
}

async function principalMenu() {
  return await select({
    message: "Seleccione una opción para continuar?",
    choices: [
      {
        name: "Agregar estudiante",
        value: 1,
      },
      {
        name: "Ver estudiantes",
        value: 2,
      },
      new Separator(),
      {
        name: "Salir",
        value: 0,
      },
    ],
  });
}

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

function main() {
  run();
}

main();
