## Meta-Programming
### Proxying
    let target = {
        foo: "Welcome, foo"
    };
    let proxy = new Proxy(target, {
        get (receiver, name) {
            return name in receiver? receiver[name] : `Hello, ${name}`;
        }
    });
    console.log(proxy.foo === "Welcome, foo"); // true
    console.log(proxy.world === "Hello, world"); // true

### Reflection
    let obj = {a : 1};
    Object.defineProperty(obj, "b", {value: 2});
    obj[Symbol("c")] = 3;
    console.log(Reflect.ownKeys(obj)); // ["a", "b", Symbol(c)]