let bst;
function preOrder(root){
    if(root){
        console.log(root.value);
        preOrder(root.left);
        preOrder(root.right)

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

preOrder(root)