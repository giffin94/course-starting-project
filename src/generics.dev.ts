// const names: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is done");
//   }, 2000);
// });

// promise.then(data => {
//   data.split(' ');
// })

// Generic Functions

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "aedan" }, { age: 26 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "got no value";
  if (element.length === 1) {
    description = "Got 1 element.";
  } else if (element.length > 1) {
    description = `Got ${element.length} elements.`;
  }

  return [element, description];
}

console.log(countAndDescribe("Something that has a length property"));
console.log(countAndDescribe(new Array(123)));

// Generic function with keyof keyword

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value: ${obj[key]}`;
}

const extractedName = extractAndConvert({ name: "Carleigh" }, "name");
console.log(extractedName);

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Aedan");
textStorage.addItem("Carleigh");
textStorage.removeItem("Aedan");

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

// Built in Generic Types

// Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly - can't change properties/values for arrays, objects

const names: Readonly<string[]> = ["Aedan", "Carleigh"];
