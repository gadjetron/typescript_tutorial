function echo(arg) {
    return arg;
}
let output = echo("Hello!");
// or
// let output = echo("Hello!");
function echo_array(arg) {
    console.log(arg.length);
    return arg;
}
// or
// function echo_array<T>(arg: Array<T>): Array<T> {
//     console.log(arg.length);
//     return arg;
// }
/* Generic Types */
function identity(arg) {
    return arg;
}
let myIdentity = identity;
let generic_interface = identity;
// or
// interface GenericInterface<T>{
//     (arg: T): T;
// }
// let myIdentity: GenericInterface<number> = identity;
/* Generic Classes */
/* Static members can not use the class’s type parameter. */
class GenericNumber {
}
let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({ length: 10, value: 3 });
/* Using Type Parameters in Generic Constraints */
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
// error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// getProperty(x, "m");
//# sourceMappingURL=generics.js.map