// FIFO with priority using Object
function PriorityQueue(){
    let items = [];
    function QueueElement(element, priority){
        this.element = element;
        this.priority = priority;
    };
    this.enqueue = function(element, priority){
        const queueElement = new QueueElement(element, priority);
        if(this.isEmpty()){
            items.push(queueElement);
        }
        else{
            let added = false;
            for(let i = 0; i < items.length; i++){
                if(queueElement.priority < items[i].priority){
                    items.splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if(!added){
                items.push(queueElement);
            }
        }
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
        console.log(JSON.stringify(items));
    };
}