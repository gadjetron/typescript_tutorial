/* Classes */
export class Greeter {
    constructor(message) {
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
    constructor(name) { this.name = name; }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
/* Public, private, and protected modifiers */
/* Each member is public by default */
class Person {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
/*
    When a member is marked private,
    it cannot be accessed from outside of its containing class.
*/
class SimpleObject {
    constructor(theName) { this.name = theName; }
}
// new SimpleObject("Cat").name; // Error: 'name' is private;
/*
    The protected modifier acts much like the private modifier
    with the exception that members declared protected
    can also be accessed within deriving classes
*/
class Man {
    constructor(name) { this.name = name; }
}
class Employee extends Man {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
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
    constructor(theName) {
        this.numberOfLegs = 8;
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
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
/*
    Accessors

    A way of intercepting accesses to a member of an object.
    Accessors require you to set the compiler
    to output ECMAScript 5 or higher.
*/
class WithAccessor {
    get prop() {
        return this._prop;
    }
    set prop(value) {
        this._prop = value;
    }
}
const with_accessor = new WithAccessor();
/* Static Properties */
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
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
export class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        // constructors in derived classes must call super()
        super("Accounting and Auditing");
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
// ok to create a reference to an abstract type
let department;
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
}
let point3D = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=classes.js.map