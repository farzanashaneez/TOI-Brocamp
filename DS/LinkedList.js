class Node{
    constructor(value){
        this.value=value
        this.next=null;
    }

}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }
    append(value){
        let newnode=new Node(value)

        if(this.head===null){
            this.head=newnode
        }else{
            let crr=this.head;
            while(crr.next){
                crr=crr.next
            }
            crr.next=newnode;
        }
        this.size++
    }
    display(){
        let res=[];
        let crr=this.head;
        while(crr){
            res.push(crr.value)
            crr=crr.next
        }
        console.log(res)
    }
}
let ob=new LinkedList()
ob.append(1)
ob.append(2)
ob.append(3)
ob.append(4)
ob.append(5)
ob.append(6)
ob.append(7)
ob.display()

let root=new Node(11);
root.next=new Node(12);
root.next.next=new Node(13);
root.next.next.next=root.next;
// root.next.next.next.next=new Node(14);
let ob2=new LinkedList()
ob2.head=root
// ob2.display()

function detectCycle(head){
    let slow=head;
    let fast=head;
    while(fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast){
            return true
        }
    }
    return false
}
console.log(detectCycle(ob2.head))
