export default function AdvancedTypes() {
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
  
    // Index Properties
    interface ErrorContainer {
      [prop: string]: string;
    }
  
    // Function Overloads
  
    type Combinable = string | number;
  
    const a: Combinable;
    const b: Combinable;
  
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    const add = (a: Combinable, b: Combinable) => {
      return typeof a === "string" || typeof b === "string" ? a.toString() + b.toString() : a + b;
    };
  
    const result = add("Anton", "T");
  
    result.split(" ");
  
    // Chaining Methods
  
    const userData = {
      id: "u1",
      name: "Anton",
      job: { title: "CEO", description: "My own company" },
    };
  
    console.log(userData.job?.description, userData.job?.title);
  
    // NUllish Coalescing with "??" operator
  
    const userInput = null;
    const storedData = userInput ?? "DEFAULT";
  
      // Generic Types

  const names: Array<string> = ["Alice", "Bob", "Charlie", "Dora", "Eve"];
  // Array<string> is the same as string[]

  const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This promise is resolved!");
    }, 2000);
  });

  promise.then(data => {
    console.log(data.split(" "));
  });

  const objA: object = { name: "Coolbox" };
  const objB: object = { age: 30 };

  const objMerge = <T extends object, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA, objB);
  };

  const resultObj = objMerge(objA, objB);
  console.log(resultObj);

  const extractObjKey = <T extends object, U extends keyof T>(obj: T, key: U) => {
    return obj[key];
  };

  const checker = extractObjKey(objA, "name");

  class DataStorage<T extends string | number | boolean> {
    //If an object is passed, it will throw an error
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem("Alice");
  textStorage.addItem("Bob");

  const numberStorage = new DataStorage<number>();
  numberStorage.addItem(1);

  // Generic Utility Types

  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }

  const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
    const courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
  };

  const courseGoal = createCourseGoal("React", "Learn React", new Date());

  const readNames: Readonly<string[]> = ["Alice", "Bob", "Charlie", "Dora", "Eve"];
  // readNames.push("Frank"); // Error

    // Decorators

    function Logger(logstring: string) {
      return function (constructor: Function) {
        console.log("Logging...");
        console.log(logstring);
        console.log(constructor);
      };
    }
    @Logger("LOGGING - PERSON")
    class Person {
      constructor() {
        console.log("Creating a person object...");
      }
    }
  
    const newPerson = new Person();


function HtmlTemplate (template: string, elementId: string) {
  return function (_: Function) {
    const element = document.getElementById(elementId)!;
    element.innerHTML = template;
  };
}

@HtmlTemplate("<h3>Created with Decorator Function</h3>", "decorator")


    return
    <>
    <h3>Advaned Types Component</h3>
    </>
}