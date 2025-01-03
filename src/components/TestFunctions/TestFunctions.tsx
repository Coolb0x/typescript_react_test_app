export default function TestFunctions() {
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

  return (
    <>
      <div>
        <h3>Test Functions</h3>
      </div>
    </>
  );
}
