type Addfn = (a: number, b: number) => number;
// below does the same as custom function type
// interface Addfn {
//   (a:number, b:number): number;
// }

// let add: Addfn;

// add = (n1: number, n2: number) => {
//   return n1 + n2;
// };

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 26;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

let user1: Greetable;

user1 = new Person();

user1.greet("Hi there, I'm");
console.log(user1);
