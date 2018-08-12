/*
    Enums

    Allow to define a set of named constants
*/

/* Numeric enums */

enum Direction {
    Up = 1,
    Down, // = 2
    Left, // = 3
    Right // = 4
}

// if not initialized, counter starts from 0
enum DirectionButton {
    ButtonUp,
    ButtonDown,
    ButtonLeft,
    ButtonRight,
}

let button_up = DirectionButton.ButtonUp;

function press_direction_button(button: DirectionButton): void {
    console.log(button);
}

/*
Enums without initializers either need to be first,
or have to come after numeric enums
initialized with numeric constants
or other constant enum members.
In other words, the following isn’t allowed:
*/

function getSomeValue(value: any) {
    return value;
}

enum Enum {
    A = getSomeValue(1),
    // B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
}

/* String enums */

enum DirectionButtonAsString {
    ButtonUp = 'Up',
    ButtonDown = 'Down',
    ButtonLeft = 'Left',
    ButtonRight = 'Right',
}

/* Heterogeneous enums */

enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}

/* Computed and constant members */

/*
    Constant members

    An enum member is considered constant if:

    1.  It is the first member in the enum and it has no initializer,
        in which case it’s assigned the value 0;

    2.  It does not have an initializer and the preceding enum member
        was a numeric constant. In this case the value
        of the current enum member will be the value of the preceding
        enum member plus one.

    3.  The enum member is initialized with a constant enum expression.
        A constant enum expression is a subset of TypeScript expressions
        that can be fully evaluated at compile time.
        An expression is a constant enum expression if it is:

            1. a literal enum expression (basically a string literal
                or a numeric literal)
            2. a reference to previously defined constant enum member
                (which can originate from a different enum).
            3. a parenthesized constant enum expression
            4. one of the +, -, ~ unary operators
               applied to constant enum expression
            5. +, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators
               with constant enum expressions as operands.
               It is a compile time error for constant enum expressions
               to be evaluated to NaN or Infinity.

    In all other cases enum member is considered computed.
*/

/*
    Rule 1: E.X is constant:
*/
enum E {
    X
}

/*
    Rule 2: All enum members in 'E1' and 'E2' are constant.
 */
enum E1 { X, Y, Z }

enum E2 {
    A = 1,
    B,
    C
}

enum FileAccess {

    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,

    // computed member
    Computed = "123".length
}

/*
    Enum with static functions

    enum + namespace merging to add static methods to an enum
*/
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
            return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false

/* Enums at runtime */

// Enums are real objects that exist at runtime.
// For example, the following enum

enum EnumAtRuntime {
    X,
    Y,
    Z
}

// can actually be passed around to functions

function function_with_enum_arg(obj: { X: number }) {
    return obj.X;
}

// Works, since 'EnumAtRuntime' has a property
// named 'X' which is a number.
function_with_enum_arg(EnumAtRuntime);

/* Reverse mappings */

enum EnumReverseMapping {
    A
}
let enum_reverse_mapping = Enum.A;
let rev_mapping = Enum[enum_reverse_mapping]; // "A"


/*
    Constant enums

    Const enums can only use constant enum expressions.

    Compiler doesn't generate any JS enum definition
    (there is no ConstEnum variable at runtime)
    as it usages are inlined.
*/

const enum ConstEnum {
    False,
    True,
    Unknown
}

// generate the Javascript 'let const_enum = 0'
// instead of 'let const_enum = ConstEnum.False'
let const_enum = ConstEnum.False;

/*
    Ambient enums

    Ambient enums are used to describe the shape
    of already existing enum types.

    One important difference between ambient and non-ambient enums
    is that, in regular enums, members
    that don’t have an initializer will be considered constant
    if its preceding enum member is considered constant.
    In contrast, an ambient (and non-const) enum member
    that does not have initializer is always considered computed.
*/

declare enum AmbientEnum {
    A = 1,
    B,
    C = 2
}
