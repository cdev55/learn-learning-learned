class node{
    constructor(data,next){
        this.data=data;
        this.next=next
    }
}

function lengthOfLoop(head){
    let slow=head;
    let fast=head;

    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;

        if(slow===fast){
            let counter=1
            fast=fast.next;
            while(slow!==fast){
                counter++;
                fast=fast.next;
            }
            return counter
        }
    }
    return 0;
}