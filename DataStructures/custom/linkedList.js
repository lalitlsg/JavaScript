class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(element) {
    if (!this.head) {
      this.head = new Node(element);
      this.tail = this.head;
      this.length++;
    } else {
      this.tail.next = new Node(element);
      this.tail = this.tail.next;
      this.length++;
    }
  }

  prepend(element) {
    if (!this.head) {
      this.head = new Node(element);
      this.tail = this.head;
      this.length++;
    } else {
      const new_node = new Node(element);
      new_node.next = this.head;
      this.head = new_node;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.length--;
  }

  shift() {
    if (!this.head) {
      return null;
    }
    this.head = this.head.next;
    this.length--;
  }

  removeElement(element) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let previous = this.head;
    while (current) {
      if (this.head.element === element) {
        this.shift();
        previous = current;
        current = current.next;
      } else if (current.element === element) {
        previous.next = current.next;
        current = current.next;
        this.length--;
      } else {
        previous = current;
        current = current.next;
      }
    }
  }

  addElement(element, index) {
    let iterator = 0;
    let current = this.head;
    if (index === 0) {
      this.prepend(element);
      return;
    }
    while (iterator < index - 1) {
      current = current.next;
      iterator++;
    }
    const new_node = new Node(element);
    new_node.next = current.next;
    current.next = new_node;
    this.length++;
  }

  findIndex(element) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    let iterator = 0;
    while (current) {
      if (current.element === element) {
        return iterator;
      }
      iterator++;
      current = current.next;
    }
    return null;
  }

  printList() {
    let list_elements = "";
    let current = this.head;
    while (current) {
      list_elements = list_elements + " " + current.element;
      current = current.next;
    }
    return list_elements;
  }
}

const linked = new LinkedList();

linked.append(10);
linked.append(10);
linked.append(20);
linked.append(20);
linked.append(30);
linked.append(40);
linked.append(50);
// linked.prepend(0);
// linked.prepend(-10);
// linked.pop();
// linked.pop();
// linked.shift();
// linked.shift();
// linked.removeElement(10);
// linked.removeElement(20);
// linked.removeElement(50);
// linked.addElement(-20, 0);
console.log(linked.printList());
// console.log(linked.length);
console.log(linked.findIndex(500));
