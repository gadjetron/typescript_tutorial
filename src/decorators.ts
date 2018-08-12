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

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {

    @this.format // property decorator
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    format(str: string) {
        return `Hello ${str}`;
    }

    @this.format
    greet() {
        return this.greeting;
    }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
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

