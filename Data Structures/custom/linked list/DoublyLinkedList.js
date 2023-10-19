//// node has next and previous pointers

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    /// O(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    /// O(1)
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) return this.prepend(value);
    if (index === this.size - 1) return this.append(value);
    const node = new Node(value);
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    node.previous = prev;
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) return null;
    const value = this.head.value;
    this.head = this.head.next;
    this.head.previous = null;
    if (this.size === 1) {
      this.tail = null;
    }
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) return null;
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return value;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) return this.removeFromFront();
    if (index === this.size - 1) return this.removeFromEnd();

    let removedNode;
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    removedNode = prev.next;
    prev.next = removedNode.next;
    removedNode.next.previous = prev;
    if (this.size == 1) {
      this.tail = null;
    }
    this.size--;

    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) return null;
    if (this.head.value == value) {
      this.head = this.head.next;
      if (this.size == 1) {
        this.tail = null;
      }
      this.size--;
      return value;
    }
    let prev = this.head;
    while (prev.next) {
      if (prev.next.value == value) {
        prev.next = prev.next.next;
        prev.next.next.previous = prev
        if (this.size == 1) {
          this.tail = null;
        }
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
    this.tail = this.head;
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

const list = new DoublyLinkedList;
list.prepend(1)
list.prepend(2)
list.prepend(3)
list.print();
list.append(5)
list.append(6)
list.print();
list.removeFromFront();
list.removeFromEnd();
list.print();
list.removeFrom(1)