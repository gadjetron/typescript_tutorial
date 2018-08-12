/*
    Modules are executed within their own scope,
    not in the global scope; this means that variables, functions,
    classes, etc. declared in a module
    are not visible outside the module unless they are explicitly exported
    using one of the 'export' forms.Conversely, to consume a variable,
    function, class, interface, etc. exported from a different module,
    it has to be imported using one of the 'import' forms.

    Modules are declarative; the relationships between modules
    are specified in terms of imports and exports at the file level.

    In TypeScript, just as in ECMAScript 2015, any file
    containing a top-level import or export is considered a module.
    Conversely, a file without any top-level import or export declarations
    is treated as a script whose contents are available
    in the global scope (and therefore to modules as well).

*/

/* Export forms */

/*
    Any declaration (such as a variable, function, class,
    type alias, or interface) can be exported by adding the export keyword.
*/

export class ClassForExport { };
export const const_for_export = 2;

export {ClassForExport as ExportedClass};


/* Re-exports */

class ExportedPoint { };

export { Point as ExportedPoint } from './classes';

export * from './classes';

/* Import */

/* Single export */
import { Department } from "./classes";

/* renaming imported entity */
import { Point3D as point3D} from "./classes";

/* Importing entire module into a single variable */
import * as classes from "./classes";

let point = new classes.Point();

/* importing for side-effects only */
import './classes';

/*
    Default exports

    Each module can optionally export a default export.
    Default exports are marked with the keyword 'default';
    and there can only be one default export per module.
    'default' exports are imported using a different import form.

    default exports are really handy. For instance, a library like JQuery
    might have a default export of jQuery or $,
    which we’d probably also import under the name $ or jQuery.

*/

// JQuery.d.ts
//
// declare let $: JQuery;
// export default $;

// App.ts

// import $ from "JQuery";

// $("button.continue").html("Next Step...");

export default class DefaultExportedClass { };

// in another file
// import exported_class from './file';

/* 'export = require()' and 'import = require()' */

/*
    The 'export =' syntax specifies a single object
    that is exported from the module. This can be a class,
    interface, namespace, function, or enum.

    When exporting a module using 'export =',
    TypeScript-specific 'import module = require("module")'
    must be used to import the module.
*/

/* Optional Module Loading and Other Advanced Loading Scenarios */

// declare function require(module_name: string): any;
//
// if (true) {
//     let point_2: typeof classes.Point = require('./classes');
// }

/*
    Working with Other JavaScript Libraries

    To describe the shape of libraries not written in TypeScript,
    we need to declare the API that the library exposes.
*/

// node.d.ts(simplified excerpt)
//
// declare module "url" {
//     export interface Url {
//         protocol?: string;
//         hostname?: string;
//         pathname?: string;
//     }

//     export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
// }

// declare module "path" {
//     export function normalize(p: string): string;
//     export function join(...paths: any[]): string;
//     export var sep: string;
// }

/*
    Now we can

    /// <reference> node.d.ts

    and then load the modules using

    import url = require("url");

    or

    import * as URL from "url".
*/

/*
    Red Flags

    All of the following are red flags for module structuring.

        A file whose only top-level declaration is
            export namespace Foo { ... } (remove Foo and move everything ‘up’ a level)

        A file that has a single
            'export class' or 'export function' (consider using export default)

        Multiple files that have the same
            export namespace Foo { at top-level
            (don’t think that these are going to combine into one Foo!)
*/
