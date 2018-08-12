
export namespace Validators {

    export class ZipCodeValidator { };
    export class StringValidator { };

}

/* Multi-file namespaces */

// Validation.ts
//
// namespace Validation {
//     export interface StringValidator {
//         isAcceptable(s: string): boolean;
//     }
// }
//
// LettersOnlyValidator.ts
//
// /// <reference path="Validation.ts" />
// namespace Validation {
//     const lettersRegexp = /^[A-Za-z]+$/;
//     export class LettersOnlyValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return lettersRegexp.test(s);
//         }
//     }
// }
// ZipCodeValidator.ts

// /// <reference path="Validation.ts" />
// namespace Validation {
//     const numberRegexp = /^[0-9]+$/;
//     export class ZipCodeValidator implements StringValidator {
//         isAcceptable(s: string) {
//             return s.length === 5 && numberRegexp.test(s);
//         }
//     }
// }
//
// Test.ts
//
// /// <reference path="Validation.ts" />
// /// <reference path="LettersOnlyValidator.ts" />
// /// <reference path="ZipCodeValidator.ts" />
//
// // other code ...
//


// Once there are multiple files involved, we’ll need to make sure
// all of the compiled code gets loaded.
//
// There are two ways of doing this.
//
// First, we can use concatenated output using the --outFile flag
// to compile all of the input files into a single JavaScript output file:
//
//      tsc --outFile file.js file.ts
//
// The compiler will automatically order the output file
// based on the reference tags present in the files.
// You can also specify each file individually:
//
//      tsc --outFile file1.js ... fileN.ts

/* Aliases for namespaces*/

namespace Shapes {
    export namespace Polygons {
        export class Triangle { }
        export class Square { }
    }
}

import polygons = Shapes.Polygons;
let square = new polygons.Square();

