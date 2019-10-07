## Symbol Type
### Symbol Type
    console.log(Symbol("foo") !== Symbol("foo")); // true
    const foo = Symbol();
    const bar = Symbol();
    console.log(typeof foo === "symbol"); // true
    console.log(typeof bar === "symbol"); // true
    let obj = {};
    obj[foo] = "foo";
    obj[bar] = "bar";
    JSON.stringify(obj); // {}
    Object.keys(obj); // []
    console.log(Object.getOwnPropertyNames(obj)); // []
    console.log(Object.getOwnPropertySymbols(obj)); // [foo, bar]

### Global Symbols
    console.log(Symbol.for("app.foo") === Symbol.for("app.foo")); // true
    const foo = Symbol.for("app.foo");
    const bar = Symbol.for("app.bar");
    console.log(Symbol.keyFor(foo) === "app.foo"); // true
    console.log(Symbol.keyFor(bar) === "app.bar"); // true
    console.log(typeof foo === "symbol"); // true
    console.log(typeof bar === "symbol"); // true
    let obj = {};
    obj[foo] = "foo";
    obj[bar] = "bar";
    JSON.stringify(obj); // {}
    Object.keys(obj); // []
    console.log(Object.getOwnPropertyNames(obj)); // []
    console.log(Object.getOwnPropertySymbols(obj)); // [foo, bar]