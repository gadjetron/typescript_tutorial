/*
    Intersection types

    An intersection type combines multiple types into one.
    This allows you to add together existing types
    to get a single type that has all the features you need.
*/

class Person {
    constructor(public name: string) {};
}

interface Loggable {
    canLogin(): boolean;
}

class LoggablePerson implements Loggable {
    canLogin() {
        return false;
    }
}

let loggable_person: Person & Loggable;

// loggable_person.name;
// loggable_person.canLogin();

/* Union types */

function string_or_number(param: string | number) {
    return param;
}

string_or_number("string");
string_or_number(1);

// error: Argument of type 'true' is not assignable
// to parameter of type 'string | number'.
// string_or_number(true);

/*
    If we have a value that has a union type,
    we can only access members
    that are common to all types in the union.
*/

interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    swim(): void;
    layEggs(): void;
}

// error: Type 'undefined' is not assignable to type 'Bird | Fish'.
// function getSmallPet(): Fish | Bird {
//     return;
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay

// Property 'swim' does not exist on type 'Bird | Fish'.
// Property 'swim' does not exist on type 'Bird'.
// pet.swim();

/*
    Type Aliases

    Create a new name for a type.
    Type aliases are sometimes similar to interfaces,
    but can name primitives, unions, tuples, and any other types
    that you’d otherwise have to write by hand.
*/

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver): Name {

    return (typeof n === 'string') ? n : n();
}

/* Generic type aliases */

type Tree<T> = {
    value: T;
    left: Tree<T>;
    right: Tree<T>;
}

/* Using aliases with intersection types */

type LinkedList<T> = T & { next: LinkedList<T> };


// error
// type NotPossibleTypeDeclaration = Array<NotPossibleTypeDeclaration>;

/*
    String literal types

    String literal types allow you to specify
    the exact value a string must have.
    In practice string literal types combine nicely
    with union types, type guards, and type aliases.
    You can use these features together
    to get enum-like behavior with strings.
*/

// any other string will give the error
type Easing = "ease-in" | "ease-out" | "ease-in-out";

/*
    Discriminated unions

    There are three ingredients:

        1. Types that have a common, singleton type property — the discriminant.
        2. A type alias that takes the union of those types — the union.
        3. Type guards on the common property.
*/

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
interface Circle {
    kind: "circle";
    radius: number;
}

interface Triangle {
    kind: "triangle";
    side_a: number;
    side_b: number;
    side_c: number;
}

type FigureShape = Square | Rectangle | Circle | Triangle;

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
    public constructor(protected value: number = 0) { }

    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}

class ScientificCalculator extends BasicCalculator {

    public constructor(value = 0) {
        super(value);
    }

    public sin() {
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

