## Iterators
### Iterator & For-of Operator
    let fibonacci = {
        [Symbol.iterator](){
            let pre = 0, cur = 1;
            return {
                next(){
                    [pre, cur] = [cur, pre + cur];
                    return {done: false, value: cur};
                }
            };
        };
    };

    for(let n of fibonacci){
        if(n > 1000)
            break;
        console.log(n); // 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987
    };