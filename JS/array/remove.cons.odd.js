let arr=[1,25,7,3,4,5,6,77,7,77,8,9]
function remove(arr){
for(let i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
        let strt=i;
        let count=0;
        while(arr[i]%2!==0 && i<arr.length){
            count++
            i++;
        }
        console.log(strt,count)
        if(count>1){
            arr.splice(strt,count);
            i=strt-1;

        }
        else{
            i=strt
        }
    }
}
console.log(arr)
}
remove(arr)