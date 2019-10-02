// BinarySearchTree
function BinarySearchTree(){
    const Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    let root = null;

    const insertNode = function(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            }
            else{
                insertNode(node.left, newNode);
            }
        }
        else{
            if(node.right === null){
                node.right = newNode;
            }
            else{
                insertNode(node.right, newNode);
            }
        }
    };
    this.insert = function(key){
        let newNode = new Node(key);

        if(root === null){
            root = newNode;
        }
        else{
            insertNode(root, newNode);
        }
    };
    const searchNode = function(node, key){
        if(node === null){
            return false;
        }
        if(key < node.key){
            return searchNode(node.left, key);
        }
        else if(key > node.key){
            return searchNode(node.right, key);
        }
        else{
            return true;
        }
    };
    this.search = function(key){
        return this.searchNode(root, key);
    };
    const inOrderTraverseNode = function(node, callback){
        if(node !== null){
            inOrderTraverseNode(node.left, callback);
            callback(node.key);
            inOrderTraverseNode(node.right, callback);
        }
    };
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root, callback);
    };
    const preOrderTraverseNode = function(node, callback){
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    };
    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root, callback);
    };
    const postOrderTraverseNode = function(node, callback){
        if(node !== null){
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    };
    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root, callback);
    };
    const minNode = function(node){
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    };
    this.min = function(){
        return minNode(root);
    };
    const maxNode = function(node){
        if(node){
            while(node && node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    };
    this.max = function(){
        return maxNode(root);
    };
    const removeAt = function(node, key){
        if(node !== null){

        }
    };
    this.remove = function(key){

    };
}