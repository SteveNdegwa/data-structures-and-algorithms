const LinkedListTail = require("./LinkedListTail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    return this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());
console.log(queue.getSize());
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.getSize());
queue.print();
console.log(queue.peek());
queue.dequeue();
queue.dequeue();
queue.print();
