class node{
    constructor(data,next){
        this.data=data;
        this.next=next;
    }
}

function reverseLL(head){
    let prev=null;
    let current=head;

    while(current!==null && current.next!==null){
        let temp=current.next;
        current.next=prev;
        prev=current;
        current=temp;
    }
    return current;
}

function findMiddleNode(head){
    let slow=head;
    let fast=head;

    while(fast!==null && fast.next!==null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow
}

function checkPalindrome(head){

    if(head===null || head.next===null){
        return head;
    }
    
    let middleNode=findMiddleNode(head);
    let newHead=reverseLL(middleNode.next)
    let first=head;
    let second=newHead;

    while(second!==null){
        if(first.data!==second.data){
            reverseLL(newHead);
            return false;
        }

        first=first.next;
        second=second.next;
    }

    reverseLL(newHead);
    return true;

}