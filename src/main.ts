// let stringArr = ['one', 'two', 'three']
// let guitars = ['Strat', 'Les Paul', 5051]
// let mixedData = ['EVH', 1984, true]

// mixedData = [...stringArr, ...guitars, ...mixedData]
// console.log(mixedData);

// // Tuple: This is more string than an ordinary array.
// let myTuple: [string, number, boolean] = ['Dave', 42, true]

// // How to anotate type in object instead of inference by Typescript
// type Guitarist = {
//     name: string,
//     // To make a property optional, you add a question mark before it.
//     active?: boolean,
//     albums: (string | number)[]
// }

// // Note: This can be confusing, you can also use interface to replace type, but you will remove the equal sign in the front of the variable.

// let evh: Guitarist = {
//     name: 'Olaoluwa',
//     albums: [1972, 4564, '56wtgh'],
//     // active: true,
// }
// let jp: Guitarist = {
//     name: 'Jimmy',
//     albums: [23, 'dftrggh', '456'],
//     active: true,
// }

// // Enums
// // Unlike most Typescript features, Enums are not a type-level addition to Javascript but something added to the language and runtime.

// enum Grade {
//     A = 5,
//     B,
//     C,
//     D,
//     E
// }

// console.log(Grade.E);

//Type Eliases
// type stringOrNumber = string | number;

// type Guitarist = {
//   name: string;
//   active?: boolean;
//   albums: (string | number)[];
// };

// Literal types
// let myName: "Olamarx";
// It has to be Olamarx again
// myName = "Olamarx";

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// Any function that is not returning anything should have a void type of data
// const log = (message: any): void => {
//   console.log(message);
// };

// log("Hello");
// log(add(2, 3));
// log(add(3, 3));

// let subtract = function (c: number, d: number): number {
//   return c - d;
// };

// type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//   (a: number, b: number): number;
// }
// let multiply: mathFunction = function (e, f) {
//   return e * f;
// };

// log(multiply(2, 5));

// Optional parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };

// Default parameter value
// const sumAll = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// };

// log(addAll(2, 3, 2));
// log(addAll(2, 3));
// log(sumAll(undefined, 3));

// Rest parameters
// const total = (a: number, ...nums: number[]): number => {
//   return nums.reduce((prev, curr) => prev + curr);
// };

// log(total(1, 2, 3, 4));

// const createError = (errMsg: string) => {
//   throw new Error(errMsg);
// };

// type One = string;
// type Two = string | number;
// type Three = "Hello";

// convert to more or less specific
// let a: One = "Hello";
// let b = a as Two; // less specific
// let c = a as Three; // more specific

// Angle bracket
// let d = <One>"world";
// let e = <string | number>"world";
// The Angle bracket cant be used in React

// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b;
//   return "" + a + b;
// };

// let myVal: string = addOrConcat(2, 2, "concat") as string;

// be careful, TS sees no problem here but a string is returned
// let nextVal: number = addOrConcat(2, 2, "concat") as number;

// 10 as string
// (10 as unknown) as string

// The DOM
// const img = document.getElementById("img") as HTMLImageElement;
// const myImg = document.getElementById("img");

// img.src;

// First variation
// let year: HTMLElement | null
// year = document.getElementById('year')
// let thisYear: string
// thisYear = new Date().getFullYear().toString()
// if(year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }

// let year = document.getElementById("year") as HTMLSpanElement;
// let thisYear: string = new Date().getFullYear().toString();
// year.setAttribute("datetime", thisYear);
// year.textContent = thisYear;

class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    // Protected and private members can not be accessed directly outside of the constructor
    private age: number,
    protected lang: string = "Tpescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge(): string {
    return `Hello, I am ${this.age} years old`;
  }
}

const Ola = new Coder("Olaoluwa", "Afrobeat", 42, "Typescript");
console.log(Ola.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang(): string {
    return `Hello, I write ${this.lang}`;
  }
}

const Sara = new WebDev("Windows", "Sara", "Afrojuju", 25);
console.log(Sara.getLang());



// Implementing an Interface in a class
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
name: string;
instrument: string;

constructor(name: string, instrument: string) {
  this.name = name;
  this.instrument = instrument;
  
}

play(action: string): string {
    return`${this.name} ${action} the ${this.instrument}`;
}
}

