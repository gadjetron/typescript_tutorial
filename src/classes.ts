/* Classes */

export class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, ${this.greeting}" + this.greeting;
    }
}

let greeter = new Greeter("world");
greeter.greet();

/* Inheritance */

class Animal {
    name: string;

    constructor(name: string) { this.name = name; }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

/* Public, private, and protected modifiers */

/* Each member is public by default */

class Person {
    public name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

/*
    When a member is marked private,
    it cannot be accessed from outside of its containing class.
*/

class SimpleObject {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

// new SimpleObject("Cat").name; // Error: 'name' is private;

/*
    The protected modifier acts much like the private modifier
    with the exception that members declared protected
    can also be accessed within deriving classes
*/

class Man {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Man {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

/*
    A constructor may also be marked protected.
    This means that the class cannot be instantiated
    outside of its containing class, but can be extended.
*/

// class Person {
//     protected name: string;
//     protected constructor(theName: string) { this.name = theName; }
// }

// // Employee can extend Person
// class Employee extends Person {
//     private department: string;

//     constructor(name: string, department: string) {
//         super(name);
//         this.department = department;
//     }

//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`;
//     }
// }

// let howard = new Employee("Howard", "Sales");
// let john = new Person("John"); // Error: The 'Person' constructor is protected

/* Readonly modifier */

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.

/*
    Parameter properties

    Lets to create and initialize a member
    (public, private, protected or readonly) in one place.
*/

class OctopusParameterProps {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

/*
    Accessors

    A way of intercepting accesses to a member of an object.
    Accessors require you to set the compiler
    to output ECMAScript 5 or higher.
*/

class WithAccessor {

    private _prop: string;

    public get prop() : string {
        return this._prop;
    }

    public set prop(value : string) {
        this._prop = value;
    }
}

const with_accessor = new WithAccessor();

/* Static Properties */

class Grid {
    static origin = { x: 0, y: 0 };

    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

/*
    Abstract classes

    Abstract classes are base classes
    from which other classes may be derived.
    They may not be instantiated directly.
    Unlike an interface, an abstract class
    may contain implementation details for its members.

    Methods within an abstract class that are marked as abstract
    do not contain an implementation,
    must be implemented in derived classes
    and may optionally include access modifiers.
*/

export abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    constructor() {
        // constructors in derived classes must call super()
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

// ok to create a reference to an abstract type
let department: Department;

// error: cannot create an instance of an abstract class
// department = new Department();

// ok to create and assign a non-abstract subclass
department = new AccountingDepartment();
department.printName();
department.printMeeting();

// error: method doesn't exist on declared abstract type
// department.generateReports();

/*
    Using a class as an interface
*/

export class Point {
    x: number;
    y: number;
}

export interface Point3D extends Point {
    z: number;
}

let point3D: Point3D = { x: 1, y: 2, z: 3 };
