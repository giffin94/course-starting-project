function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - Person")
class Person {
  name = "Aedan";

  constructor() {
    console.log("Creating person...");
  }
}

const pers = new Person();
console.log(pers);
