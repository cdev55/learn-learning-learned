class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
 
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
 
    prependData(data) {
        const n = new Node(data);
        if (this.size === 0) {
            this.head = n;
            this.tail = n;
        } else {
            n.next = this.head;
            this.head = n;
        }
        this.size++;
    }
 
    appendData(data) {
        const n = new Node(data);
        if (this.size === 0) {
            this.head = n;
            this.tail = n;
        } else {
            this.tail.next = n;
            this.tail = n;
        }
        this.size++;
    }
 
    removeFirst() {
        if (this.size === 0) {
            return null;
        }
 
        if (this.size === 1) {
            const data = this.head.data;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return data;
        }
        const data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
 
    }
 
    removeLast() {
        if (this.size === 0) {
            return null;
        }
 
        if (this.size === 1) {
            const data = this.head.data;
            this.head = null;
            this.tail = null;
            this.size = 0;
            return data;
        }
 
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        const data = current.next.data;
        current.next = null;
        this.tail = current;
        this.size--;
        return data;
    }
 
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result;
    }
 
    insertAt(index, data) {
        if (index < 0 || index > this.size) {
            return null;
        }
        if (index === 0) {
            this.prependData(data);
            return;
        }
        if (index === this.size) {
            this.appendData(data);
            return;
        }
        const n = new Node(data);
        let current = this.head;
        let prev = null;
        let counter = 0;
        while (counter < index) {
            prev = current;
            current = current.next;
            counter++;
        }
        prev.next = n;
        n.next = current;
        this.size++;
    }
 
    removeAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        if (index === 0) {
            return this.removeFirst();
        }
        if (index === this.size - 1) {
            return this.removeLast();
        }
        let current = this.head;
        let prev = null;
        let counter = 0;
        while (counter < index) {
            prev = current;
            current = current.next;
            counter++;
        }
        const data = current.data;
        prev.next = current.next;
        this.size--;
        return data;
    }
 
}