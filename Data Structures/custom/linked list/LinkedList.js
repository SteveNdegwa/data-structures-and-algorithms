class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {  /// O(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {  /// O(n)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.prepend(value);
    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
      this.size--;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
      this.size--;
    }
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
      return value;
    }
    let prev = this.head;
    while (prev.next) {
      if (prev.next.value == value) {
        prev.next = prev.next.next;
        this.size--;
        return value;
      } else {
        prev = prev.next;
      }
    }
    return null;
  }

  search(value) {
    if (!this.isEmpty()) {
      let curr = this.head;
      for (let i = 0; i < this.size; i++) {
        if (curr.value === value) return i;
        curr = curr.next;
      }
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();
console.log("is list empty", list.isEmpty());
console.log("list size", list.getSize());
list.print();
list.prepend(10);
list.prepend(20);
console.log(list.search(40));
list.print();
list.prepend(30);
list.prepend(30);
list.print();
list.append(40);
list.print();
list.insert(50, 2);
list.print();
list.insert(70, 0);
list.print();
console.log(list.removeFrom(3));
list.print();
console.log(list.removeValue(30));
list.print();
console.log(list.search(30));
list.reverse();
list.print();
