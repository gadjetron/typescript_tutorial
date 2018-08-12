/*
    Intersection types

    An intersection type combines multiple types into one.
    This allows you to add together existing types
    to get a single type that has all the features you need.
*/
class Person {
    constructor(name) {
        this.name = name;
    }
    ;
}
class LoggablePerson {
    canLogin() {
        return false;
    }
}
let loggable_person;
// loggable_person.name;
// loggable_person.canLogin();
/* Union types */
function string_or_number(param) {
    return param;
}
string_or_number("string");
string_or_number(1);
function getName(n) {
    return (typeof n === 'string') ? n : n();
}
// error: Function lacks ending return statement
// and return type does not include 'undefined'.
// function area(s: FigureShape): number {
//     switch (s.kind) {
//         case "square":
//             return s.size * s.size;
//         case "rectangle":
//             return s.height * s.width;
//         case "circle":
//             return Math.PI * s.radius ** 2;
//     }
// }
/* Polymorphic 'this' type */
class BasicCalculator {
    constructor(value = 0) {
        this.value = value;
    }
    currentValue() {
        return this.value;
    }
    add(operand) {
        this.value += operand;
        return this;
    }
    multiply(operand) {
        this.value *= operand;
        return this;
    }
}
class ScientificCalculator extends BasicCalculator {
    constructor(value = 0) {
        super(value);
    }
    sin() {
        this.value = Math.sin(this.value);
        return this;
    }
}
let value1 = new BasicCalculator(2)
    .multiply(5)
    .add(1)
    .currentValue();
let value2 = new ScientificCalculator(2)
    .multiply(5)
    .sin()
    .add(1)
    .currentValue();
//# sourceMappingURL=advanced_types.js.map