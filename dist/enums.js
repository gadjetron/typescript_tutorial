/*
    Enums

    Allow to define a set of named constants
*/
/* Numeric enums */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right"; // = 4
})(Direction || (Direction = {}));
// if not initialized, counter starts from 0
var DirectionButton;
(function (DirectionButton) {
    DirectionButton[DirectionButton["ButtonUp"] = 0] = "ButtonUp";
    DirectionButton[DirectionButton["ButtonDown"] = 1] = "ButtonDown";
    DirectionButton[DirectionButton["ButtonLeft"] = 2] = "ButtonLeft";
    DirectionButton[DirectionButton["ButtonRight"] = 3] = "ButtonRight";
})(DirectionButton || (DirectionButton = {}));
let button_up = DirectionButton.ButtonUp;
function press_direction_button(button) {
    console.log(button);
}
/*
Enums without initializers either need to be first,
or have to come after numeric enums
initialized with numeric constants
or other constant enum members.
In other words, the following isn’t allowed:
*/
function getSomeValue(value) {
    return value;
}
var Enum;
(function (Enum) {
    Enum[Enum["A"] = getSomeValue(1)] = "A";
    // B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
})(Enum || (Enum = {}));
/* String enums */
var DirectionButtonAsString;
(function (DirectionButtonAsString) {
    DirectionButtonAsString["ButtonUp"] = "Up";
    DirectionButtonAsString["ButtonDown"] = "Down";
    DirectionButtonAsString["ButtonLeft"] = "Left";
    DirectionButtonAsString["ButtonRight"] = "Right";
})(DirectionButtonAsString || (DirectionButtonAsString = {}));
/* Heterogeneous enums */
var BooleanLikeHeterogeneousEnum;
(function (BooleanLikeHeterogeneousEnum) {
    BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
    BooleanLikeHeterogeneousEnum["Yes"] = "YES";
})(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
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
var E;
(function (E) {
    E[E["X"] = 0] = "X";
})(E || (E = {}));
/*
    Rule 2: All enum members in 'E1' and 'E2' are constant.
 */
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 3] = "C";
})(E2 || (E2 = {}));
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["Computed"] = "123".length] = "Computed";
})(FileAccess || (FileAccess = {}));
/*
    Enum with static functions

    enum + namespace merging to add static methods to an enum
*/
var Weekday;
(function (Weekday) {
    Weekday[Weekday["Monday"] = 0] = "Monday";
    Weekday[Weekday["Tuesday"] = 1] = "Tuesday";
    Weekday[Weekday["Wednesday"] = 2] = "Wednesday";
    Weekday[Weekday["Thursday"] = 3] = "Thursday";
    Weekday[Weekday["Friday"] = 4] = "Friday";
    Weekday[Weekday["Saturday"] = 5] = "Saturday";
    Weekday[Weekday["Sunday"] = 6] = "Sunday";
})(Weekday || (Weekday = {}));
(function (Weekday) {
    function isBusinessDay(day) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
    Weekday.isBusinessDay = isBusinessDay;
})(Weekday || (Weekday = {}));
const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false
/* Enums at runtime */
// Enums are real objects that exist at runtime.
// For example, the following enum
var EnumAtRuntime;
(function (EnumAtRuntime) {
    EnumAtRuntime[EnumAtRuntime["X"] = 0] = "X";
    EnumAtRuntime[EnumAtRuntime["Y"] = 1] = "Y";
    EnumAtRuntime[EnumAtRuntime["Z"] = 2] = "Z";
})(EnumAtRuntime || (EnumAtRuntime = {}));
// can actually be passed around to functions
function function_with_enum_arg(obj) {
    return obj.X;
}
// Works, since 'EnumAtRuntime' has a property
// named 'X' which is a number.
function_with_enum_arg(EnumAtRuntime);
/* Reverse mappings */
var EnumReverseMapping;
(function (EnumReverseMapping) {
    EnumReverseMapping[EnumReverseMapping["A"] = 0] = "A";
})(EnumReverseMapping || (EnumReverseMapping = {}));
let enum_reverse_mapping = Enum.A;
let rev_mapping = Enum[enum_reverse_mapping]; // "A"
// generate the Javascript 'let const_enum = 0'
// instead of 'let const_enum = ConstEnum.False'
let const_enum = 0 /* False */;
//# sourceMappingURL=enums.js.map