function echo<T>(arg: T): T {
    return arg;
}

let output = echo<string>("Hello!");

// or
// let output = echo("Hello!");

function echo_array<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

// or
// function echo_array<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }

/* Generic Types */

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
// or
// let myIdentity: { <T>(arg: T): T } = identity;

/* Generic Interface */

interface GenericInterface {
    <T>(arg: T): T;
}

let generic_interface: GenericInterface = identity;

// or
// interface GenericInterface<T>{
//     (arg: T): T;
// }
// let myIdentity: GenericInterface<number> = identity;

/* Generic Classes */
/* Static members can not use the class’s type parameter. */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };

/* Generic Constraints */
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });

/* Using Type Parameters in Generic Constraints */

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay

// error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// getProperty(x, "m");
