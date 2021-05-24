class ArrayStack {
    constructor(n) {
        this.arr = [];
        this.maxSize = n || 20;
    }
    push(value) {
        if (this.arr.length <= this.maxSize) {
            this.arr.push(value);
        } else {
            throw new Error(`the stack's maxsize is ${this.maxSize}`);
        }
    }
    pop(value) {
        this.arr.pop(value)
    }
    count() {
        return this.arr.length;
    }
}