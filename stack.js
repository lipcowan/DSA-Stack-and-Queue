class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
    return;
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
      return tempNode.next;
    }
    return;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    prevNode.next = currNode.next;
  }
}

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertFirst(data);
  }

  pop() {
    let head = this.list.head;
    this.list.remove(head.value);
    return head.value;
  }

  peek() {
    let head = this.list.head;
    return head.data;
  }

  isEmpty() {
    let head = this.list.head;
    return head === null ? 'Empty' : 'Not empty';
  }

  display() {
    let head = this.list.head;
    let tempArr = []
    while (head !== null) {
      tempArr.push(head.data);
      head = head.next;
    }
    return tempArr;
  }
}

const starTrek = new Stack();
const emptyStack = new Stack();

const main = () => {
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  // console.log(starTrek);

  starTrek.pop();

  // console.log(starTrek);

  console.log(starTrek.peek());
  starTrek.pop();
  console.log(starTrek.display());
};

main();

// console.log(starTrek.isEmpty())
// console.log(emptyStack.isEmpty())