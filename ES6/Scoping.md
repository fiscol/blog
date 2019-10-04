## Scoping
### Block-Scoped Variables
    for(let i = 0; i < a.length; i++){
        let x = a[i];
    }
    for(let i = 0; i < b.length; i++){
        let y = b[i];
    }

    let callbacks = [];
    for(let i = 0; i < 2; i++){
        callbacks[i] = function(){return i * 2;};
    }
    console.log(callbacks[0]() === 0); // true
    console.log(callbacks[1]() === 2); // true
    console.log(callbacks[2]() === 4); // true

### Block-Scoped Functions
    {
        function foo(){ return 1;};
        console.log(foo() === 1); // false
        {
            function foo(){return 2;};
            console.log(foo() === 2); // true
        }
        console.log(foo() === 1); // false
    }