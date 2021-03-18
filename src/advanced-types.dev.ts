type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Aedan",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric;

// the following defines specific return types - function overload
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combineable, b: Combineable) {
  //typeguard using typeof
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, 5);
// could typecast the following i.e. 'as string'
// better to use function overload - see add definition
const stringResult = add("Carleigh", " Aedan");
stringResult.split(" ");
console.log(stringResult);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  // typeguard with 'in' keyword
  if ("privileges" in emp) {
    console.log(emp.privileges);
  }
  if ("startDate" in emp) {
    console.log(emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("driving");
  }
}

class Truck {
  drive() {
    console.log("driving truck");
  }

  loadCargo(amt: number) {
    console.log("Loading cargo... ", amt);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // typeguard using 'instanceof' keyword (no risk of mistyping like 'in' keyword)
  // only works with custom types, not interfaces BECAUSE interfaces are not compiled to js
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// typeguard "Discriminated Union" by having one common property (in this case kind)
// works with interfaces AND eliminates typo risks
interface Bird {
  kind: "bird";
  flyingSpeed: number;
}

interface Horse {
  kind: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;

  switch (animal.kind) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log(speed);
}

moveAnimal({ kind: "bird", flyingSpeed: 200 });

// typecasting example
// remember ! at the end of selector means we KNOW it will exist (ts doesn't automatically)
// using <SomeElementType> typecasts
// alternative available so as not to clash with e.g. JSX syntax: 'as SomeElementType'

// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi There!";

// alternative syntax - no ! required

const userInputElement = document.getElementById("user-input");

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hello there!";
}

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  // this states that ErrorContainer can have any number of props (that can be expressed as strings)
  // and those props must have string values
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a character!",
};

// optional chaining demo
// console.log(fetchedUserData?.job?.title);

const fetchedUserData = {
  id: "u1",
  name: "Aedan",
  job: { title: "Jr. Dev", desc: "Bigshot" },
};

console.log(fetchedUserData.job.title);

const userInput = null;

// nullish coalescing - only uses default if userInput is null or undefined (if it's 0, or '', it is kept)
const storedData = userInput ?? "DEFAULT";
console.log(storedData);
