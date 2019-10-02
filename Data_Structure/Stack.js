// LIFO Structure
function Stack(){
    let items = [];
    this.push = function(val){
        items.push(val);
        return true;
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length - 1];
    };
    this.isEmpty = function(){
        return items.length === 0;
    };
    this.clear = function(){
        items = [];
        return true;
    };
    this.size = function(){
        return items.length;
    };
    this.print = function(){
        console.log(items.toString());
    };
}