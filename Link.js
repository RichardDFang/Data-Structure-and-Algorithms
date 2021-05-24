const Node = require('./Node');

class Link {
    constructor() {
        this.head = new Node();
        this.head.pos = 0;
    }
    insert(pos, value) {
        let item = new Node(value);
        if (this.head.value) {
            item.next = this.head.next;
            this.head.next = item;
        }
        this.head = item;
    }
    remove(value) {}
    modify(value) {}
}

export default Link;