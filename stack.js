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
    return head.data;
  }

  peek() {
    let head = this.list.head;
    return head.data;
  }

  isEmpty() {
    let head = this.list.head;
    return head === null;
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

  // console.log(starTrek.peek());
  starTrek.pop();
  starTrek.display();
  // console.log(starTrek.display());
};

main();

// console.log(starTrek.isEmpty())
// console.log(emptyStack.isEmpty())

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // Your code goes here
  let stackA = new Stack();
  let halfS = Math.floor((s.length)/2);
//   console.log(halfS);

  for (let i = 0; i < s.length; i ++) {
    stackA.push(s[i]);
  }

//   let tempA = stackA.display();

  for (let i = 0; i < halfS; i ++) {
      if (stackA.pop() !== s[i]) {
          return false;
      }
  }

  return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

function matchParen(exp) {
	let parenCount = 0;
	
}

console.log(matchParen('(2 + 2) - (1 + 1)'));
console.log(matchParen('2 + 2) - (1 + 1)'));