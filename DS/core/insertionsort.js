function insertionSort(arr){
   for(let i=1;i<arr.length;i++){
    let j=i-1;
    let m=arr[i]
    while(j>=0 && arr[j]>m){
       arr[j+1]=arr[j]
        j--;
    }
    arr[j+1]=m
   }
   console.log(arr)
}



insertionSort([44,53,20,10,88,79,102])