class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null) return root.left = newNode;
            return this.insertNode(root.left, newNode);
        }

        if(newNode.value > root.value){
            if(root.right === null) return root.right = newNode;
            return this.insertNode(root.right, newNode);
        }
    }

    search(root, value){
        if(!root) return false;
        if(root.value === value) return true;
        if(value < root.value) return this.search(root.left, value);
        if(value > root.value) return this.search(root.right, value);
    }

    preOrder(root){
        if(!root) return;
        console.log(root.value);
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

    inOrder(root){
        if(!root) return;
        this.inOrder(root.left)
        console.log(root.value);
        this.inOrder(root.right)
    }

    postOrder(root){
        if(!root) return;
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.value);
            curr.left && queue.push(curr.left)
            curr.right && queue.push(curr.right)
        }
    }

    min(root){
        if(root.left) return this.min(root.left)
        return root.value;
    }

    max(root){
        if(root.right) return this.min(root.right)
        return root.value;
    }

    delete(value){
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value){
        if(root === null) return root;
        if(value < root.value) root.left = this.deleteNode(root.left, value); 
        else if(value > root.value) root.right = this.deleteNode(root.right, value);
        else{
            if(!root.left && !root.right) return null;
            if(!root.left) return root.right;
            if(!root.right) return root.left;
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root; 
    }
}

const bst = new BinarySearchTree();
console.log("Tree is empty?", bst.isEmpty());

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


console.log("Tree is empty?", bst.isEmpty());

console.log(bst.search(bst.root, 10));
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 5));

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()

console.log("min = ",bst.min(bst.root));
console.log("max = ",bst.max(bst.root));

bst.inOrder(bst.root)
bst.delete(3);
bst.inOrder(bst.root)