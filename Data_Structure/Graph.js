// Graph
function Graph(){
    let vertices = [];
    const adjList = new Dictionary();
    this.addVertex = function(v){
        vertices.push(v);
        adjList.set(v, []);
    };
    this.addEdge = function(v, w){
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };
    this.toString = function(){
        let s = "";
        for(let i = 0; i < vertices.length; i++){
            s += vertices[i] + "->";
            let neighbors = adjList.get(vertices[i]);
            for(let j = 0; j < neighbors.length; j++){
                s += neighbors[j] + " ";
            }
            s += "\n";
        }
        return s;
    };

    const initializeColor = function(){
        let colors = [];
        for(let i = 0; i < vertices.length; i++){
            colors[vertices[i]] = "white";
        }
        return colors;
    };
    this.bfs = function(v, callback){
        let colors = initializeColor();
        let queue = new Queue();
        queue.enqueue(v);
        while(!queue.isEmpty()){
            let u = queue.dequeue();
            let neighbors = adjList.get(u);
            colors[u] = "grey";
            for(let i = 0; i < neighbors.length; i++){
                let w = neighbors[i];
                if(colors[w] === "white"){
                    colors[w] = "grey";
                    queue.enqueue(w);
                }
            }
            colors[u] = "black";
            if(callback){
                callback(u);
            }
        }
    };
    this.dfs = function(callback){
        let colors = initializeColor();
        for(let i = 0; i < vertices.length; i++){
            if(colors[vertices[i]] === "white"){
                dfsVisit(vertices[i], colors, callback);
            }
        }
    };
    const dfsVisit = function(u, colors, callback){
        colors[u] = "grey";
        if(callback){
            callback(u);
        }
        let neighbors = adjList.get(u);
        for(let i = 0; i < neighbors.length; i++){
            let w = neighbors[i];
            if(colors[w] === "white"){
                dfsVisit(w, colors, callback);
            }
        }
        colors[u] = "black";
    };
    /*let time = 0;
    this.DFS = function(){
        let colors = initializeColor();
        let d = [];
        let f = [];
        let p = [];
        let time = 0;

        for(let i = 0; i < vertices.length; i++){
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }

        for(let i = 0; i < vertices.length; i++){
            if(colors[vertices[i]] === "white"){
                DFSVisit(vertices[i], colors, d, f, p);
            }
        }

        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    };
    const DFSVisit = function(u, colors, d, f, p){
        colors[u] = "grey";
        d[u] = ++time;
        let neighbors = adjList.get(u);
        for(let i = 0; i < neighbors.length; i++){
            let w = neighbors[i];
            if(colors[w] === "white"){
                p[w] = u;
                DFSVisit(w, colors, d, f, p);
            }
        }
        colors[u] = "black";
        f[u] = ++time;
    };*/
}

// Dictionary
function Dictionary(){
    let items = {};
    this.set = function(key, value){
        items[key] = value;
    };
    this.remove = function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };
    this.has = function(key){
        return key in items;
        // return items.hasOwnProperty(key);
    };
    this.get = function(key){
        return this.has(key) ? items[key] : undefined;
    };
    this.clear = function(){
        items = {};
    };
    this.size = function(){
        return Object.keys(items).length;
    };
    this.keys = function(){
        return Object.keys(items);
    };
    this.values = function(){
        let values = [];
        for(let k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };
    this.getItems = function(){
        return items;
    }
}

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