## Arrow Functions
### Expression Bodies
    odds = evens.map(v => v + 1);
    pairs = evens.map(v => {even: v, odd: v + 1});
    nums = evens.map((v, i) => v + i);

### Statement Bodies
    nums.forEach(v =>{
        if(v % 5 === 0)
            fives.push(v);
    });

### Lexical this
    this.nums.forEach((v) => {
        if(v % 5 === 0)
            this.fives.push(v);
    });