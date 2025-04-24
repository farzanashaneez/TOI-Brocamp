let bst;
function inorder(root){
    if(root){
        inorder(root.left);
        console.log(root.value);
        inorder(root.right)
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

inorder(root)