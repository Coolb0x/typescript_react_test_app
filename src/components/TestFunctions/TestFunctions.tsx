export default function TestFunctions() {
  const number1 = 5;
  const number2 = 10;
  const showResult = true;
  const errorString = "The result is: ";
  const person: {
    name: string;
    age: number;
  } = {
    name: "Max",
    age: 30,
  };

  const sum = (a: number, b: number, ifShow: boolean, ifError: string): number | void => {
    return ifShow ? a + b : console.log(ifError);
  };

  const result = sum(number1, number2, showResult, errorString);

  return (
    <>
      <div>
        <h3>Test Functions</h3>
        <p>{`The sum of ${number1} and ${number2} is ${result}`}</p>
        <p>
          This is {person.name} and he is {person.age} years{" "}
        </p>
      </div>
    </>
  );
}
