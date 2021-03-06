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

  toArray() {
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
  starTrek.toArray();
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
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchingKindsOfParens(open, close) {
	return (open === '(' && close === ')') || 
					(open === '[' && close === ']') ||
					(open === '{' && close === '}')
}

function matchParensInExpression(exp) {
	let parenStack = new Stack();

	for (let i=0; i<=exp.length -1; i++) {
		let currChar = exp[i];
		// console.log("matchParen -> currChar", currChar)
		if (currChar === '(' || currChar === '[' || currChar === '{') {
			parenStack.push([currChar, i])
		}
		if (currChar === ')' || currChar === ']' || currChar === '}') {
			if (parenStack.isEmpty()) {
				return (`Found "${currChar}" without a match at ` + i);
			}
			if (matchingKindsOfParens(parenStack.peek()[0], currChar)) {
				parenStack.pop()
			} else {
				return (`Found "${currChar}" without a match at ` + i);
			}
		}
	}
	// console.log("Here", parenStack);
	if (parenStack.isEmpty()) return true;
	let problemParen = parenStack.pop();
	return (`Found "${problemParen[0]}" without a match at ` + problemParen[1]);
}

console.log(matchParensInExpression('(2 + 2) - (1 + 1)'));
console.log(matchParensInExpression('2 + 2) - (1 + 1)'));
console.log(matchParensInExpression('(2 + 2 - (1 + 1)'));
console.log(matchParensInExpression('([)]'));
console.log(matchParensInExpression('()[]'));
console.log(matchParensInExpression('{[]'));
console.log(matchParensInExpression('2 + 2} - 1 + 1]'));

