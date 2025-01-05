export default function TestFunctions() {
  // Decorators

  const Logger = (constructor: Function) => {
    console.log("Logging...");
  };
  @Logger
  class Person {
    constructor() {
      console.log("Creating a person object...");
    }
  }

  const newPerson = new Person();

  return (
    <>
      <div>
        <h3>Test Functions</h3>
      </div>
    </>
  );
}
