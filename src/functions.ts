// Named function
function named_add(x: number, y: number) {
    return x + y;
}

// Anonymous function
let anonymous_add = function (x: number, y: number): number {
    return x + y;
};

/* Function type */
let another_add: (x: number, y: number, z: number) => number =
    function (x: number, y: number, z: number): number {
        return x + y + z;
}

/*
    If function doesn't return value,
    'void' type may be used
*/
let log_message: (message: string) => void =
    function (message: string) {
        console.log(message);
}

/* Optional and default parameters */

/*
    Optional parameter

    Any optional parameters must follow required parameters.
*/
function concat_two_strings_opt_param(str1: string, str2?: string) {
    if (str2) {
        return '${str1} ${str2}';
    }
    else {
        return '${str1}';
    }
}

concat_two_strings_opt_param("1", "2");
concat_two_strings_opt_param("1");
// concat_two_strings_opt_param(); // error: Expected 1-2 arguments, but got 0.


/*
    Default parameter

    Default-initialized parameters don’t need to occur
    after required parameters.
    If a default-initialized parameter comes before a required parameter,
    users need to explicitly pass 'undefined'
    to get the default initialized value.
*/
function concat_two_strings_default_param_1(str1: string, str2: string = 'two') {
    return '${str1} ${str2}';
}

concat_two_strings_default_param_1('1', '2');
concat_two_strings_default_param_1('1');
// concat_two_strings_default_param_1(); // error: Expected 1-2 arguments, but got 0.


function concat_two_strings_default_param_2(str1: string = 'one', str2: string) {
    return '${str1} ${str2}';
}

concat_two_strings_default_param_2('1', '2');
concat_two_strings_default_param_2(undefined, '2');

/*
    Rest parameters


*/

function concat_strings(str: string, ...other_strings: string[]) {
    return "${str} ${other_strings.join('')}";
}

concat_strings('1', ...['2', '3', '4']);

let concat_strings_func_type: (str: string, ...other_strings: string[]) => string = concat_strings;

/*
    Overloads

    In order for the compiler to pick the correct typecheck,
    it follows a similar process to the underlying JavaScript.
    It looks at the overload list, and proceeding with the first overload
    attempts to call the function with the provided parameters.
    If it finds a match, it picks this overload as the correct overload.
    For this reason, it’s customary to order overloads
    from most specific to least specific.

    Function 'pickCard(x): any' piece is not part of the overload list,
    so it only has two overloads: one that takes an object
    and one that takes a number.
    Calling pickCard with any other parameter types would cause an error.
*/

let suits = ["hearts", "spades", "clubs", "diamonds"];


function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 }
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
