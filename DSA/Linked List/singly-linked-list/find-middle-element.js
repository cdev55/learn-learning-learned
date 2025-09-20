class node{
    constructor(data,next){
        this.data=data;
        this.next=null
    }
}

function findMiddle(head){
    let slow =head;
    let fast=head;

    while(fast && fast.next && slow){
        fast=fast.next.next;
        slow=slow.next;
    }

    return slow;

}