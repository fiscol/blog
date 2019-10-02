function Set(){
    let items = {};
    this.add = function(value){
        if(!this.has(value)){
            items[value] = value;
            return true;
        }
        return false;
    };
    this.remove = function(value){
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };
    this.has = function(value){
        return items.hasOwnProperty(value);
    };
    this.clear = function(){
        items = {};
    };
    this.size = function(){
        return Object.keys(items).length;
    };
    this.values = function(){
        // return Object.keys(items);

        // Another more adaptable way
        let keys = [];
        for(let key in items){
            keys.push(key);
        }
        return keys;
    };
    this.union = function(otherSet){
        let unionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for(let j = 0; j < values.length; j++){
            unionSet.add(values[j]);
        }
        return unionSet;
    };
    this.interSection = function(otherSet){
        let intersectionSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(otherSet.has(values[i])){
                intersectionSet.add(values[i]);
            }
        }
        return intersectionSet;
    };
    this.difference = function(otherSet){
        let differenceSet = new Set();
        let values = this.values();
        for(let i = 0; i < values.length; i++){
            if(!otherSet.has(values[i])){
                differenceSet.add(values[i]);
            }
        }
        return differenceSet;
    };
    this.subSet = function(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }
        else{
            let values = this.values();
            for(let i = 0; i < values.length; i++){
                if(!otherSet.has(values[i])){
                    return false;
                }
            }
            return true;
        }
    };
}