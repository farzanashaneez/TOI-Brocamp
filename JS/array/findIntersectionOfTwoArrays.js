function findIntersection(arr1,arr2){
    let res=new Set();
    for(let arr of arr1){
        if(arr2.includes(arr)){
            res.add(arr)
        }
    }
    // for(let arr of arr2){
    //     if(!arr1.includes(arr)){
    //         res.add(arr)
    //     }
    // }
    console.log(res)
}

findIntersection([1,2,3,4,5,6,7],[3,5,7,11,22,33,44])