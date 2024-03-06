// function Car(name, model, price) {
//   this.n = name;
//   this.m = model;
//   this.p = price;
// }

class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  };
  run() {
    return `Car is running now`;
  };
  stop() {
    return `Car is stopped`;
  };
}

const carOne = new Car('Garowe', 2024, 20_000);
const carTwo = new Car('Toyota', 2024, 15_000);
const carThree = new Car('BMW', 2024, 17_000);

console.log(`Car one Name is ${carOne.n} and it's Model is: ${carOne.m}, And it's Price is: ${carOne.p}`);
console.log(carOne.run());

// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"