 /**
  * Follows principle of First In First Out (FIFO)
  * eg. queue of people in a line
  * 
  * operations; 
      Enqueue - add element to rear/ tail of collection
      Dequeue - remove an element from the front/head of the collection
   
  * examples;
      printers
      CPU task scheduling
      Callback queue in JavaScript runtime    
  */


class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }else{
            return null
        }
    }

    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}      

const queue = new Queue();

queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

console.log(queue.size());
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());

//// dequeue uses .shift which has linear time complexity which is not okay