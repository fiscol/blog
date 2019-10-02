// FIFO Structrue
function Queue(){
    let items = [];
    this.enqueue = function(element){
        items.push(element);
        return true;
    };
    this.dequeue = function(){
        return items.shift();
    };
    this.front = function(){
        return items[0];
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