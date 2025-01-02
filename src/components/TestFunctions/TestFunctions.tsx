export default function TestFunctions() {
  const number1 = 5;
  const number2 = 10;

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

  return (
    <>
      <div>
        <h3>Test Functions</h3>
        <p>{`The sum of ${number1} and ${number2}`}</p>
      </div>
    </>
  );
}
