class node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

function detectLoop(head){
    let slow=head;
    let fast=head;

    while(fast!=null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;

        if(fast===slow){
            return true;
        }
    }
    return false;
}