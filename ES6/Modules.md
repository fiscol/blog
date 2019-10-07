## Modules
### Value Export/Import
    // lib/math.js
    export function sum (x, y) {
        return x + y;
    };
    export let pi = 3.141593;

    // someApp.js
    import * as math from "lib/math";
    console.log("2π = " + math.sum(math.pi, math.pi)); // "2π = 6.283186"

    // otherApp.js
    import {sum, pi} from "lib/math";
    console.log("2π = " + sum(pi, pi)); // "2π = 6.283186"

### Default & Wildcard
    // lib/mathplusplus.js
    export * from "lib/math";
    export let e = 2.71828182846;
    export let pi = 3.141593;
    export exp (x) => Math.exp(x);

    // someApp.js
    import exp, {pi, e} from "lib/mathplusplus";
    console.log("e^{π} = " + exp(pi));