// Intersection Types

// Or we can do it with interfaces

// interface Admin
// interface Employee
// interface ElevatedEmployee extends Admin, Employee

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emp1: ElevatedEmployee = {
  name: "Coolbox",
  privileges: ["create-server"],
  startDate: new Date(),
};

// Type Gurads
type Combinable = string | number;

const simpleAdd = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

type UnknownEmployee = Employee | Admin;

// Type Gurads with "in" keyword
const printEmployeeInformation = (emp: UnknownEmployee) => {
  console.log(`Name: ${emp.name}`);

  if ("privileges" in emp) {
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {
    console.log(`Start Date: ${emp.startDate}`);
  }
};

// Type Gurads with "instanceof" keyword

class Car {
  drive() {
    console.log("Driving a car...");
  }
}

class Truck {

  loadCargo(amount: number) {
    console.log(`Loading cargo... ${amount}`);
  }
}

type Vehicle = Car | Truck;

const transport (vehicle: Vehicle) => {
  if (vehicle instanceof Car) {
    vehicle.drive();
  } else {
    vehicle.loadCargo(1000);
  }
}

// Discriminated Unions

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving at speed: ${speed}`);
};
// Type Casting

const inputElement = document.getElementById("input") as HTMLInputElement;
