## New Built-In Methods
### Object Property Assignment
    let dest = {quux: 0};
    let src1 = {foo: 1, bar: 2};
    let src2 = {foo: 3, baz: 4};
    Object.assign(dest, src1, src2);
    console.log(dest.quux === 0); // true
    console.log(dest.foo === 3); // true
    console.log(dest.bar === 2); // true
    console.log(dest.baz === 4); // true

### Array Element Finding
    [1, 3, 4, 2].find(x => x > 3); // 4
    [1, 3, 4, 2].findIndex(x => x > 3); // 2

### String Repeating
    " ".repeat(4 * depth);
    "foo".repeat(3); // "foofoofoo"

### String Searching
    "hello".startsWith("ello", 1); // true
    "hello".ends.With("hell", 4); // true
    "hello".includes("ell"); // true
    "hello".includes("ell", 1); // true
    "hello".includes("ell", 2); // false

### Number Type Checking
    Number.isNaN(42) === false;
    Number.isNaN(NaN) === true;

    Number.isFinite(Infinity) === false;
    Number.isFinite(-Infinity) === false;
    Number.isFinite(NaN) === false;
    Number.isFinite(123) === true;

### Number Safety Checking
    Number.isSafeInteger(42) === true;
    Number.isSafeInteger(9007199254740992) === false;

### Number Comparison
    console.log(0.1 + 0.2 === 0.3); // false
    console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true

### Number Truncation
    console.log(Math.trunc(42.7)); // 42
    console.log(Math.trunc(0.1)); // 0
    console.log(Math.trunc(-0.1)); // -0

### Number Sign Determination
    console.log(Math.sign(7)); // 1
    console.log(Math.sign(0)); // 0
    console.log(Math.sign(-0)); // -0
    console.log(Math.sign(-7)); // -1
    console.log(Math.sign(NaN)); // NaN