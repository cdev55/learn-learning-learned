class node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

function findStartingPoint(head){
    let slow=head;
    let fast=head;

    while(fast!==null && fast.next.next!==null){
        slow=slow.next;
        fast=fast.next.next;

        if(slow===fast){
            slow=head;
            while(slow!==fast){
                slow=slow.fast;
                fast=fast.next;
            }
            return slow;
        }
    }
return null;
}