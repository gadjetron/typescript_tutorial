/*
    One of TypeScript’s core principles is that
    type-checking focuses on the shape that values have.
    This is sometimes called “duck typing” or “structural subtyping”.
    In TypeScript, interfaces fill the role of naming these types,
    and are a powerful way of defining contracts within your code
    as well as contracts with code outside of your project.
 */

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

/*
    The type-checker checks the call to 'printLabel'.
    The 'printLabel' function has a single parameter that requires
    that the object passed in has a property called label of type 'string'.
    Our object actually has more properties than this,
    but the compiler only checks that at least the ones required
    are present and match the types required.

    We can write the same example again, this time using an interface
    to describe the requirement of having the label property that is a string:
*/

interface LabelledValue {
    label: string;
}

function printLabel_interface(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let obj_interface = { size: 10, label: "Size 10 Object" };
printLabel(obj_interface);

/* Optional properties */

interface SquareConfig {
    color?: string;  // optional property
    width?: number;  // optional property
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };

    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });

/*
    Readonly properties

    Some properties should only be modifiable when an object is first created.

*/
interface Point {
    readonly x: number;
    readonly y: number;
}

let point1: Point = { x: 10, y: 20 };
// point1.x = 5; // error!

let array: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = array;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// array = ro; // error!
array = ro as number[]; //

/*
    readonly vs const

    The easiest way to remember whether to use 'readonly' or 'const'
    is to ask whether you’re using it on a variable or a property.
    Variables use 'const' whereas properties use 'readonly'.
*/

/*
    Here we’re saying a SquareConfig can have any number of properties,
    and as long as they aren’t color or width, their types don’t matter.
*/
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

/*
    Function Types

    Interfaces are capable of describing the wide range of shapes
    that JavaScript objects can take. In addition to describing
    an object with properties, interfaces are also capable of describing function types.
*/
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

/* Indexable types */

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// interface ReadonlyStringArray {
//     readonly [index: number]: string;
// }
// let myArray: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!

/* Class types */

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): any;
}

class Clock implements ClockInterface {
    currentTime: Date;

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) { }
}

/*  Extending Interfaces */

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
