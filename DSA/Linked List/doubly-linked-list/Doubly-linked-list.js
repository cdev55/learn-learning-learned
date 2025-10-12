class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;  // Add this line
    }
}
class DoublyLinkedList {
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
            this.head.prev = n; // Link back from old head to new node
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
            n.prev = this.tail; // Link back from new node to old tail
            this.tail = n;
        }
        this.size++;
    }
    
 
    removeFirst() {
        if (this.size === 0) return null;
    
        const data = this.head.data;
    
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null; // Remove backward link
        }
    
        this.size--;
        return data;
    }
    
 
    removeLast() {
        if (this.size === 0) return null;
    
        const data = this.tail.data;
    
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null; // Remove forward link
        }
    
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
        if (index < 0 || index > this.size) return null;
    
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
        let counter = 0;
    
        while (counter < index) {
            current = current.next;
            counter++;
        }
    
        const prevNode = current.prev;
    
        n.prev = prevNode;
        n.next = current;
    
        prevNode.next = n;
        current.prev = n;
    
        this.size++;
    }
    
 
    removeAt(index) {
        if (index < 0 || index >= this.size) return null;
    
        if (index === 0) return this.removeFirst();
        if (index === this.size - 1) return this.removeLast();
    
        let current = this.head;
        let counter = 0;
    
        while (counter < index) {
            current = current.next;
            counter++;
        }
    
        const data = current.data;
        const prevNode = current.prev;
        const nextNode = current.next;
    
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    
        this.size--;
        return data;
    }
}
