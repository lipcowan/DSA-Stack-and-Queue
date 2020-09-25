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
    }
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
        this.list = new LinkedList()
    }

    push(data) {
        this.list.insertLast(data);
        return this.top;
    }

    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}


const starTrek = new Stack();

const main = () => {
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');

    console.log(starTrek);
}

main();