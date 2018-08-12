// 'var' declaration
var num: number = 1;

// 'let' declaration
let str: string = "Simple string";

// function f(input: boolean) {
//     let a = 100;

//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }

//     // Error: 'b' doesn't exist here
//     return b;
// }

// let m = 10;
// let m = 20; // error: can't re-declare 'm' in the same scope

// function g() {
//     let m = 100;
//     var m = 100; // error: can't have both declarations of 'm'
// }

// 'const' declaration
// const numLivesForCat = 9;

const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// Destructuring
//
// Array destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

// swap variables
[first, second] = [second, first];

// And with parameters to a function:

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

// let [first, ...rest] = [1, 2, 3, 4];
// console.log(first); // outputs 1
// console.log(rest); // outputs [ 2, 3, 4 ]

// let [first] = [1, 2, 3, 4];
// console.log(first); // outputs 1

// let [, second, , fourth] = [1, 2, 3, 4];

// Object destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o; // a = o.a, b = o.b

// or
// ({ a, b } = { a: "baz", b: 101 });
//
// Notice that we had to surround this statement with parentheses.
// JavaScript normally parses a '{' as the start of block.

// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;

// Property renaming
//
// let { a: newName1, b: newName2 } = o;

// Confusingly, the colon here does not indicate the type.
// The type, if you specify it, still needs to be written
// after the entire destructuring:

// let { a, b }: { a: string, b: number } = o;

// Default values of property
//
// function keepWholeObject(wholeObject: { a: string, b?: number }) {
//     let { a, b = 1001 } = wholeObject;
// }

// Function declarations
//
// type C = { a: string, b?: number }
// function f({ a, b }: C): void {
//     // ...
// }

// Spread
//
// let first = [1, 2];
// let second = [3, 4];
// let bothPlus = [0, ...first, ...second, 5];

// Spreading creates a shallow copy of first and second.

// You can also spread objects:

// let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
// let search = { ...defaults, food: "rich" };

// Object spread also has a couple of other surprising limits.
// First, it only includes an objects’ own, enumerable properties.
// Basically, that means you lose methods
// when you spread instances of an object:

// class C {
//     p = 12;
//     m() {
//     }
// }
//
// let c = new C();
// let clone = { ...c };
// clone.p; // ok
// clone.m(); // error!
