## Extended Parameter Handling
### Default Parameter Values
    function f (x, y = 7, z = 42){
        return x + y + z;
    };
    console.log(f(1) === 50); // true

### Rest Parameter
    function f (x, y, ...a) {
        return (x + y) * a.length;
    };
    console.log(f(1, 2, "hello", true, 7) === 9); // true

### Spread Operator
    let params = ["hello", true, 7];
    let other = [1, 2, ...params];

    function f (x, y, ...a){
        return (x + y) * a.length;
    };
    console.log(f(1, 2, ...params) === 9); // true

    let str = "foo";
    let chars = [...str]; // ["f", "o", "o"]
