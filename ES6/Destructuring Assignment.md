## Destructuring Assignment
### Array Matching
    let list = [1, 2, 3];
    let [a, , b] = list;
    [b, a] = [a, b];

### Object Matching, Shorthand Notation
    let {op, lhs, rhs} = getASTNode();

### Object Matching, Deep Matching
    let {op: a, lhs: {op: b}, rhs: c} = getASTNode();

### Object And Array Matching, Default Values
    let obj = {a: 1};
    let list = [1];
    let {a, b = 2} = obj;
    let [x, y = 2] = list;

### Parameter Context Matching
    function f ([name, val]){
        console.log(name, val); // "bar" 42
    };
    function g ({name: n, val: v}){
        console.log(n, v); // "foo" 7
    };
    function h ({name, val}){
        console.log(name, val); // "bar" 42
    };
    f(["bar", 42]);
    g({name: "foo", val: 7});
    h({name: "bar", val: 42});

### Fail-Soft Destructuring
    let list = [7, 42];
    let [a = 1, b = 2, c = 3, d] = list;
    console.log(a === 7); // true
    console.log(b === 42); // true
    console.log(c === 3); // true
    console.log(d === undefined); // true