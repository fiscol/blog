// LinkedList
function LinkedList(){
    const Node = function(element){
        this.element = element;
        this.next = null;
    };
    let length = 0;
    let head = null;
    this.append = function(element){
        const node = new Node(element);
        let current;

        if(head === null){
            head = node;
        }
        else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
    this.insert = function(position, element){
        if(position >= 0 && position <= length){
            let node  = new Node(element);
            let current = head;
            let previous;
            let index = 0;
            if(position === 0){
                node.next = current;
                head = node;
            }
            else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        }
        else{
            return false;
        }
    };
    this.remove = function(element){
        let index = this.indexOf(element);
        return this.removeAt(index);
    };
    this.removeAt = function(position){
        if(position > -1 && position < length){
            let current = head;
            let previous;
            let index = 0;
            if(position === 0){
                head = current.next;
            }
            else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        }
        else{
            return null;
        }
    };
    this.indexOf = function(element){
        let current = head;
        let index = -1;

        while(current){
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function(){
        return length === 0;
    };
    this.size = function(){
        return length;
    };
    this.toString = function(){
        let current = head;
        let string = "";
        while(current){
            sreing += current.element;
            current = current.next;
        }
        return string;
    };
    this.getHead = function(){
        return head;
    };
}