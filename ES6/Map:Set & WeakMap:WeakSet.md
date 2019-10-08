## Map/Set & WeakMap/WeakSet
### Set Data-Structure
    let s = new Set();
    s.add("hello").add("goodbye").add("hello");
    console.log(s.size === 2); // true
    console.log(s.has("hello") === true); // true
    for(let key of s.values())
        console.log(key); // "hello" "goodbye"

### Map Data-Structure
    let m = new Map();
    let s = Symbol();
    m.set("hello", 42);
    m.set(s, 34);
    console.log(m.get(s) === 34); // true
    console.log(m.size === 2); // true
    for(let [key, val] of m.entries())
        console.log(key + " = " + val);

### Weak-Link Data-Structures
    let isMarked = new WeakSet();
    let attachedData = new WeakMap();

    export class Node{
        constructor(id){
            this.id = id;
        }
        mark(){
            isMarked.add(this);
        }
        unmark(){
            isMarked.delete(this);
        }
        marked(){
            return isMarked.has(this);
        }
        set data(data){
            attachedData.set(this, data);
        }
        get data(){
            return attachedData.get(this);
        }
    }

    let foo = new Node("foo");

    console.log(JSON.stringify(foo) === '{"id":"foo"}'); // true
    foo.mark();
    foo.data = "bar";
    console.log(foo.data === "bar"); // true
    console.log(JSON.stringify(foo) === '{"id":"foo"}'); // true

    console.log(isMarked.has(foo) === true); // true
    console.log(attachedData.has(foo) === true); // true
    foo = null;
    console.log(attachedData.has(foo) === false); // true
    console.log(isMarked.has(foo) === false); // true