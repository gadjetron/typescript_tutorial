/*
    Decorators provide a way to add both annotations
    and a meta-programming syntax for class declarations and members.

    To enable experimental support for decorators:

        command line:
            tsc --target ES5 --experimentalDecorators

        'tsconfig.json':

            {
                "compilerOptions": {
                    ...
                    "experimentalDecorators": true
                    ...
                }
            }

    A decorator is a special kind of declaration that can be attached
    to a class declaration, method, accessor, property, or parameter.
    Decorators use the form

        @expression,

    where expression must evaluate to a function that will be called at runtime
    with information about the decorated declaration.

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
    Class decorators

    Class decorator is applied to the constructor of the class
    and can be used to observe, modify, or replace a class definition.
    A class decorator cannot be used in a declaration file,
    or in any other ambient context (such as on a declare class).

    The expression for the class decorator will be called
    as a function at runtime, with the constructor of the decorated class
    as its only argument.

    If the class decorator returns a value, it will replace the class declaration
    with the provided constructor function.
*/
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
let Greeter = class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    format(str) {
        return `Hello ${str}`;
    }
    greet() {
        return this.greeting;
    }
};
__decorate([
    this.format // property decorator
], Greeter.prototype, "greeting", void 0);
__decorate([
    this.format
], Greeter.prototype, "greet", null);
Greeter = __decorate([
    sealed
], Greeter);
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
// class Point {
//     private _x: number;
//     private _y: number;
//
//     // parameter decorator
//     constructor(@decorator x: number, y: number) {
//         this._x = x;
//         this._y = y;
//     }
//     @configurable(false)
//     get x() { return this._x; }
//     @configurable(false)
//     get y() { return this._y; }
// }
//# sourceMappingURL=decorators.js.map