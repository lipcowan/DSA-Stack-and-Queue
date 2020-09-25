class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Array {
    constructor() {
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length);
    }

    push(value) {
        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.set(this.ptr + this.length, value);
        this.length++;
    }

    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
}

Array.SIZE_RATIO = 3;


class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    remove(item){ 
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function display(list) {
    // Start at the top
    let currNode = list.top;
    let result = '';
    // console.log('currNode before: ', currNode.value);
    while (currNode !== null) {
      // console.log('currNode in while: ', currNode.value);
      result +=
        currNode.next === null ? `${currNode.value}` : `${currNode.value} -> `;
      currNode = currNode.next;
    }
    return result;
  }

const starTrek = new Stack();

const main = () => {
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    console.log(display(starTrek));
}

main();