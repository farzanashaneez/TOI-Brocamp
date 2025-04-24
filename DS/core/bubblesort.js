function bubblesort(arr){
    let swapped=true
    do{
        swapped=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]]= [arr[i+1],arr[i]]
                swapped=true
            }
        }
    }while(swapped)
    console.log(arr)

}
bubblesort([44,53,20,10,88,79,102])