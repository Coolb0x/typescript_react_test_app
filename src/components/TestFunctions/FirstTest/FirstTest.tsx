// export default function FirstTest() {
//   const number1 = 5;
//   const number2 = 10;
//   const showResult = true;
//   const errorString = "The result is: ";

//   // const ADMIN = 0;
//   // const READ_ONLY = 1;
//   // const AUTHOR = 2;

//   //Or With Typescript Enum

//   enum Role {
//     ADMIN = "ADMIN",
//     READ_ONLY = "READ_ONLY",
//     AUTHOR = "AUTHOR",
//   }

//   const person: {
//     name: string;
//     age: number;
//     role: string;
//   } = {
//     name: "Max",
//     age: 30,
//     role: Role.ADMIN,
//   };

//   const hobies: string[] = ["Sports", "Cooking"];
//   const identifier: [number, string] = [1, "Tennis"];

//   type Combinable = number | string; // Custom Type
//   type ConversionDescriptor = "as-number" | "as-text"; // Custom Type

//   const sum = (a: number, b: number, ifShow: boolean, ifError: string): number | void => {
//     return ifShow ? a + b : console.log(ifError);
//   };

//   const result = sum(number1, number2, showResult, errorString);

//   function combine(inpt1: number | string, inpt2: Combinable, conversion: ConversionDescriptor) {
//     let result: number | string;

//     if ((typeof inpt1 === "number" && typeof inpt2 === "number") || conversion === "as-number") {
//       result = +inpt1 + +inpt2;
//     } else {
//       result = inpt1.toString() + inpt2.toString();
//     }
//     return result;
//   }

//   const numbs = combine(30, 26, "as-number");
//   const strings = combine("Hello", "World", "as-text");

//   function logAdd(n1: number, n2: number): void {
//     console.log(n1 + n2);
//   }

//   //const combinator: Function = logAdd;
//   // OR
//   // Function Type
//   const combinator: (n1: number, n2: number) => void = logAdd;
//   console.log(combinator(5, 10));

//   //Function Type with Callback
//   function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
//   }

//   // Never Type
//   function generateError(message: string, code: number): never {
//     throw { message: message, errorCode: code };
//   }

//   generateError("An error occurred!", 500);

//   return (
//     <>
//       <div>
//         <h3>Test Functions</h3>
//         <p>{`The sum of ${number1} and ${number2} is ${result}`}</p>
//         <p>
//           This is {person.name} and he is {person.age} years{" "}
//         </p>
//       </div>
//     </>
//   );
// }
