function quickSort(arr){
    if(arr.length<2)
    return arr

    let pivot=arr[arr.length-1];
    let leftarr=[];
    let rightarr=[];
   for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pivot)
    leftarr.push(arr[i])
   
   else{
    rightarr.push(arr[i])
   }
}
return [...quickSort(leftarr),pivot,...quickSort(rightarr)]
}
console.log(quickSort([44,53,20,10,88,79,102]))