const LinkedListTail = require("./LinkedListTail");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    return this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromEnd();
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

const stack = new LinkedListStack();
console.log(stack.isEmpty());
console.log(stack.getSize());
stack.push(4);
stack.print();
stack.push(6);
stack.push(5);
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();
