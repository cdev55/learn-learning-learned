class node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let temp = head;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
}
