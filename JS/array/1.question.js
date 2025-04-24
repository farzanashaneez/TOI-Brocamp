// find pair of number that add upto target

let arr=[1,2,3,4,5,6,7,8,9];

function find(arr,target){
   let set=new Set()
   let res=[]
   for(let i=0;i<arr.length;i++){
    let diff=target-arr[i]
    if(set.has(diff)){
        res.push([arr[i],diff])
    }
    set.add(arr[i])

   }
   console.log(res)
}
find(arr,10)

function finddifferencefound(arr,target){
    let set=new Set(arr)
    let res=[]
    for(let i=0;i<arr.length;i++){
     let diff=arr[i]-target
     if(set.has(diff)){
         res.push([arr[i],diff])
     }
     set.add(arr[i])
 
    }
    console.log(res)
 }
 finddifferencefound(arr,5)