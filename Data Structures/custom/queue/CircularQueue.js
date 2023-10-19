/**
 * Re-uses empty block created during dequeue operation
 * Great for a queue with fixed length

 *uses
   *clock
   *traffic lights
   *streaming buffer
 */

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    } else {
      console.log("queue is full");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength--;
      if(this.isEmpty()){
        this.front = -1
        this.rear = -1
      }
    }
  }

  peek(){
    if(this.isEmpty()){
        return null
    }else{
        return this.items[this.front]
    }
  }

  print(){
    if(this.isEmpty()){
        console.log("Queue is empty");
    }else{
        let i;
        let str = '';
        for(i = this.front; i !== this.rear; i = (i+1) % this.capacity){
            str += this.items[i] + " ";
        }
        str += this.items[i]
        console.log(str);
    }
  }
}

const queue = new CircularQueue(3);
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(6)
queue.print();
console.log(queue.peek());
console.log(queue.isEmpty());
console.log(queue.isFull());
queue.dequeue()
queue.enqueue(6)
queue.print();
console.log(queue.peek());


