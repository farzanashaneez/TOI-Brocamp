function find(arr){
    let result=[];
    let max=-Infinity;
    let subarray;
    for(let start=0;start<arr.length;start++){
        let sum=0;
        for(end=start;end<arr.length;end++){
            sum+=arr[end];
            result.push({subArray:arr.slice(start,end+1),sum})
            if(sum>max){
                max=sum;
                subarray=arr.slice(start,end+1);
            }
        }
    }
  console.log(result,max,subarray)
}
find([-1,2,88,3,-44,23,9,-55,35,100])

function findwithtarget(arr,k){
    let result=[];
    let max=-Infinity;
    let subarray;
    for(let start=0;start<=arr.length-k;start++){
        let sum=0;
        for(end=start;end<start+k;end++){
            sum+=arr[end];
            result.push({subArray:arr.slice(start,end+1),sum})
            if(sum>max){
                max=sum;
                subarray=arr.slice(start,end+1);
            }
        }
    }
  console.log(result,max,subarray)
}
findwithtarget([-1,2,88,3,-44,23,9,-55,135,100],4)

function findWithSlidingWindowAlgo(arr,k){
    let windowsum=0;
    let maxsum=-Infinity;
    for(let i=0;i<k;i++){
        windowsum+=arr[i];
    }
    console.log(windowsum)
    for(let j=k;j<arr.length;j++){
         windowsum=windowsum-arr[j-k]+arr[j]
         console.log(j,'===>',windowsum)
        if(windowsum>maxsum){
            maxsum=windowsum
        }
    }
    console.log('==>',windowsum,maxsum)
}
findWithSlidingWindowAlgo([-1,2,88,3,-44,23,9,-55,135,100],4)
