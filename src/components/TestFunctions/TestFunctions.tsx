export default function TestFunctions() {
  // Decorators

  const Log = (target: any, propertyName: string | symbol) => {
    console.log("Property decorator!");
    console.log(target, propertyName);
  };

  const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  };

  const Log3 = (target: any, name: string | symbol, descriptor: PropertyDescriptor) => {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  };

  const Log4 = (target: any, name: string | symbol, position: number) => {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
  };
  class Product {
    @Log
    title: string;
    private _price: number;
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
    @Log2
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error("Invalid price - should be positive!");
      }
    }
    @Log3
    getInformation() {
      return [this.title, `$${this._price}`];
    }
    getProductWithTax(@Log4 tax: number) {
      return this._price * (1 + tax);
    }
  }
  //Decorators are executed when the class is defined, not when the class is instantiated
  // At the end of the day, decorators are just functions hence they execute when the class is defined
  // Usually they add extra functionality to the class behind the scenes
  const p1 = new Product("Book", 19.99);
  console.log(p1.getInformation());

  return (
    <>
      <div>
        <h3>Test Functions</h3>
      </div>
    </>
  );
}
