## Enhanced Object Properties
### Property Shorthand
    let x = 0, y = 0;
    obj = {x, y};

### Computed Property Names
    let obj = {
        foo: "bar",
        ["baz" + quux()]: 42
    };

### Method Properties
    obj = {
        foo (a, b){
            ...
        },
        bar (x, y){
            ...
        },
        *quux (x, y){
            ...
        }
    };