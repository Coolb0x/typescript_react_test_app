export default function TestFunctions() {
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

  return (
    <>
      <div>
        <h3>Test Functions</h3>
      </div>
    </>
  );
}
