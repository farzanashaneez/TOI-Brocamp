let bst;

function levelOrder(root){
  let queue=[];
  queue.push(root)
  while(queue.length>0){
    let popped=queue.pop()
    console.log(popped.value)
    if(root.left)
    queue.push(root.left)
    if(root.right)
    queue.push(root.right)
  }
}
class node{
    constructor(value){
        this.value=value
        this.left=null;
        this.right=null;
    }
}
let root=new node(10)
root.left=new node(5)
root.right=new node(15)
root.left.left=new node(3)
root.left.right=new node(7)
root.right.left=new node(13)
root.right.right=new node(17)

levelOrder(root)