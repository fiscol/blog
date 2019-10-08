## Generators
### Generator Function, Iterator Protocol
    let fibonacci = {
        *[Symbol.iterator](){
            let pre = 0, cur = 1;
            for(;;){
                [pre, cur] = [cur, pre + cur];
                yield cur;
            }
        }
    }

    for(let n of fibonacci){
        if(n > 1000)
            break;
        console.log(n); // 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
    }

### Generator Function, Direct Use
    function* range (start, end, step){
        while(start < end){
            yield start;
            start += step;
        }
    }

    for(let i of range(0, 10, 2)){
        console.log(i); // 0, 2, 4, 6, 8
    }

### Generator Matching
    let fibonacci = function* (numbers){
        let pre = 0, cur = 1;
        while(numbers-- > 0){
            [pre, cur] = [cur, pre + cur];
            yield cur;
        }
    };

    for (let n of fibonacci(1000))
        console.log(n); // 1 2 3 5 8 ...
    
    let numbers = [...fibonacci(1000)]; // numbers.length === 1000

    let [n1, n2, n3, ...others] = fibonacci(1000); // others.length === 997

### Generator Control-Flow
    function async (proc, ...params){
        let iterator = proc(...params);
        return new Promise((resolve, reject) => {
            let loop = (value) => {
                let result;
                try{
                    result = iterator.next(value);
                }
                catch(err){
                    reject(err);
                }
                if(result.done)
                    resolve(result.value);
                else if(typeof result.value === "object"
                        && typeof result.value.then === "function")
                            result.value.then((value) => {
                                loop(value);
                            }, (err) => {
                                reject(err);
                            });
                else
                    loop(result.value);
            }
            loop();
        });
    }

    function makeAsync(text, after){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(text), after)
        });
    }

    async(function* (greeting){
        let foo = yield mekeAsync("foo", 300);
        let bar = yield makeAsync("bar", 200);
        let baz = yield makeAsync("baz", 100);
        return `${greeting} ${foo} ${bar} ${baz}`
    }, "Hello").then((msg) => {
        console.log("RESULT:", msg); // "RESULT:" "Hello foo bar baz"
    })

### Generator Methods
    class Clz{
        * bar (){
            ...
        }
    };
    let Obj = {
        * foo (){
            ...
        }
    };