## Extended Literals
### Binary & Octal Literal
    console.log(0b111110111 === 503); // true
    console.log(0o767 === 503); // true

### Unicode String & RegExp Literal
    console.log("𠮷".length === 2); // true
    console.log("𠮷".match(/./u)[0].length === 2); // true
    console.log("𠮷" === "\uD842\uDFB7"); // true
    console.log("𠮷" === "\u{20BB7}"); // true
    console.log("𠮷".codePointAt(0) === 0x20BB7); // true
    for(let codepoint of "𠮷") console.log(codepoint); // "𠮷"