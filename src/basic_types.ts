// Boolean

export let job_is_not_done: boolean = true;
let job_is_done: boolean = false;

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Strings
let color: string = "blue";
color = 'red';

// Template strings within ``
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${ age + 1} years old next month.`;

// Array
let list: number[] = [1, 2, 3];

// Using generics
let list_generics: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number];

// Initializing tuple
x = ["hello", 10]; // OK

// Initialize it incorrectly
// x = [10, "hello"]; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Setting value of enum members
//
// enum Color { Red = 1, Green, Blue }
// let c: Color = Color.Green;
//
// or
//
// enum Color { Red = 1, Green = 2, Blue = 4 }
// let c: Color = Color.Green;

// enum Color { Red = 1, Green, Blue }
// let colorName: string = Color[2];
// console.log(colorName); // Displays 'Green' as its value is 2 above

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

// let list: any[] = [1, true, "free"];
// list[1] = 100;

// Void: absence of having any type at all.
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined; // only 'undefined' or 'null'
                                // can be assingned to 'unusable' variable

// Null and undefined
// Not much else we can assign to these variables!
//
let u: undefined = undefined;
let n: null = null;

// The 'never' type represents the type of values that never occur.
// For instance, never is the return type for a function expression
// or an arrow function expression that always throws an exception
// or one that never returns;
// Variables also acquire the type never
// when narrowed by any type guards that can never be true.

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

// 'object' is a type that represents the non - primitive type,
// i.e.any thing that is not number, string, boolean,
// symbol, null, or undefined.

// With object type, APIs like Object.create can be better represented.
//
// declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// Type assertions
// Type assertions are a way to tell the compiler
// “trust me, I know what I’m doing.” A type assertion is like a type cast
// in other languages, but performs no special checking
// or restructuring of data.It has no runtime impact,
// and is used purely by the compiler.TypeScript assumes that you,
// the programmer, have performed any special checks that you need.
//
// When using TypeScript with JSX, only 'as-' style assertions are allowed.

let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// or with 'as' keyword
//
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

