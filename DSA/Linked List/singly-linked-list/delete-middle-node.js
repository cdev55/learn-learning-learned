class node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

function deleteMiddleNode(head){
    if(head===null || head.next===null){
        return null;
    }
    let slow=head;
    let fast=head;
    fast=fast.next.next;

    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }

    let delNode=slow.next;
    slow.next=slow.next.next;
    return delNode;
}