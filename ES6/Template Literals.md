## Template Literals
### String Interpolation
    let customer = {name : "Foo"};
    let card = {amount: 7, product: "Bar", unitPrice: 42};
    let message = `Hello ${customer.name},
    want to buy ${card.amount} ${card.product} for 
    a total of ${card.amount * card.unitPrice} bucks?`;

### Custom Interpolation
    get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`;

### Raw String Access
    function quux (strings, ...values){
        console.log(strings[0] === "foo\n"); // true
        console.log(strings[1] === "bar"); // true
        console.log(strings.raw[0] === "foo\\n"); // true
        console.log(strings.raw[1] === "bar"); // true
        console.log(values[0] === 42); // true
    };
    quux`foo\n${ 42 }bar`
    console.log(String.raw`foo\n${ 42 }bar` === "foo\\n42bar"); // true
