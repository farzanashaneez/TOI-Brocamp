function merge(arr1,arr2){
    let res=[]
    while(arr1.length&&arr2.length){
        if(arr1[0]<arr2[0]){
            res.push(arr1.shift())
        }
        else{
            res.push(arr2.shift())
        }
    }
    console.log(res)
    if(arr1.length){
        res=res.concat(arr1)
    }
    if(arr2.length){
        res=res.concat(arr2)
    }
    console.log(res,arr1,arr2)
}

merge([1,3,5,7,8,9],[2,4,6,8,10,12,])