//// use object so that both enqueue and dequeue have constant time complexity


class OptimizedQueue{
    constructor(){
        this.items = {}
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){ // add elements to rear
        this.items[this.rear] = element;
        this.rear++;
    }

    dequeue(){
        const item =  this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front]
        }else{
            return null
        }
    }

    size(){
        return this.rear - this.front;
    }

    print(){
        console.log(this.items);
    }
}      

const queue = new OptimizedQueue();

queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());