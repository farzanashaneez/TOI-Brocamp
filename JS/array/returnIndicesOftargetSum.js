function find(arr,target){
let indexarr=[];
for(let i=0;i<arr.length;i++){
    let diff=target-arr[i]
console.log(diff)
    if(arr.includes(diff)){
        return [arr.indexOf(diff),i]
    }
}

return indexarr;

}
// above time complexity is n^2

function findOptimal(arr,target){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        let diff=target-arr[i];
        if(map.has(diff)){
            return [map.get(diff),i]
        }
        map.set(arr[i],i)
    }
}
console.log(findOptimal([1,2,3,4,5,6,7,8],10)) 