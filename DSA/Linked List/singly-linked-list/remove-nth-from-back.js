class node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

function removeNthFromBack(head,n){
    let slow=head;
    let fast=head;
    counter=0
    for (let i = 0; i < n; i++) {
        fast=fast.next;   
    }
    if(fast===null){
        return head.next;
    }
    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next;
    }
    let delNode=slow.next;
    slow.next=slow.next.next;
    return delNode;
}