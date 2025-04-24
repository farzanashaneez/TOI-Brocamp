function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
    console.log(arr)
}
selectionSort([44,53,20,10,88,79,102])