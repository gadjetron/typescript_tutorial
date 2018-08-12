/*
    One of TypeScript’s core principles is that
    type-checking focuses on the shape that values have.
    This is sometimes called “duck typing” or “structural subtyping”.
    In TypeScript, interfaces fill the role of naming these types,
    and are a powerful way of defining contracts within your code
    as well as contracts with code outside of your project.
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel_interface(labelledObj) {
    console.log(labelledObj.label);
}
let obj_interface = { size: 10, label: "Size 10 Object" };
printLabel(obj_interface);
function createSquare(config) {
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
let point1 = { x: 10, y: 20 };
// point1.x = 5; // error!
let array = [1, 2, 3, 4];
let ro = array;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// array = ro; // error!
array = ro; //
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) { }
}
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
//# sourceMappingURL=interfaces.js.map